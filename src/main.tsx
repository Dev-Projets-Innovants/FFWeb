
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './App.css';

// Error handling for initial render
try {
  const rootElement = document.getElementById("root");
  
  if (!rootElement) {
    throw new Error("Failed to find the root element");
  }
  
  const root = createRoot(rootElement);
  
  root.render(<App />);
  
  console.log("Application successfully mounted");
} catch (error) {
  console.error("Failed to render the application:", error);
  
  // Show a basic error message if rendering fails
  const rootElement = document.getElementById("root");
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 20px; text-align: center;">
        <h2>Something went wrong</h2>
        <p>The application failed to load properly. Please check the console for more details.</p>
        <button onclick="window.location.reload()" style="padding: 10px; background: #9b87f5; color: white; border: none; border-radius: 4px; cursor: pointer; margin-top: 20px;">
          Reload page
        </button>
      </div>
    `;
  }
}
