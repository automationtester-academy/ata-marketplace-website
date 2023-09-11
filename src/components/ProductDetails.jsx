import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchItems } from './MockDatas/mockData';

import '../styles/ProductDetails.css'
import Header from './Header';

// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';

const ProductDetails = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {

        const fetchItemDetails = async () => {
            try {
                const items = await fetchItems();
                const selectedItem = items.find((item) => item.id === parseInt(itemId));
                setItem(selectedItem);
            } catch (error) {
                console.error('Error fetching item details:', error);
            }
        };

        fetchItemDetails();
    }, [itemId]);

    if (!item) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Header />
            <div className="item-details-container">
                <img src={item.imageUrl} alt="Product" data-test="image-product"/>
                <div className='details'>
                    <h2 data-test="title-product">{item.title}</h2>
                    <p data-test="desc-product">{item.description}</p>
                    <p data-test="price-product">{item.price}</p>
                </div>

            </div>
        </>
    );
};

export default ProductDetails;
