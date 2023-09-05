import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardActionArea } from '@mui/material';

import { fetchItems } from './mockData'; 
import mockData from './mockData'; 

import '../styles/ActionAreaCard.css';

const ActionAreaCard = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems().then((data) => {
      setItems(data);
    });
  }, []);


  return (
    <div className='homepage-cards'>
      <div className='grid-container'>
      {items.map((item, index) => (

        <Card key={index} className='card-container'>
          <CardActionArea>
            <CardMedia
              component="img"
              height="540"
              image={item.imageUrl}
              alt="product pictures"
            />
  
          </CardActionArea>
          <CardContent className='card-content'>
            <Typography gutterBottom variant="h5" component="div" className='product-name'>
              <p>{item.title}</p>
            </Typography>
            <Typography variant="body2" color="text.secondary" className='product-desc'>
              <p>{item.description}</p>
            </Typography>
            <div className="bottom-content">
              <p>{item.price}</p>
              <Button variant="contained" className='custom-button'>
                Consulter
              </Button>
            </div>
          </CardContent>
        </Card>
        ))}
      </div>
      </div>
  );
};

export default ActionAreaCard;
