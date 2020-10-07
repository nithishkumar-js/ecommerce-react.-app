import React from 'react'
import { useStateValue } from '../Core Components/Data/StateProvider'
import './product_details.css'
function Product_details() {
    const [{product_details},dispatch] = useStateValue();
    const addItem = () =>
  {
    dispatch({
      type:"ADD BASKET",
      datas:{id:product_details[product_details.length-1].id
        ,name:product_details[product_details.length-1].name,
        details:product_details[product_details.length-1].details,
        image:product_details[product_details.length-1].image,
        price:product_details[product_details.length-1].price,
        Description:product_details[product_details.length-1].Description}
    })
  }
    return (
        <div>
        {product_details.length === 0 ?(console.log("empty")):
        (
        <div className="prod_details_layout">
        <div className="product_layout_checkout">
         <img src={product_details[product_details.length-1].image}
          alt="img" className="checkout_product_image"/>
            <div className="checkout_product_details_layout">
            <h5>{product_details[product_details.length-1].name}</h5>
            <h4>${product_details[product_details.length-1].price}</h4>
            <p><strong>Description: </strong>{product_details[product_details.length-1].Description}</p>
            <button className="checkout_Product_btn" onClick={addItem}>Add from Cart</button>  
            </div>
        </div>
        </div>
        )}

        
        </div>
    )
}

export default Product_details
