import * as React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Commenticon from '@mui/icons-material/ChatBubbleOutline';

import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toastWarnNotify } from '../helpers/toastNotify';




const BlogCard = ({item}) => {

  const { currentUser } = useContext(AuthContext);
  let navigate = useNavigate();

  const description = (paragraph, maxLength) => {
    if (!paragraph) return null;
    if (paragraph.length <= maxLength) return paragraph;
    return `${paragraph.substring(0, maxLength)} ...`;
  };

  const handleDetail = () => {
    if (!currentUser) {
      navigate("/login")
      toastWarnNotify("Please login for more.");
    } else {
      navigate(`/detail/${item.id}`, {state: { item }})
    }
  }

  return (
    <Card sx={{ maxWidth: 345 }} onClick={handleDetail} >       
    
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {item?.user?.charAt(0).toUpperCase()}
          </Avatar>
        } 
        title={item?.subtitle?? "No subtitle"}
        subheader={item?.author}
        date={item?.published_date}
      />
      <CardMedia
        component="img"
        height="194"
        image={item?.imageUrl ?? "https://source.unsplash.com/random"}
        alt="Not Photo"        
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">          
            {description(item?.content, 100) ?? "No description"}
        </Typography>
        <ExpandMoreIcon />
      </CardContent>
      
      {currentUser && (

      <CardActions disableSpacing>

        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="comment">
          <Commenticon />
        </IconButton>      

      </CardActions>

      
      )}
    </Card>
    
  );
}

export default BlogCard
