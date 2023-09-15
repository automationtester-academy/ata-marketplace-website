import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchItems } from './MockDatas/mockData';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import '../styles/ProductDetails.css'
import Header from './Header';

const ProductDetails = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);

    const [size, setSize] = useState('');
    const [couleur, setCouleur] = useState('');

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

    const handleChangeSize = (event: SelectChangeEvent) => {
        setSize(event.target.value);
    };

    const handleChangeColor = (event: SelectChangeEvent) => {
        setCouleur(event.target.value);
    };

    return (
        <>
            <Header />

            <div className="item-details-container">
                <img src={item.imageUrl} alt="Product" data-test="image-product" />

                <div className='details-container'>

                    <div className='details'>
                        <h2 data-test="title-product" data-testid="title-product">{item.title}</h2>
                        <p data-test="desc-product" data-testid="desc-product">{item.description}</p>
                    </div>

                    <div>
                        <FormControl sx={{ m: 1, minWidth: 300 }}>
                            <InputLabel id="demo-simple-select-autowidth-label">Taille *</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                value={size}
                                onChange={handleChangeSize}
                                autoWidth
                                label="Taille"
                            >
                                <MenuItem value="">
                                    <em>42</em>
                                </MenuItem>
                                <MenuItem value={10}>35</MenuItem>
                                <MenuItem value={10}>36</MenuItem>
                                <MenuItem value={10}>37</MenuItem>
                                <MenuItem value={10}>38</MenuItem>
                                <MenuItem value={21}>39</MenuItem>
                                <MenuItem value={22}>40</MenuItem>
                                <MenuItem value={22}>41</MenuItem>
                                <MenuItem value={22}>42</MenuItem>
                                <MenuItem value={22}>43</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div>
                        <FormControl sx={{ m: 1, minWidth: 300 }}>
                            <InputLabel id="demo-simple-select-autowidth-label">Couleur *</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                value={couleur}
                                onChange={handleChangeColor}
                                autoWidth
                                label="Couleur"
                            >
                                <MenuItem value="">
                                    <em>Rouge</em>
                                </MenuItem>
                                <MenuItem value={10}>Noir</MenuItem>
                                <MenuItem value={10}>Rouge</MenuItem>
                                <MenuItem value={10}>Blanc</MenuItem>
                                <MenuItem value={10}>Gris</MenuItem>
                                <MenuItem value={21}>Vert</MenuItem>
                                <MenuItem value={22}>Bleu</MenuItem>
                                <MenuItem value={22}>Jaune</MenuItem>
                                <MenuItem value={22}>Orange</MenuItem>
                           
                            </Select>
                        </FormControl>
                    </div>

                    <div className='panier-section'>
                        <div>
                            <p data-test="price-product" data-testid="price-product">{item.price}</p>
                        </div>

                        <div>
                        <button                         
                            type="submit"
                            className="panier-button"
                            data-test="submit-login"
                        >
                            Ajouter au panier
                        </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
