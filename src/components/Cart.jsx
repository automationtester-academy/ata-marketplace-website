import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {delItem} from '../redux/actions/index'
import { NavLink } from 'react-router-dom'


const Cart = () => {
    const state = useSelector((state)=> state.addItem)
    const dispatch = useDispatch()

    const handleClose = (item) => {
        dispatch(delItem(item))
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

    const emptyCart = () => {
        return (
            <div className="container-p-vide">
                <div className="section-p-vide">
                    <div className="headline-p-vide">
                        <h3>Votre panier est vide</h3>
                    </div>
                    </div>
                </div>
        );
    }

    const button = () => {
        return(
            <div className="container-checkout">
                <div className="section-checkout">
                    <NavLink to="/checkout" className="btn-checkout">Procéder au paiement</NavLink>
                </div>
            </div>
        );
    }

    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </>
    )
}

export default Cart