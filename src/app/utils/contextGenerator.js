export function generateContext(knowledge, userQuery) {
  let context = '';
  
  if (knowledge?.marketData) {
    const { marketData, inventory } = knowledge;
    
    // Add market analysis
    context += `**Current Market Analysis**\n`;
    context += `• Average Market Price: $${marketData.averagePrice?.toLocaleString()}\n`;
    context += `• Price Trend (3 months): ${marketData.priceTrend}\n`;
    context += `• Market Demand: ${marketData.demandIndex}\n\n`;

    // Add historical performance
    // if (historicalData?.priceHistory) {
    //   context += `**Value History**\n`;
    //   historicalData.priceHistory.forEach(record => {
    //     context += `• ${record.year}: $${record.price.toLocaleString()} (${record.change}%)\n`;
    //   });
    //   context += '\n';
    // }

    // Add our inventory
    if (inventory.length > 0) {
      context += `**Available in Our Collection**\n`;
      inventory.forEach(item => {
        context += `• ${item.name}: $${item.sellingPrice.toLocaleString()}\n`;
        context += `  Condition: ${item.condition}\n`;
      });
    }
  }

  return context;
} 