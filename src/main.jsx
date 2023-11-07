import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../routes/Navbar.jsx";
import Create from "../routes/Create.jsx";
import Gallery from "../routes/Gallery.jsx";
import Edit from "../routes/Edit.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index={true} element={<App />} />
        <Route path="/create" element={<Create />}/>
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/edit/:id" element={<Edit />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
