import {Routes, Route} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Registration from "./pages/Registration/Registration";
import Home from "./pages/Home/Home";
import Boards from "./pages/Boards/Boards";
import Board from "./pages/Board/Board";
import About from "./pages/About/About";
import Profile from "./pages/Profile/Profile";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Registration />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/boards" element={<Boards />} />
          <Route path="/boards/:boardID" element={<Board />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}