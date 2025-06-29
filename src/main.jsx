import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Index from "./index.jsx";
import Banner from "./Home/Banner.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Index></Index>
   
  </StrictMode>
);
