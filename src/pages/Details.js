import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';

import { deleteBlog } from "../helpers/functions";
import { AuthContext } from "../contexts/AuthContext";

const Detail= () =>{

  const { currentUser } = useContext(AuthContext);
  const location = useLocation();

  const [detail, setDetail] = useState({});
  const navigate = useNavigate()

  useEffect(() => {
    setDetail(location.state.item);

  }, [location]);
  console.log(detail);

  const DeleteClick = () =>{
    deleteBlog(location.state.item.id);
    navigate("/")
  }
  const EditClick = () =>{
    // navigate("/update/", {state:{detail}})
    navigate(`/update/${detail.id}`, {state: { detail }})
    
  }

 
  return (
    <Grid>
      <Grid className="dashboard-header">
        <Typography variant='body' > ─── Details ───</Typography>
      </Grid>     
        <Card sx={{ maxWidth: "80vw", margin: "auto" }}>
          <CardActionArea>
            <CardMedia              
              component="img"              
              image={detail.imageUrl}
              alt={detail.header}
              sx={{ maxWidth: "50%",maxHeight: "50%", margin: "auto" }}
            />
             {currentUser.email === location.state.item.user && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
           <IconButton sx={{bgcolor:"green"}}>
              <ModeEditOutlinedIcon  onClick={EditClick}/>               
            </IconButton>
            <IconButton sx={{bgcolor:"red"}}>
              <DeleteOutlineIcon onClick={DeleteClick}/>
            </IconButton>
         
        </div>
      )}
            <CardContent sx={{ backgroundColor: "#FFF6EA" }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontFamily: "'Girassol', cursive", color: "#046482" }}
              >
                {detail.header}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {detail.date}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {detail.content}
              </Typography>
            </CardContent>
          </CardActionArea>
          
          <Typography
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",                            
              marginTop: "1rem",
            }}
          >
            <EditIcon />
            {detail.displayName}
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",              
              marginBottom: "1rem",              
            }}
          >
            <AccountCircleIcon />
            {detail.user}
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <IconButton>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton>
              <ChatBubbleOutlineIcon />
            </IconButton>           
          </Typography>
        </Card>
       
      
     
    </Grid>
  );
}

export default Detail;