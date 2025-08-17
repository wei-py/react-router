// import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
// import App from "./app";
// import About from '../about'
const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<App />} /> */}
      {/* <Route path="about" element={<About />} /> */}
    </Routes>
  </BrowserRouter>,
);
