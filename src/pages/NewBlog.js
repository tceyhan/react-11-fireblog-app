import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import BlogPng from "../assets/blok.png";
import { useContext } from "react";
import {BlogContext} from "../contexts/BlogContext";
import {AuthContext} from "../contexts/AuthContext";
import { addBlog } from "../helpers/functions";
import { useNavigate } from "react-router-dom";
import NotFound from "./Notfound";

function NewBlog() {

  const navigate = useNavigate();
  const { blogList, setBlogList} = useContext(BlogContext);
  const { currentUser } = useContext(AuthContext);

  const handleChange = (e) => {
     e.preventDefault();
        setBlogList({
      ...blogList,
      [e.target.name]: e.target.value,
      user: currentUser.email,
      date: new Date().toLocaleDateString(),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addBlog(blogList);
    navigate("/");
    setBlogList({ [e.target.name]: "" });
  };
  console.log(blogList);
  return (
    <div className="newblog">
      {currentUser ? (
        <>
          <img src={BlogPng} alt="" style={{ width: "150px" }} />
          <h1>----New Blog----</h1>
          <form onSubmit={handleSubmit}>
            <Box sx={{ width: "40%", margin: "auto" }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
              <Grid item xs={12}>
              <TextField
                label="Header"
                placeholder="Header"
                multiline
                required
                style={{ width: "100%" }}
                name="header"
                value={blogList.header}
                onChange={handleChange}
              />
            </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="subtitle"
                    placeholder="subtitle"
                    multiline
                    required
                    style={{ width: "100%" }}
                    name="subtitle"
                    value={blogList.subtitle}
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
                    value={blogList.imageUrl}
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
                    value={blogList.content}
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
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
}

export default NewBlog;