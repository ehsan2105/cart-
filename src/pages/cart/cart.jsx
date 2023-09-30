import React, { useContext } from "react";
// import { useContext } from "react";
import { PRODUCTS } from "../../product";
import { ShopContaxt } from '../../context/shop-contaxt'
import { CartItem } from "./cart-item";
import './cart.css'
import {  useNavigate } from "react-router-dom";


export const Cart = () => {
    const { cartItems,getTotalCartAmount } = useContext(ShopContaxt)
    const totalAmount = getTotalCartAmount()
const navigate = useNavigate()

    return (
        <div className="cart">
            <div>
                <h1>
                    yuor cart
                </h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />
                    }
                })}

                {totalAmount> 0 ? 
                <div className="checkout">

                    <button onClick={()=> navigate('/')}> continue shopping</button>
                    <button> checkout </button>
                    <p>Subtotal : ${totalAmount}</p>
                </div>
                : <h1>yuor cart is empty</h1>}

            </div>
        </div>
    )
};