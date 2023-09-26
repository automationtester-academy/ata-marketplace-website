import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom'; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardActionArea } from '@mui/material';

import { fetchItems } from './MockDatas/products';

import '../styles/ProductListItem.css';

const ProductListItem = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchItems().then((data) => {
      setProducts(data);
    });
  }, []);



  return (
    <div className="homepage-cards">
      <div className="grid-container">
        {products.map((product, index) => (
          <Card key={index} className="card-container">
            <CardActionArea>
              <CardMedia
                component="img"
                height="400"
                image={product.imageUrl}
                alt="product pictures"
                className="card-images"
              />
            </CardActionArea>
            <CardContent className="card-content">
              <Typography gutterBottom variant="h5" component="div" className="product-name">
                <p data-test="title-product" data-testid="title-product">{product.title}</p>
              </Typography>
              <Typography variant="body2" color="text.secondary" className="product-desc">
                <p data-test="desc-product" data-testid="desc-product">{product.description}</p>
              </Typography>
              <div className="bottom-content">
                <p data-test="price-product" data-testid="price-product">{product.price}</p>
                <Link to={`/details/${product.id}`}>
                  <Button 
                  variant="contained" 
                  className="consulter-button" 
                  data-test="consulter-btn"
                  data-testid="consulter-btn"
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

export default ProductListItem;
