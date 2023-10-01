import React from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import News from "./components/News";
import Footer from "./components/Footer";
import Crypto from "./components/Crypto";
import CryptoDetail from "./components/CryptoDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div style={{ width: "100vw" }} className="bg-[#000]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/news" element={<News />} />
          <Route path="/cryptoDetail/:uuid" element={<CryptoDetail />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
