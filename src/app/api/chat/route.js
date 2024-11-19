import { NextResponse } from 'next/server';
import { db } from '../../../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { watchDatabase } from '../../utils/knowledgeBase';

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_API_KEY = process.env.GROQ_API_KEY;

export async function POST(request) {
  try {
    const { message } = await request.json();
    
    // Get all products from Firebase
    const productsRef = collection(db, 'products');
    const querySnapshot = await getDocs(productsRef);
    
    // Group products by category
    const productsByCategory = {};
    querySnapshot.docs.forEach(doc => {
      const product = {
        id: doc.id,
        ...doc.data(),
        productLink: `/product/${doc.id}`
      };
      const category = product.category || 'Other';
      if (!productsByCategory[category]) {
        productsByCategory[category] = [];
      }
      productsByCategory[category].push(product);
    });

    // Create context string for all products by category
    const productContext = Object.entries(productsByCategory)
      .map(([category, products]) => 
        `${category}:\n${products.map(p => 
          `• ${p.brand} ${p.name}:
           - Price: $${p.sellingPrice?.toLocaleString() || 'N/A'}
           - Brand: ${p.brand}
           - Model: ${p.name}
           - Discount: ${p.discount}%`
        ).join('\n\n')}`
      ).join('\n\n');

    const systemPrompt = `You are an experienced luxury watch dealer with 20+ years in the industry. 
Communicate with authority and precision about watch specifications, market values, and investment potential.

Key behaviors:
- Always mention specific reference numbers
- Quote exact specifications when available
- Provide historical price data and future value projections
- Discuss market positioning and collector sentiment
- Compare with similar models in the category
- Share insider knowledge about production numbers and market trends
- Be direct and confident in recommendations
- Use technical terminology accurately

When discussing value:
- Quote specific historical prices with dates
- Mention recent auction results if relevant
- Explain factors affecting future value
- Discuss production numbers impact
- Reference market demand trends
- Compare with competitor models

Available Products and Market Data:
${productContext}

Additional Watch Database:
${JSON.stringify(watchDatabase, null, 2)}`;

    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: [
          {
            role: "system",
            content: systemPrompt
          },
          {
            role: "user",
            content: message
          }
        ],
        temperature: 0.7,
        max_tokens: 1024
      }),
    });

    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error.message);
    }

    return NextResponse.json({
      response: data.choices[0].message.content
    });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Service temporarily unavailable' },
      { status: 500 }
    );
  }
}