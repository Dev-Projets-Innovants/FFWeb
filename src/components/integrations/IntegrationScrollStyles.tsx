
import React from 'react';

const IntegrationScrollStyles = () => {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        .integration-scroll {
          animation: scroll 60s linear infinite;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `
    }} />
  );
};

export default IntegrationScrollStyles;
