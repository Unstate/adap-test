import "../assets/styles/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <div>
            Hello Test
        </div>
    </StrictMode>
);
