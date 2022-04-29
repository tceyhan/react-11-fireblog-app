import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../helpers/firebase";
import { AuthContext } from "../contexts/AuthContext";
import cwjpeg from "../assets/logo2.png";
import "../styles/navbar.css";
import "bootstrap/dist/css/bootstrap.css";
// import MenuSvg from "../assets/MenuSvg";



const Navbar = () => {

  const navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);
  
  return (
    <div >
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* {currentUser ? (
          <MenuSvg style={{width:"40px"}} onClick={() => navigate("/")}/>
          ):(
            <MenuSvg style={{width:"40px"}} onClick={() => navigate("/login")}/>
          )} */}

          <img src={cwjpeg} alt="navbar-icon" onClick={()=> navigate("/about")}/>       
          <Link to={"/"} className="navbar-brand text-white">
            <h6> ──── <span style={{fontSize:"2rem",color:"#F5DEB3"}}>{"<Tarık Ceyhan/>"}</span> Blog ────</h6>
          </Link>
          <div className="d-flex text-white align-items-center">
            {currentUser? (
              <>
              <h5 className="mb-0 text-capitalize">
                {currentUser?.displayName}
              </h5>
               <button
               className="ms-2 btn btn-outline-light"
               onClick={() => navigate("/newblog")}
             >
               New Blog
             </button>
               <button
               className="ms-2 btn btn-outline-light"
               onClick={() => navigate("/profile")}
             >
               Profile
             </button>
             </>


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
                onClick={() => logOut()}
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