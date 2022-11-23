import React from 'react';
import './App.css';
import Main from "./pages/Main";
import About from "./pages/About";
import Search from "./pages/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/search/:content" element={<Search />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
