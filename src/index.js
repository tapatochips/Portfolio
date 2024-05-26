import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import App from './App';
import './styles.css'; // Import your main CSS file

// Ensure the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Find the root element
  const rootElement = document.getElementById('root');
  if (rootElement) {
    // Create a root and render the app
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else {
    console.error("Root element not found");
  }
});
