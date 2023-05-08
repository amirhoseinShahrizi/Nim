import "./App.css";
import { Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu.js";
import About from "./pages/About.js";
import Tutorial from "./pages/Tutorial";
import Game from "./pages/Game";
import React from "react";
import Testzindex from "./pages/Testzindex";
import LittleMenu from "./components/LittleMenu";

function App() {
  return (
    <>
      <LittleMenu />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/game" element={<Game />} />
        <Route path="/about" element={<About />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/test" element={<Testzindex />} />
      </Routes>
    </>
  );
}

export default App;
