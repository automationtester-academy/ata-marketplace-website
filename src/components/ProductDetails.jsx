import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchItems } from './MockDatas/products';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../styles/ProductDetails.css'
import Header from './Header';
import Footer from './Footer';

import { useDispatch } from 'react-redux';
import {addCart} from '../redux/actions/index'

const ProductDetails = () => {

    const [value, setValue] = useState(1);

    const { itemId } = useParams();
    const [item, setItem] = useState(null);

    const dispatch = useDispatch();
    const addItems = (product) => {
        console.log("1",product);
        dispatch(addCart(product));
    }

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const tailles = [
        'XS',
        'S',
        'M',
        'L',
        'XL',
        'XXL',
        'XXXL',
    ];

    const colors = [
        'Red',
        'Black',
        'White',
        'Yellow',
        'Green',
        'Grey',
        'Orange',
    ];

    const theme = useTheme();
    const [theSize, settheSize] = React.useState([]);
    const [theColor, settheColor] = React.useState([]);

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

    function getStylesSize(taille, theSize, theme) {
        return {
            fontWeight:
                theSize.indexOf(taille) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }

    const handleChangeSize = (event) => {
        const {
            target: { value },
        } = event;
        settheSize(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    function getStylesColor(color, theColor, theme) {
        return {
            fontWeight:
                theColor.indexOf(color) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }

    const handleChangeColor = (event) => {
        const {
            target: { value },
        } = event;
        settheColor(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleIncrement = () => {
        setValue(value + 1);
    };

    const handleDecrement = () => {
        if (value > 1) {
            setValue(value - 1);
        }
    };

    const handleChangeNumber = (event) => {
        const inputValue = event.target.value;
        // Ensure that the input value is a positive integer greater than or equal to 1
        if (/^[1-9]\d*$/.test(inputValue)) {
            setValue(parseInt(inputValue, 10));
        }
    };

    return (
        <>
            <Header />
            <div className="item-details-container">
                <img
                    src={item.imageUrl}
                    alt="Product"
                    data-test="image-product"
                    data-testid="image-product"
                    className='pic-detail'
                />
                <div className='details-container'>
                    <div className='details'>
                        <h2 data-test="title-product" data-testid="title-product">{item.title}</h2>
                        <p data-test="desc-product" data-testid="desc-product">{item.description}</p>
                    </div>
                    <div>
                        <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                            <Select
                                multiple
                                displayEmpty
                                value={theSize}
                                onChange={handleChangeSize}
                                input={<OutlinedInput />}
                                renderValue={(selected) => {
                                    if (selected.length === 0) {
                                        return <em>Taille *</em>;
                                    }
                                    return selected.join(', ');
                                }}
                                MenuProps={MenuProps}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem disabled value="">
                                    <em>Taille</em>
                                </MenuItem>
                                {tailles.map((taille) => (
                                    <MenuItem
                                        key={taille}
                                        value={taille}
                                        style={getStylesSize(taille, theSize, theme)}
                                    >
                                        {taille}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                            <Select
                                multiple
                                displayEmpty
                                value={theColor}
                                onChange={handleChangeColor}
                                input={<OutlinedInput />}
                                renderValue={(selected) => {
                                    if (selected.length === 0) {
                                        return <em>Couleur *</em>;
                                    }
                                    return selected.join(', ');
                                }}
                                MenuProps={MenuProps}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem disabled value="">
                                    <em>Couleur</em>
                                </MenuItem>
                                {colors.map((color) => (
                                    <MenuItem
                                        key={color}
                                        value={color}
                                        style={getStylesColor(color, theColor, theme)}
                                    >
                                        {color}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>

                    <div className="number-input-container">
                        <span className='qtt-span'>Quantité * :</span>
                        <button onClick={handleDecrement} className='operator'>-</button>
                        <input
                            className="centered-input"
                            type="text"
                            value={value}
                            onChange={handleChangeNumber}
                        />
                        <button onClick={handleIncrement} className='operator'>+</button>
                    </div>
                    <div className='panier-section'>
                        <div>
                            <p data-test="price-product" data-testid="price-product">{item.price}</p>
                        </div>
                        <div className='btn-panier'>
                            <button
                                name="Add to cart"
                                className="panier-button"
                                onClick={() => addItems(item)}
                            >
                                Ajouter au panier
                            </button>
                            <button
                                name="Show to cart"
                                className="voir-p-button"
                            >
                                Voir panier
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductDetails;

