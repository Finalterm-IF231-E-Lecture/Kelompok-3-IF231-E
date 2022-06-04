import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Welcome from "./pages/Welcome";
import MulaiMain from "./pages/gameComponents";
import Rules from "./pages/Rules";
import About from "./pages/About";
import Credits from "./pages/Credits";
import Footer from "./components/Footer";
import Header from "./components/Header";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App(props) {
  return (
    <Router>
      <Header />
      <div className="container-fluid">
        <div className="border border-2 py-3 w-90 mx-auto containerBox">
          <Routes>
            <Route path="/" element={<Welcome />}></Route>
            <Route path="/MulaiMain" element={<MulaiMain />}></Route>
            <Route path="/Rules" element={<Rules />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Credits" element={<Credits />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
