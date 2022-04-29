import React, { useContext } from "react";
import { Container, Box, Typography } from "@mui/material";

import { AuthContext } from "../contexts/AuthContext";
import "../styles/profile.css";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);
  return (
    <Container className="profile">
      <Typography variant="header" component="h1"  align="center">
        ── Profile ──
      </Typography>

      <Typography style={{ margin: "10px" }}>Display Name</Typography>
      <Typography variant="h5">
        {currentUser.displayName ?? "No Name"}
      </Typography>
      <Typography style={{ margin: "10px" }}>E-mail</Typography>
      <Typography variant="h5">{currentUser.email ?? "No Email"}</Typography>
    </Container>
  );
};

export default Profile;
