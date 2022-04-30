import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, IconButton } from '@mui/material';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useTheme } from '@mui/material/styles';
import { useFetch } from '../helpers/functions';
import BlogForm from '../components/BlogForm';


const Dashboard = () => { 
    const { blogList } = useFetch(); 
    const theme = useTheme();


  return (
    <Box sx={{ flexGrow: 1, mt:"1vw", ml:"5vw", mr:"5vw" }}>
      <div className="dashboard-header"> ─── Dashboard ───</div>
      <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} color="secondary" >
      <IconButton aria-label="previous"color='secondary'>
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>     
      <Container sx={{maxWidth: 700}}>
           <BlogForm  blogList= {blogList}   />        
      </Container>
      <IconButton aria-label="next" color='secondary'>
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
      </Grid>
    </Box>
  );
}
export default Dashboard