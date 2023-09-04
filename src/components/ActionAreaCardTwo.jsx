import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardActionArea } from '@mui/material';

import CardImg from '../images/dress-picture.jpg';
import '../styles/ActionAreaCardTwo.css';

const ActionAreaCardTwo = () => {
  return (
    <Card className='card-container'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="540"
          image={CardImg}
          alt="sweatshirt picture"
        />
      </CardActionArea>
      <CardContent className='card-content'>
        <Typography gutterBottom variant="h5" component="div" className='product-name'>
        T-shirt sans manches
        </Typography>
        <Typography variant="body2" color="text.secondary" className='product-desc'>
        Oversized Cropped Top Fashion Sweatshirts & Hoodies,Quarter Zipper Sweatshirts,
        Drop Shoulder Collar,Long Sleeve Sweaters,
        Fall Outfits For Men,Winter Fashion Clothes, Aesthetic Clothing,Y2k Fleece Casual Style.
        </Typography>
        <div className="bottom-content">
          <h1>30.99£</h1>
          <Button variant="contained" className='custom-button'>
            Consulter
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActionAreaCardTwo;
