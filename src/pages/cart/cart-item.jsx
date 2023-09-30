import React, { useContext } from "react";
import { ShopContaxt } from "../../context/shop-contaxt";


export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data
    const { cartItems, addToCart, removeCart, updateCartItemcount } = useContext(ShopContaxt)




    return (
        <div className="cartItem"> <img src={productImage} alt="productName" />
            <div className="description">

                <p>
                    <b>{productName}</b>
                </p>
                <p>{price}</p>

                <div className="countHandler">
                    <button onClick={() => removeCart(id)}> - </button>
                    <input type="text" value={cartItems[id]} onChange={(e) => updateCartItemcount(Number(e.target.value) ,id)} />
                    <button onClick={() => addToCart(id)}> + </button>

                </div>

            </div>


        </div>
    )
}    