import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const rootElement = document.getElementById("root");

if (!rootElement) {
  // Fallback if root element is missing
  const fallback = document.createElement("div");
  fallback.id = "root";
  fallback.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 2rem;
    font-family: system-ui, -apple-system, sans-serif;
    background-color: #fee2e2;
    color: #991b1b;
  `;
  fallback.innerHTML = `
    <div style="text-align: center; max-width: 600px;">
      <h1 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">
        ⚠️ Root Element Missing
      </h1>
      <p style="margin-bottom: 0.5rem;">
        The root element with id "root" was not found in the HTML.
      </p>
      <p style="margin-bottom: 0.5rem;">
        Please ensure your <code style="background: #fecaca; padding: 0.125rem 0.25rem; border-radius: 0.25rem;">index.html</code> contains:
      </p>
      <pre style="background: #fecaca; padding: 1rem; border-radius: 0.5rem; overflow-x: auto; text-align: left; margin-top: 1rem;">
&lt;div id="root"&gt;&lt;/div&gt;</pre>
    </div>
  `;
  document.body.appendChild(fallback);
  console.error(
    "Root element with id 'root' not found. Please check your index.html file."
  );
} else {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
