import React from 'react'
import { useStateValue } from '../Data/StateProvider'
import './product.css'
import {Link} from 'react-router-dom'
function CheckoutProduct({id,image,name,details,price,Description}) {
    const [{basket},dispatch ] = useStateValue();
    const RemoveItem = () => 
    {
        dispatch({
            type:"REMOVE BASKET",
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
        <div>
        <div className="product_layout_checkout">
        <Link className="links"to ="/product Details" onClick={ProductDetails}> 
         <img src={image}
          alt="img" className="checkout_product_image"/>
        </Link>
            <div className="checkout_product_details_layout">
            <h5>{name}</h5>
            <h4>${price}</h4>
            <p><strong>Description: </strong>{Description}</p>
            <button className="checkout_Product_btn" onClick={RemoveItem}>Remove from Cart</button>  
            <p className="dummy">{basket.length}</p>
            </div>
        </div>
        </div>
    )
}

export default CheckoutProduct
