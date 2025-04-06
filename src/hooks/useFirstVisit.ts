
import { useState, useEffect } from 'react';

export function useFirstVisit(): boolean {
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  
  useEffect(() => {
    // If there's a session flag already set, this isn't the first visit
    const hasVisited = sessionStorage.getItem('hasVisitedBefore');
    
    if (hasVisited) {
      setIsFirstVisit(false);
    } else {
      // Set the flag for future page loads within this session
      sessionStorage.setItem('hasVisitedBefore', 'true');
      setIsFirstVisit(true);
    }
  }, []);
  
  return isFirstVisit;
}
