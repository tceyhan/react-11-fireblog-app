import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../helpers/firebase";
import { AuthContext } from "../contexts/AuthContext";
import cwjpeg from "../assets/logo2.png";
import "../styles/navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Menu, MenuItem } from "@mui/material";
import MenuSvg from "../assets/MenuSvg";



const Navbar = () => {

  const navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <div >
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">       

          <img src={cwjpeg} alt="navbar-icon" onClick={()=> navigate("/about")}/>       
          <Link to={"/"} className="navbar-brand text-white">
            <h6> ──── <span style={{fontSize:"2rem",color:"#F5DEB3"}}>{"<Tarık Ceyhan/>"}</span> Blog ────</h6>
          </Link>
          {/*  */}
        <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{
          background: "transparent",
          border: "none",
          color: "white",
          fontSize: "1.5rem",
          marginTop: "0.5rem",
          marginLeft: "1rem",
        }}
      >
        <MenuSvg />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => navigate("/")}>Anasayfa</MenuItem>
           
        {currentUser ? (
          <>
          <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>
          <MenuItem onClick={() => navigate("/newblog")}>New BLog</MenuItem>
          <MenuItem onClick={() => logOut()}>Log Out</MenuItem>
          </>
        ) : (
          <>
          <MenuItem onClick={() => navigate("/login")}>Login</MenuItem>
          <MenuItem onClick={() => navigate("/register")}>Register</MenuItem>
          </>
        )}
        
        
        
        
      </Menu>
    </div>
        </div>
      </nav>
    </div>
  );
};


export default Navbar;