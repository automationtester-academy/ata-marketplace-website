import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom'; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardActionArea } from '@mui/material';

import { fetchItems } from './MockDatas/mockData';

import '../styles/ActionAreaCard.css';

const ActionAreaCard = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems().then((data) => {
      setItems(data);
    });
  }, []);

  return (
    <div className="homepage-cards">
      <div className="grid-container">
        {items.map((item, index) => (
          <Card key={index} className="card-container">
            <CardActionArea>
              <CardMedia
                component="img"
                height="400"
                image={item.imageUrl}
                alt="product pictures"
                className="card-images"
              />
            </CardActionArea>
            <CardContent className="card-content">
              <Typography gutterBottom variant="h5" component="div" className="product-name">
                <p data-test="title-product">{item.title}</p>
              </Typography>
              <Typography variant="body2" color="text.secondary" className="product-desc">
                <p data-test="desc-product">{item.description}</p>
              </Typography>
              <div className="bottom-content">
                <p data-test="price-product">{item.price}</p>
                <Link to={`/details/${item.id}`}>
                  <Button 
                  variant="contained" 
                  className="consulter-button" 
                  data-test="consulter-btn"
                  >
                    <span className="span-name">Consulter</span>
                  </Button>
                </Link>

              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ActionAreaCard;
