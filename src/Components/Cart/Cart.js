import React from 'react'
import { useStateValue } from '../Core Components/Data/StateProvider'
import CheckoutProducts from '../Core Components/CheckoutProducts/CheckoutProduct'
import './Cart.css'
import SubTotal from '../Core Components/SubTotal/SubTotal';
import CurrencyFormat from 'react-currency-format';

function Cart()
{
    const [{basket}] = useStateValue();
    return (
        <div className="Cart">
                       <div>
                       <CurrencyFormat 

                            renderText = {(value) => (  

                                    <SubTotal value= {value}/>
                                )}                   
                                
                            value={basket?.reduce((amount,item) => item.price+amount,0)} 
                            displayType={'text'} 
                            thousandSeparator={true} 
                            prefix={'$'} />
                       </div>
            {
                basket.length === 0 ? (
                    <div className="Cart_empty">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_nl9M_exbaJFJv0tsRcn4LxCm-agS6G-Ehg&usqp=CAU' alt="empty" className="Empty_cart"/>
                    <h1>Your Shopping basket is empty</h1>
                    <h6>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.</h6>
                </div>
                ):
                (
                    <div>
                        <img src="https://t4.ftcdn.net/jpg/02/03/36/59/240_F_203365912_AZrhTEAwunheiDve71ztE6JkCjdSEHQF.jpg" alt='..' className="Thank_you_img"/>
                        {/* Checkout */}
                        <h1>Your Orders</h1>
                        {basket.map(item =>(
                        <div class="container">
                        <div class="row rows">
                        <div class="col-6 cols">
                        <CheckoutProducts
                        name ={item.name}
                        image = {item.image}
                        price={item.price}
                        details={item.details}
                        Description={item.Description}
                        />
                        </div>
                        </div>
                        </div>
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default Cart
