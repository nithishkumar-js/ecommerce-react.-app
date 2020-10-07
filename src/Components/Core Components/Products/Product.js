import React from 'react'
import { useStateValue } from '../Data/StateProvider'
import './product.css'
import {Link} from 'react-router-dom'
function Product({id,name,details,image,price,Description}) {
  const [{basket},dispatch ] = useStateValue();
  const addItem = () =>
  {
    dispatch({
      type:"ADD BASKET",
      datas:{id,name,details,image,price,Description}
    })
  }

  const ProductDetails = () =>
  {
    dispatch({
      type:"PRODUCT DETAILS",
      datas:{id,name,details,image,price,Description}
    })
  }

    return (
        <div className="product_layout">
          <Link className="links"to ="/product Details" onClick={ProductDetails}>                  
         <img src={image}
          alt="img" className="product_image"/>
                            </Link>
            <div className="product_details_layout">
            <h5>{name}</h5>
            <h4>${price}</h4>
            <button className="Product_btn" onClick={addItem}>Add to Cart</button>  
            <p className="dummy">{basket.length}</p>
            </div>
        </div>
    )
}

export default Product
