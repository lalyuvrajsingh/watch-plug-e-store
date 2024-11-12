const watchKnowledgeSchema = {
  brandInfo: {
    history: String,
    valueRetention: {
      overall: Number, // percentage
      yearlyTrend: Array, // last 5 years trend
      popularModels: Array
    },
    marketPosition: String,
    authentication: String
  },
  modelInfo: {
    specifications: {
      movement: String,
      caseMaterial: String,
      caseSize: String,
      waterResistance: String,
      complications: Array
    },
    marketData: {
      msrp: Number,
      historicalPrices: Array, // past 5 years
      demandTrend: String,
      limitedEdition: Boolean,
      productionYears: String
    },
    investment: {
      valueRetentionScore: Number, // 1-10
      priceHistory: Array,
      marketAnalysis: String,
      futureOutlook: String
    }
  }
};

export default watchKnowledgeSchema; 