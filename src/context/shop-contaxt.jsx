import React, { createContext, useState } from "react";
import { PRODUCTS } from '../product'
import { Product } from "../pages/shop/product";


export const ShopContaxt = createContext(null)




const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0
    }
    return cart
}

export const ShopContaxtProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const getTotalCartAmount =() =>{
        let totalAmount = 0 
        for (const item in cartItems){
            if (cartItems[item]>0){
                let itemInfo = PRODUCTS.find((Product)=> Product.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount 
    }


    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
    const removeCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const updateCartItemcount = (newAmount , itemId )=>{
        setCartItems((prev) =>({...prev , [itemId]: newAmount}))
    }

    const contextValue = {cartItems,addToCart,removeCart,updateCartItemcount,getTotalCartAmount}
    return (
        <ShopContaxt.Provider value={contextValue}>
            {props.children}
        </ShopContaxt.Provider>
    )
}