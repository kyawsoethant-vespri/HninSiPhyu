import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import FictionBooks from "./pages/FictionBooks";
import Others from "./pages/Others";
import PoemBooks from "./pages/PoemBooks";

const App = () => {
  return (
    
    <div>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/poembooks" element={<PoemBooks />} />
        <Route path="/fictionbooks" element={<FictionBooks />} />
        <Route path="/others" element={<Others />} />
      </Routes>
    </div>
  );
};

export default App;
