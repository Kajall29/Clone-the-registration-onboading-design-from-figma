import React from "react";
import './index.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontPage from "./frontpage.jsx";
import Page1 from "../src/page1/page1.jsx";
import Page2 from "../src/page2/page2.jsx";
import Page3 from "../src/page3/page3.jsx";
import Page4 from "../src/page4/page4.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="page1" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
        <Route path="page3" element={<Page3 />} />
        <Route path="page4" element={<Page4 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);