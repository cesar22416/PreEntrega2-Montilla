/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext({
    cart:[]
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
    console.log(cart)

    const addItem = (item, quantity) => {
        if(!isIncart(item.id)){
            setCart(prev =>[... prev, {...item, quantity}])
        }else{
            console.log("El Producto ya fue agragado")

        }
    }
const removeItem = (itemId) =>{
    const cartUpdated = cart.filter(prod => prod.id !== itemId)
    setCart(cartUpdated)
}

const clearCart = () =>{
    setCart([])
}


const isIncart  = (itemId) => {
    return cart.some(prod => prod.id === itemId)
}
 const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

return(
    <CartContext.Provider value={{cart, addItem, removeItem,clearCart,totalQuantity}}>
        {children}
    </CartContext.Provider>
)

}