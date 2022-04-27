import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { useContext} from 'react'
// import { useState } from 'react';
import BlogCard from '../components/BlogCard'
// import { AuthContext } from '../contexts/AuthContext';
import { BlogContext } from '../contexts/BlogContext';
import loadingGif from '../assets/spinner.gif'
import { Container, Typography } from '@mui/material';

const Dashboard = () => { 

  const { blogList } = useContext(BlogContext);
  

  return (
    <Box sx={{ flexGrow: 1, mt:"1vw", ml:"5vw", mr:"5vw" }}>
      <div className="dashboard-header"> ─── Dashboard ───</div>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{bgcolor:"lightgray",  justifyContent:"space-around", gap:2 }}>
      {blogList === undefined ? (
          <Container maxWidth="sm">
            <img src={loadingGif} alt="loading_gif" style={{ width: "100%" }} />
          </Container>
        ) : blogList? (
        blogList.map((item, index) => {      
          return <BlogCard key={index} item={item}  />  
        })
        ) : (
          <Container maxWidth="sm">
            <Typography variant="h2" component="h1" gutterBottom>
              I can't find data
            </Typography>
          </Container>
        )
      }

      </Grid>
    </Box>
  );
}
export default Dashboard