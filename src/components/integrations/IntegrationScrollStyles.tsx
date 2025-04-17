
import React from 'react';

const IntegrationScrollStyles = () => {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        .integration-scroll {
          display: flex;
          width: max-content;
          animation: scroll 30s linear infinite;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .integration-scroll-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
        }
      `
    }} />
  );
};

export default IntegrationScrollStyles;
