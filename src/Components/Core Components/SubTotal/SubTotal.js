import React from 'react'
import './Subtotal.css'
function SubTotal({value}) {
    return (
        <div>
             <div className="checkout_subtotal">
                 <p className="Checkout_Subtotal_text"><strong>Subtotal</strong> (Items) :{value}</p>
                <button className="checkout_Product_btn">Proceed to Checkout</button>
            </div>
        </div>
    )
}

export default SubTotal
