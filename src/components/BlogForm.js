import React from "react";
import BlogCard from "./BlogCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";


const BlogForm = ({blogList}) => {
  return (
    
      <Box sx={{ width: "100%"}}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {
                blogList?.map((item,index) => {
                    return(
                        <Grid item xs={12} sm={6} md={4} key={index} >
                          <BlogCard item={item} />                         
                        </Grid>
                    )
                })
            }
          
        </Grid>
      </Box>
      
    
  );
}

export default BlogForm;