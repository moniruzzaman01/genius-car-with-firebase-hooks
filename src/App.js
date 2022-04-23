import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbaar from "./components/Navbar/Navbaar";
import ServiceDetails from "./components/Service-details/ServiceDetails";

function App() {
  return (
    <div>
      <Navbaar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/service-details/:id" element={<ServiceDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
