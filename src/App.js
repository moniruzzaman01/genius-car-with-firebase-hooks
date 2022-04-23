import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbaar from "./components/Navbar/Navbaar";
import Login from "./components/Login/Login";
import SignUp from "./components/Sign-up/SignUp";
import Booking from "./components/Booking/Booking";

function App() {
  return (
    <div>
      <Navbaar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/booking/:id" element={<Booking />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
