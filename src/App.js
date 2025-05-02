// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';   // v6 API 
import NavBar from './components/NavBar';
import Presentation from './components/Presentation';
import CVTraditional from './components/CVTraditional';
import CVInfographic from './components/CVInfographic';
import VideoCV from './components/VideoCV';
import BlogEntry from './components/BlogEntry';

function App() {
  return (
    <div className="App">
      <NavBar />  
      <main>
        <Routes>  
          <Route path="/" element={<Presentation />} />
          <Route path="/cv" element={<CVTraditional />} />
          <Route path="/infografico" element={<CVInfographic />} />
          <Route path="/video" element={<VideoCV />} />
          <Route path="/blog" element={<BlogEntry />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
