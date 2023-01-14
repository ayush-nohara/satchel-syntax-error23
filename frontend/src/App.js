import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Middle from "./containers/middle/Middle";
import Footer from "./containers/footer/Footer";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <div className="gradient_bg">
            <Routes>
              <Route path="/" element={<Navbar />}>
                <Route index element={<Dashboard />} />
              </Route>
            </Routes>
          </div>
        </div>
        <Middle />
        <Footer />
      </Router>
    </>
  );
}

export default App;
