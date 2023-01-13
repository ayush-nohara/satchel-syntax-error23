import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";

import Navbar from "./components/navbar/Navbar";
import Middle from "./containers/middle/Middle";
import Footer from "./containers/footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Dashboard />
        <Middle />
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
