import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import BlogPng from "../assets/blok.png";
import { useContext } from "react";
import { BlogContext } from "../contexts/BlogContext";
import { AuthContext } from "../contexts/AuthContext";
import { addBlog } from "../helpers/functions";
import { useNavigate } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function NewBlog() {
  const navigate = useNavigate();
  const { blogList, setBlogList } = useContext(BlogContext);
  const { currentUser } = useContext(AuthContext);

  const handleChange = (e) => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + "/" + mm + "/" + yyyy;

    e.preventDefault();
    setBlogList({
      ...blogList,
      [e.target.name]: e.target.value,
      user: currentUser.email,
      date: today,
      displayName: currentUser.displayName,
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
    <Box
      sx={{
        width: "40%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mt: 2,
      }}
    >
      <img src={BlogPng} alt="" style={{ width: "150px" }} />
      <h1>----New Blog----</h1>
      <form onSubmit={handleSubmit}>
        <Box>
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
              <Button className="btn-success text-white h6" >ADD BLOG<AddCircleOutlineIcon /></Button> 
            </Grid>
          </Grid>
        </Box>
      </form>
    </Box>
  );
}

export default NewBlog;
