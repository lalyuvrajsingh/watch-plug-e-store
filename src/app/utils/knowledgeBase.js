'use client'
import { fetchWatchMarketData } from '../services/watchDataService';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';

export const watchDatabase = {
  "BELL & ROSS": {
    models: {
      "BR 03-92 WORLDTIMER": {
        specifications: {
          reference: "BR0392-WW-CE/SCA",
          case: "42mm square ceramic case",
          movement: "Caliber BR-CAL.303 automatic",
          waterResistance: "100m",
          crystal: "Sapphire with anti-reflective coating",
          powerReserve: "42 hours",
          functions: ["Hours", "Minutes", "Seconds", "Date", "World time"]
        },
        marketData: {
          releasePrice: 9999,
          currentMarketValue: 9899,
          historicalPrices: [
            { year: 2021, price: 9999 },
            { year: 2022, price: 9950 },
            { year: 2023, price: 9899 }
          ],
          marketTrend: "Stable with slight depreciation",
          productionNumbers: "Limited production, not numbered series",
          demandIndex: "Moderate"
        },
        investmentInsights: {
          valueRetention: "75%",
          collectibility: "Medium",
          futureOutlook: "Expected to maintain value with potential for slight appreciation",
          marketPosition: "Mid-tier luxury segment",
          uniqueFeatures: [
            "Distinctive square case design",
            "World time functionality",
            "Aviation heritage"
          ]
        }
      }
    },
    brandInfo: {
      founded: 1992,
      headquarters: "Paris, France",
      specialization: "Aviation-inspired luxury watches",
      marketPosition: "Luxury sports watches",
      priceSegment: "Mid to high-end luxury",
      resaleStrength: "Moderate to strong",
      authenticityFeatures: [
        "Unique square case design",
        "BR engraving on case back",
        "Individual serial numbers"
      ]
    }
  }
};

export async function retrieveWatchInfo({ brand, model }) {
  return watchDatabase[brand]?.models[model] || null;
}

export function generateContext(watchInfo, userQuery) {
  if (!watchInfo) return '';
  
  let context = '';
  
  // Add reference number and key specs
  context += `Ref. ${watchInfo.specifications.reference}\n`;
  context += `${watchInfo.specifications.case} | ${watchInfo.specifications.movement}\n\n`;
  
  // Add market value and trend
  context += `Market Value: $${watchInfo.marketData.currentMarketValue.toLocaleString()}\n`;
  context += `${watchInfo.marketData.marketTrend}\n\n`;
  
  // Add investment insight
  context += `Investment Outlook: ${watchInfo.investmentInsights.futureOutlook}\n`;
  
  return context;
} 