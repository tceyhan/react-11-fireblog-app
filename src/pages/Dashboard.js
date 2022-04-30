import * as React from 'react';

import Grid from '@mui/material/Grid';
import {   Typography } from '@mui/material';

import { useFetch } from '../helpers/functions';
import BlogForm from '../components/BlogForm';


const Dashboard = () => { 
    const { blogList } = useFetch(); 
  


  return (
    <Grid sx={{ flexGrow: 1, mt:"1vw", ml:"1vw", mr:"1vw" }}>
      <Grid className="dashboard-header">
        <Typography variant='body' > ─── Dashboard ───</Typography>
      </Grid>      
      <Grid spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} color="secondary" >     
         
      <Grid>   <BlogForm  blogList= {blogList}   />     </Grid>
      
      </Grid>
    </Grid>
  );
}
export default Dashboard