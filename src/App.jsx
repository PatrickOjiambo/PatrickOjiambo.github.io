import React from "react";
import Projects from "./Projects/Projects";
import Header from "./HomePage/Header";
import Body from "./HomePage/Body";
import {  BrowserRouter, Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/projects" element={<Projects />} />
      </Routes>
     
      </BrowserRouter>
      
    </div>
    
    );
}

export default App;