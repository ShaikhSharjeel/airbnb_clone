import React from "react";
import Home from "./components/Home";
import Details from "./components/Details";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Details" element={<Details />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
