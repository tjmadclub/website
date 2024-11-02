import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "@/App";
import "@/styles/globals.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/mobileapps">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
