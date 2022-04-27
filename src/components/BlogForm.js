import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const BlogForm = ({info, setInfo, handleNewBlog}) =>{
  
  const handleChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target
    setInfo({...info,[name]:value})
    
  }

  return (
    <div style={{
      backgroundImage:`url(https://r.resimlink.com/Zg9SXGaKAMV5.png)`, 
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: "center",
      backgroundAttachment: "fixed",}}>
    <Container component="main" maxWidth="xs" >
    <Box
      sx={{
            paddingTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
      }}
      
    >
    <Typography component="h1" variant="h4" sx={{ mb: 2 }}>
            New Blog
          </Typography>
          <form noValidate autoComplete="off" onSubmit={handleNewBlog}>
      <Grid container spacing={2}>
      <Grid item xs={12}>
      <TextField
          id="outlined-multiline-flexible-required"
          required
          label="Header"
          fullWidth
          multiline
          maxRows={4}
          name="header"
          value={info.header}
          onChange={handleChange}
        />
        </Grid>
        <Grid item xs={12}>
         <TextField
          id="outlined-multiline-flexible"
          label="Subtitle"
          fullWidth
          multiline
          maxRows={4}
          name="subtitle"
        value={info.subtitle}
        onChange={handleChange}
        />
       </Grid>
       <Grid item xs={12}>
        <TextField
          id="outlined-multiline-static-required"
          label="Image Url"
          fullWidth
          multiline
          rows={4}
          name="imageUrl"
          value={info.imageUrl}
          onChange={handleChange}
          required
        />
        </Grid>
        <Grid item xs={12}>
         <TextField
          id="outlined-multiline-static-required"
          label="Content"
          fullWidth
          multiline
          rows={15}
          name="content"
          value={info.content}
          onChange={handleChange}
          required
        />
        </Grid>
      </Grid>
      <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 5 }}
            >
              Submit
            </Button>
            </form>
    </Box>
    </Container>
    </div>
  );
}

export default BlogForm;