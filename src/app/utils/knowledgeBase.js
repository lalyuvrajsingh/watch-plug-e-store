'use client'
import { fetchWatchMarketData } from '../services/watchDataService';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';

export async function retrieveWatchInfo({ brand, model }) {
  try {
    // Fetch real-time market data
    const marketData = await fetchWatchMarketData(brand, model);
    
    // Fetch our inventory data
    const productsRef = collection(db, 'products');
    const q = query(
      productsRef,
      where('brand', '==', brand)
    );
    const querySnapshot = await getDocs(q);
    
    const knowledge = {
      productInfo: [],
      marketData: marketData?.currentMarket || {},
      historicalData: marketData?.historicalData || {},
      inventory: []
    };

    querySnapshot.forEach(doc => {
      knowledge.inventory.push({
        id: doc.id,
        ...doc.data()
      });
    });

    return knowledge;
  } catch (error) {
    console.error("Error retrieving watch information:", error);
    return null;
  }
}

export function generateContext(knowledge, userQuery) {
  let context = '';
  
  // Add brand information
  if (knowledge.marketData.valueRetention) {
    context += `**Brand Value Information**\n`;
    context += `• Value Retention: ${knowledge.marketData.valueRetention}%\n`;
    context += `• Market Position: ${knowledge.marketData.marketTrends}\n`;
    context += `• Investment Outlook: ${knowledge.marketData.investmentOutlook}\n\n`;
  }

  // Add historical value data
  if (knowledge.historicalData.length > 0) {
    context += `**Historical Value Trends**\n`;
    knowledge.historicalData.forEach(history => {
      context += `• ${history.year}: $${history.averagePrice.toLocaleString()} (${history.percentageChange > 0 ? '+' : ''}${history.percentageChange}%)\n`;
    });
    context += '\n';
  }

  // Add current product information
  if (knowledge.productInfo.length > 0) {
    context += `**Available Models**\n`;
    knowledge.productInfo.forEach(product => {
      context += `• ${product.name}\n`;
      context += `  Price: $${product.sellingPrice.toLocaleString()}\n`;
      context += `  Condition: ${product.condition}\n`;
      if (product.specifications) {
        context += `  Specifications: ${product.specifications.join(', ')}\n`;
      }
      context += '\n';
    });
  }

  return context;
} 