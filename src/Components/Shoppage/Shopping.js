import React,{useState} from 'react'
import Product from '../Core Components/Products/Product'
import {ItemsList} from '../Core Components/Data/ItemsList'

import './Shop.css'
function Shopping() {

    const [input, setinput] = useState()
    const onchanged = (event) => 
    {
        setinput(event.target.value)
    }
    return (
        <div>
            {/* banner */}
            <div className="Shop_banner">
                <h1 className="Shop_banner_text">Shop</h1>
            </div>
            <div class=" containers" style={{marginLeft:0,marginRight:0}}>
            <h6 className="Shop_results  ">Showing results</h6>
                <div className="container" >

                <div class="row rows">
                    <div class="col">
                    <h5>Categories</h5>
                    <div class="accordion" id="accordionExample">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button style={{color:"black",textDecoration:"none"}} class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <h6 className="Cate_h-text">FASHION & Accessories</h6>
                            </button>
                        </h2>
                        </div>

                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">
                        <ul className="Shop_cat_ul">
                        <li><p>Women's T-Shirts</p></li>
                        <li><p>Men's T-Shirts</p></li>
                        <li><p>Dresses</p></li>
                        <li><p>Novelty socks</p></li>
                        <li><p>Women's sunglasses</p></li>
                        <li><p>Men's sunglasses</p></li>
                        </ul>  
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingTwo">
                        <h2 class="mb-0">
                            <button style={{color:"black",textDecoration:"none"}}class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Health & Beauty
                            </button>
                        </h2>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="card-body">
                        <ul className="Shop_cat_ul">
                            <li></li><p>Shavers</p>
                            <li></li><p>bags</p>
                            <li></li><p>Cometics</p>
                            <li></li><p>Nail Art</p>
                            <li></li><p>Masks</p>
                            <li></li><p>Beauty kits</p>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingThree">
                        <h2 class="mb-0">
                            <button style={{color:"black",textDecoration:"none"}} class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            ELECTRONICS
                            </button>
                        </h2>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div class="card-body">
                        <ul className="Shop_cat_ul">
                            <li></li><p>electronics</p>
                            <li></li><p>USB Flash drives</p>
                            <li></li><p>Headphones</p>
                            <li></li><p>Portable speakers</p>
                            <li></li><p>Women's sunglasses</p>
                            <li></li><p>Mobile Phones</p>
                            </ul>  
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    <div class="col-sm">
                    <input style={{width:800,height:50,fontSize:24,marginTop:30}} Placeholder="Search Products"className="form-control form-control-sm" type="text"  onChange={onchanged} width="400" height="40"/>
                    <div class="row">
                        {input == null ?(
                             ItemsList.map(item =>
                                (
                                    <div class="col-sm cols">
                                    <Product name={item.name}
                                     image={item.image}
                                     details ={item.Details}
                                     price ={item.price}
                                     Description ={item.Description}
                                     />
                                    </div> 
                                )
                                )
                        ):(
                            ItemsList.filter(item =>item.name.includes(input)
                            ).map(items =>(
                                <div class="col-sm cols">
                                <Product name={items.name}
                                 image={items.image}
                                 details ={items.Details}
                                 price ={items.price}
                                 Description ={items.Description}
                                 />
                                </div> 
                                ))
                        )}
           
                   </div>
                </div>
                </div>
                </div>
                </div>
        </div>
    )
}
export default Shopping
