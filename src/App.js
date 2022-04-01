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
        <Route path="/login" element={<Registration/>}/>
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>}/>
        <Route path="/boards" element={<PrivateRoute><Boards/></PrivateRoute>}/>
        <Route path="/boards/:boardID" element={<PrivateRoute><Board/></PrivateRoute>}/>
        <Route path="/about" element={<PrivateRoute><About/></PrivateRoute>}/>
        <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
      </Routes>
    </div>
  );
}