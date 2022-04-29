import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShareIcon from '@mui/icons-material/Share';


import Button from "@mui/material/Button";
import { deleteBlog } from "../helpers/functions";
import { AuthContext } from "../contexts/AuthContext";

const Detail= () =>{

  const { currentUser } = useContext(AuthContext);
  const location = useLocation();

  const [detail, setDetail] = useState({});
  const navigate = useNavigate()

  useEffect(() => {
    setDetail(location.state.item);

  }, []);
  console.log(detail);

  const DeleteClick = () =>{
    deleteBlog(location.state.item.id);
    navigate("/")
  }
  const EditClick = () =>{
    navigate("/update", {state:{detail}})
    
  }

  return (
    <div style={{ marginTop: "2rem" }}>      
        <Card sx={{ maxWidth: "90vw", margin: "auto" }}>
          <CardActionArea>
            <CardMedia              
              component="img"              
              image={detail.imageUrl}
              alt={detail.header}
              sx={{ maxWidth: "50%",maxHeight: "50%", margin: "auto" }}
            />
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
              gap: "10px",
              marginBottom: "2rem",
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
       
      
      {currentUser.email === location.state.item.user && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "1rem",
          }}
        >
          <Button variant="contained" color="success" onClick={EditClick}>
            Update
          </Button>
          <Button variant="contained" color="error" onClick={DeleteClick}>
            Delete
          </Button>
        </div>
      )}
    </div>
  );
}

export default Detail;