import React, { useContext } from 'react'
import { CartContext } from '../context/cart-context';

export const Product = ({product}) => {
  const ctx = useContext(CartContext);
  const myStyle = {width: "18rem"};
  const addToCart = ()=>{
    ctx.addCart({...product})
    console.log('Add to Cart Call ', product);
  }
  return (
   
        <div className="card me-4 my-4 mx-3" style={myStyle}>
        <img src={product.assets.menu['0'].url} className="card-img-top" alt="..."/>
          <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">₹ {product.price}</p>
          <button onClick={addToCart}  className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
        
  )
}
