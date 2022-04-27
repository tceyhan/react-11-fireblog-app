import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// import { useContext} from 'react'
import { useState } from 'react';
import BlogCard from '../components/BlogCard'
// import { AuthContext } from '../contexts/AuthContext';



const Dashboard = () => { 

  
  const [blogs, setBlogs] = useState(
  [
  {id:1, title:"a", image:"aa"},
  {id:2, title:"b", image:"aa"},
  {id:3, title:"c", image:"aa"}, 
  ]);
  console.log(blogs);
  console.log(setBlogs);
  // const { currentUser } = useContext(AuthContext);

  return (
    <Box sx={{ flexGrow: 1, mt:"1vw", ml:"5vw", mr:"5vw" }}>
      <div className="dashboard-header"> ─── Dashboard ───</div>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{bgcolor:"lightgray",  justifyContent:"space-around", gap:2 }}>
        { blogs.map((blog) => (       
          <BlogCard key={blog.id} {...blog}  />  
        ))
        }
      </Grid>
    </Box>
  );
}
export default Dashboard