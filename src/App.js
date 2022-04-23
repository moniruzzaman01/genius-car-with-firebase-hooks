import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbaar from "./components/Navbar/Navbaar";
import ServiceDetails from "./components/Service-details/ServiceDetails";
import Login from "./components/Login/Login";
import SignUp from "./components/Sign-up/SignUp";

function App() {
  return (
    <div>
      <Navbaar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/service-details/:id" element={<ServiceDetails />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
