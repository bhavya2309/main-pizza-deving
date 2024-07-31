import {createContext} from 'react'
export const CartContext = createContext({
    carts:[],
    addCart:function(product){}
})