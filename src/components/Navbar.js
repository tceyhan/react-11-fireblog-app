import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../helpers/firebase";
import { AuthContext } from "../contexts/AuthContext";
import cwjpeg from "../assets/logo2.png";
import "../styles/navbar.css";
import {photoURL} from "../helpers/firebase";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
    navigate("/");
  }
 
  
  return (
    <div >
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">       
          <img src={cwjpeg} alt="navbar-icon" onClick={() => navigate("/")}/>       
          <Link to={"/about"} className="navbar-brand text-white">
            <h6> ──── <span style={{fontSize:"2rem",color:"#F5DEB3"}}>{"<Tarık Ceyhan/>"}</span> Blog ────</h6>
          </Link>
          <div className="d-flex text-white align-items-center">
            {currentUser ? (
              <h5 className="mb-0 text-capitalize">
                {currentUser?.displayName}
              </h5>           

            ) : (


              <button
                className="ms-2 btn btn-outline-light"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            )}

            {currentUser? (
              <button
                className="ms-2 btn btn-outline-light"
                onClick={() => handleLogout()}
              >
                Logout
              </button>


            ) : (


              <button
                className="ms-2 btn btn-outline-light"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            )}

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;