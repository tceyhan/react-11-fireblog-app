import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

import { useFetch } from '../helpers/functions';
import BlogForm from '../components/BlogForm';

const Dashboard = () => { 
    const { blogList } = useFetch(); 

  return (
    <Box sx={{ flexGrow: 1, mt:"1vw", ml:"5vw", mr:"5vw" }}>
      <div className="dashboard-header"> ─── Dashboard ───</div>
      <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{bgcolor:"lightgray", justifyContent:"flex-start" }}>     
      <Container sx={{maxWidth: 700}}>
           <BlogForm  blogList= {blogList} />        
      </Container>
      </Grid>
    </Box>
  );
}
export default Dashboard