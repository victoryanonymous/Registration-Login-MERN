import React from "react";
import ReactDom from "react-dom/client";
import App from "./components/App";
import Footer from "./components/Footer";

ReactDom.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>
);
