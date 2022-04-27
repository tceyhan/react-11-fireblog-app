import React,{useContext, useState} from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import {
  Container,
  Box,
  Avatar,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { BlogContext } from '../contexts/BlogContext';
import { toastSuccessNotify } from '../helpers/toastNotify';
import { AuthContext } from '../contexts/AuthContext';

const UpdateBlog = () => {
  const navigate = useNavigate()

  const {editBlog} = useContext(BlogContext);
  const {currentUser} = useContext(AuthContext);

  const location = useLocation()  
  const item = location.state.item
  // console.log(item);

  const [posts, setPosts] = useState({
    id:item.id,
    title: item.title,
    content: item.content,
    imgUrl: item.imgUrl,
    user:currentUser.email,
    addDate: new Date(),
    likeCount: 0,
    commentCount: 0,

  });

  const handleChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    setPosts({...posts,[name]:value})
    console.log(posts)

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editBlog(posts);
    toastSuccessNotify("Blog updated successfully!");
    navigate("/")
  }

  return (
    <Container className="login-container" style={{ height: "110vh" }}>
    <Box className="login-box">
      <Avatar
        alt="avatar_img"
        src={item.imgUrl}
        sx={{ width: 256, height: 256 }}
      />
      <Typography
        variant="h4"
        component="h1"
        sx={{ m: 4, fontFamily: "Girassol", color: "#046582" }}
      >
        ── UPDATE BLOG ──
      </Typography>
    
      <form 
      onSubmit={handleSubmit}
      >
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TextField
              id="title"
              label="Title"
              name="title"
              variant="outlined"
              type="text"
              autoFocus
              autoComplete="title"
              required
              value={posts.title}
              onChange={handleChange}
              
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="imgUrl"
              label="Image URL"
              name="imgUrl"
              variant="outlined"
              type="text"
              autoComplete="image-url"
              required
              // value={item.imgUrl}
              defaultValue={posts.imgUrl}
              onChange={handleChange}

            
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="content"
              label="Content"
              name="content"
              multiline
              variant="outlined"
              type="text"
              rows={10}
              autoFocus
              autoComplete="content"
              required
              // value={item.content}
              defaultValue={posts.content}
              onChange={handleChange}

              
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              style={{ backgroundColor: "#046582", fontWeight: 700 }}
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
            >
              Update
            </Button>
          </Grid>
        </Grid>
      </form>
      
    </Box>
  </Container>
  )
}

export default UpdateBlog