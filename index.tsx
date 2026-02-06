import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

console.log("React App: Starting initialization...");

const mountRoot = () => {
  try {
    const rootElement = document.getElementById('root');
    if (!rootElement) {
      throw new Error("Не удалось найти элемент #root на странице.");
    }

    console.log("React App: Found root element, mounting...");
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("React App: Render called successfully.");
  } catch (err) {
    console.error("React App Error during mount:", err);
    // Пробрасываем ошибку в window.onerror, если она не была поймана раньше
    window.dispatchEvent(new ErrorEvent('error', {
      error: err,
      message: err.message
    }));
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountRoot);
} else {
  mountRoot();
}