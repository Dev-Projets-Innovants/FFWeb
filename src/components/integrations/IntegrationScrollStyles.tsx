
import React from 'react';

const IntegrationScrollStyles = () => {
  return (
    <style jsx>
      {`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .integration-scroll {
          animation: scroll 60s linear infinite;
          width: fit-content;
          display: flex;
        }
        
        .integration-scroll:hover {
          animation-play-state: paused;
        }
      `}
    </style>
  );
};

export default IntegrationScrollStyles;
