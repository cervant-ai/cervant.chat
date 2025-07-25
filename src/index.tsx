import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CervantLanding } from "./screens/CervantLanding";
import { CervantDetails } from "./screens/CervantDetails";
import { ContactForm } from "./screens/ContactForm";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CervantLanding />} />
        <Route path="/cervant" element={<CervantDetails />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);