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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { CardActionArea } from '@mui/material';

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
    return `${paragraph.slice(0, maxLength)}`;
  };

  const handleDetail = () => {
    if (!currentUser) {
      // navigate("/login")
      toastWarnNotify("Please login for more details.");
    } else {
      navigate(`/details/${item.id}`, {state: { item }})
    }
  }
  const avatar=item?.displayName?.charAt(0).toUpperCase();
  const title = item?.header.toUpperCase().length>30 ? item?.header.toUpperCase().slice(0, 30)+"...":item?.header.toUpperCase();
  const subheader=item?.displayName+ " - " + item?.date;
  const image= item?.imageUrl ?? "https://picsum.photos/500/300?random=1";
 


  return (
    
  <Card sx={{minHeight:400}} container >       
    <CardActionArea>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {avatar}
          </Avatar>
        } 
        title={title}
        subheader={subheader}
        
      />
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt="Not Photo"
        onClick={handleDetail}        
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">          
            {description(item?.content, 250)  ?? "No description"}            
        </Typography>
        <Typography variant="body" bgcolor="lavender" color="blue" onClick={handleDetail}>
            {item?.content?.length>100 ? "For More...": null}                     
            {item?.content?.length>250 ?<ExpandMoreIcon/>:null}
        </Typography>
        <Typography sx={{mt:2}}>        
          <AccountCircleIcon />
            {item?.user}        
        </Typography>
        
      </CardContent>
      
      {currentUser && (
        
      <CardActions disableSpacing sx={{ bgcolor: red[50]}} >
     
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
      </CardActionArea>
  </Card>
    
  );
}

export default BlogCard
