import {useState} from "react";
import {Routes, Route} from "react-router-dom";

import Home from "./pages/Home/Home";
import Board from "./pages/Board/Board";
import About from "./pages/About/About";
import Boards from "./pages/Boards/Boards";
import Profile from "./pages/Profile/Profile";
import Registration from "./pages/Registration/Registration";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Registration />}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/boards" element={<Boards/>}/>
        <Route path="/boards/title" element={<Board/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </div>
  );
}