import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// ✅ CORRECT PATH
import "./assets/css/bootstrap.min.css";
import "./assets/css/custom.css";
import ContactProvider from "./contextApi/ContactContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContactProvider>
      <App />
    </ContactProvider>
  </StrictMode>,
);
