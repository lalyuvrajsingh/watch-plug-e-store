'use client'
import axios from 'axios';

const WATCHBASE_API_KEY = process.env.NEXT_PUBLIC_WATCHBASE_API_KEY;
const CHRONO24_API_KEY = process.env.NEXT_PUBLIC_CHRONO24_API_KEY;

export async function fetchWatchMarketData(brand, model) {
  try {
    // Fetch current market data from Chrono24
    const chrono24Data = await axios.get(`https://api.chrono24.com/watches`, {
      headers: {
        'Authorization': `Bearer ${CHRONO24_API_KEY}`,
      },
      params: {
        brand,
        model,
        limit: 10
      }
    });

    // Fetch historical data from WatchBase
    const watchbaseData = await axios.get(`https://api.watchbase.com/v1/watches`, {
      headers: {
        'X-Api-Key': `${WATCHBASE_API_KEY}`,
      },
      params: {
        brand,
        model
      }
    });

    return {
      currentMarket: chrono24Data.data,
      historicalData: watchbaseData.data
    };
  } catch (error) {
    console.error('Error fetching watch market data:', error);
    return null;
  }
} 