import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Landing from "./Pages/Landing_Page/Landing"
import Home from "./Pages/Homepage/Home"

function App() {
  return (
    <>
      <div className="placeholder">
        <h1>This website is a work in progress</h1>
      </div>
      <Landing />
    </>
  );
}

export default App;
