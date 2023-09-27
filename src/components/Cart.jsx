import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {delCart} from '../redux/actions/index'
import { NavLink } from 'react-router-dom'


const Cart = () => {

    const state = useSelector((state)=> state.addCart)
    const dispatch = useDispatch()

    const handleClose = (product) => {
        dispatch(delCart(product))
    }

    const cartItems = (cartItem) => {
        return(
            <div className="cart-container" key={cartItem.id}>
                <div className="container-section">
                    <button onClick={()=>handleClose(cartItem)} className="btn-close" aria-label="Close"></button>
                    <div className="content-center">
                        <div className="img-cart">
                            <img src={cartItem.img} alt={cartItem.title} height="200px" width="180px" />
                        </div>
                        <div className="info-cart">
                            <h3>{cartItem.title}</h3>
                            <p className="price-item">${cartItem.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Cart;

  