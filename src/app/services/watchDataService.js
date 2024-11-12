'use client'
import axios from 'axios';

const CHRONO24_API_KEY = process.env.NEXT_PUBLIC_CHRONO24_API_KEY;

export async function fetchWatchMarketData(brand, model) {
  try {
    if (!CHRONO24_API_KEY) {
      console.warn('CHRONO24_API_KEY not configured');
      return null;
    }

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

    return {
      currentMarket: chrono24Data.data,
    };
  } catch (error) {
    console.error('Error fetching watch market data:', error);
    return null;
  }
} 