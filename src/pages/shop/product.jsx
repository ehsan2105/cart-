import React, { useContext } from "react";
import { ShopContaxt } from '../../context/shop-contaxt'




export const Product = (props) => {

    const { id, productName, price, productImage } = props.data

    const { addToCart, cartItems } = useContext(ShopContaxt)

    const cartItemAmount = cartItems[id]
    console.log(cartItemAmount)

    return <div className="product">
        <img src={productImage} alt={productName} />
        <div className="description">
            <p> <b>{productName}</b></p>
            <p > <b> {price}</b></p>

            <button className="addToCartBtn" onClick={() => addToCart(id)}>
                add to cart
                { cartItemAmount > 0 && <> ({cartItemAmount}) </> }
            </button>
        </div>
    </div>
}