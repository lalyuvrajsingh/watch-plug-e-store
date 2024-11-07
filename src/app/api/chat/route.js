import { NextResponse } from 'next/server';
import { db } from '../../../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

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
            content: `You are a luxury product expert for FineChrono. Be concise and sales-oriented.

Available Products:
${productContext}

Guidelines:
- Keep responses under 3-4 sentences per point
- Always mention prices with proper formatting ($X,XXX)
- Highlight current discounts as savings opportunities
- End responses with a relevant follow-up question about preferences or needs
- Focus on converting interest into sales
- Use bullet points for listing multiple items
- When listing products, group them by category
- Mention available categories when appropriate`
          },
          {
            role: "user",
            content: message
          }
        ],
        temperature: 0.9,
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