import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Details from "../pages/Details";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <Router>      
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />        
        <Route path="/details" element={<Details/>} />
        <Route path="/" element={<PrivateRouter />}>
          <Route path="" element={<Dashboard />} />
        </Route>

      </Routes>
    </Router>
  );
};
export default AppRouter;