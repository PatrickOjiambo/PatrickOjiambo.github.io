import React from "react";
import HomePage from "./HomePage/HomePage";
import Projects from "./Projects/Projects";
import Header from "./HomePage/Header";
import {  BrowserRouter, Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<Projects />} />
      </Routes>
     
      </BrowserRouter>
      
    </div>
    
    );
}

export default App;