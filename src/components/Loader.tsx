
import React, { useEffect, useState } from 'react';

export default function Loader() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Hide the loader after 2.5 seconds with a fade effect
    const timer = setTimeout(() => {
      setIsHidden(true);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  // Return null when fully hidden to completely remove from DOM
  if (isHidden) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-1000 ${isHidden ? 'opacity-0' : 'opacity-100'}`}>
      <div className="loader-container">
        <div className="loader-circle"></div>
        <div className="loader-rings">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="loader-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
