import React from "react";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./containers/footer/Footer"

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
