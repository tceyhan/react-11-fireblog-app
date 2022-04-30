import React, { useEffect, useState } from 'react'
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LogoBlog from "../assets/blok.png";
import { useContext } from "react";
import {AuthContext} from "../contexts/AuthContext";
import { editBlog } from "../helpers/functions";
import { useLocation, useNavigate } from "react-router-dom";
import { Typography } from '@mui/material';



const UpdateBlog = () => {

  const { currentUser } = useContext(AuthContext);

  const [updateBlog,setUpdateBlog] = useState();

  const location = useLocation();

  const navigate = useNavigate()

  console.log(location.state.detail)

  useEffect(() => {
    setUpdateBlog(location.state.detail);
  },[]);

  console.log(updateBlog);

  const handleChange = (e) => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy; 
    e.preventDefault();    
    setUpdateBlog({
      ...updateBlog,
      [e.target.name]: e.target.value,
      user: currentUser.email,
      displayName: currentUser.displayName,
      date: today,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    editBlog(updateBlog)
    navigate("/");

  };
  return (
    <Grid container direction="column" justify="center" alignItems="center">
          <Grid><img src={LogoBlog} alt="" style={{ width: "150px" }} /></Grid> 
          <Typography variant="h2"  >--Update Blog--</Typography>
          <form onSubmit={handleSubmit}>
            <Box sx={{ width: "80%", margin: "auto" }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={12}>
                  <TextField
                    label="Header"
                    placeholder="Title"
                    multiline
                    required
                    style={{ width: "100%" }}
                    name="header"
                    value={updateBlog?.header}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="İmage Url"
                    placeholder="İmage Url"
                    multiline
                    required
                    style={{ width: "100%" }}
                    name="imageUrl"
                    value={updateBlog?.imageUrl}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Content"
                    multiline
                    rows={15}
                    required
                    style={{ width: "100%" }}
                    name="content"
                    value={updateBlog?.content}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="success" type="submit">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </form>
      </Grid>
  )
}

export default UpdateBlog