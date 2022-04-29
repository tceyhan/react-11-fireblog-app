import React, { useContext } from "react";
import { Container, Typography } from "@mui/material";

import { AuthContext } from "../contexts/AuthContext";
import "../styles/profile.css";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);
  return (
    <>
    <div className="dashboard-header"> ─── Profile───</div>
    <Container className="profile">    
      <Typography className="profile-item">Display Name</Typography>
      <Typography className="profile-item" variant="h5">
        {currentUser.displayName ?? "No Name"}
      </Typography>
      <Typography className="profile-item">E-mail</Typography>
      <Typography className="profile-item"variant="h5">{currentUser.email ?? "No Email"}</Typography>
    </Container>
    </>
  );
};

export default Profile;
