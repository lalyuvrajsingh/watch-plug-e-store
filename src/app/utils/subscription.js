import { db } from '../../../firebaseConfig';
import { doc, updateDoc, getDoc } from 'firebase/firestore';

export const SUBSCRIPTION_TIERS = {
  free: {
    maxProducts: 50,
    maxStorage: 1, // GB
    features: ['Basic Analytics', 'Standard Support']
  },
  pro: {
    maxProducts: 500,
    maxStorage: 10,
    features: ['Advanced Analytics', 'Priority Support', 'API Access']
  },
  enterprise: {
    maxProducts: 999999,
    maxStorage: 100,
    features: ['Custom Solutions', 'Dedicated Support', 'White Label Options']
  }
};

export async function upgradeSubscription(userId, newTier) {
  const userRef = doc(db, 'users', userId);
  
  await updateDoc(userRef, {
    subscriptionTier: newTier,
    subscriptionUpdatedAt: new Date(),
  });
}

export async function checkSubscriptionLimits(userId) {
  const userDoc = await getDoc(doc(db, 'users', userId));
  const userData = userDoc.data();
  const tier = SUBSCRIPTION_TIERS[userData.subscriptionTier || 'free'];
  
  return {
    withinLimits: true, // Implement your limit checking logic
    limits: tier
  };
} 