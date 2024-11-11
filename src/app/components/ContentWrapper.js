'use client'
import { useLoading } from '../context/LoadingContext';

export default function ContentWrapper({ children }) {
  const { isLoading } = useLoading();
  
  return (
    <div style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
      {children}
    </div>
  );
} 