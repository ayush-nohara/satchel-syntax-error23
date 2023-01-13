import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";

import Navbar from "./components/navbar/Navbar";
import Footer from "./containers/footer/Footer"

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
      </div>
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
