import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Details from "../pages/Details";
import NewBlog from "../pages/NewBlog";
import PrivateRouter from "./PrivateRouter";
import Notfound from "../pages/Notfound";

const AppRouter = () => {
  return (
    <Router>      
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />        
        {/* <Route path="/details/:id" element={<Details/>} /> */}
        <Route element={<PrivateRouter />}>
          <Route path="/details/:id" element={<Details/>} />
          <Route path="/newblog" element={<NewBlog/>}/>
        </Route>
          {/* <Route
          path="/details/:id"
          element={currentUser ? <Details /> : <Navigate to="/login" />}
        /> */}
        <Route path="*" element={<Notfound />} />

      </Routes>
    </Router>
  );
};
export default AppRouter;