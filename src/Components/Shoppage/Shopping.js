import React from 'react'
import Product from '../Core Components/Products/Product'
import {ItemsList} from '../Core Components/Data/ItemsList'

import './Shop.css'
function Shopping() {
    return (
        <div>
            {/* banner */}
            <div className="Shop_banner">
                <h1 className="Shop_banner_text">Shop</h1>
            </div>
            <div class=" containers" style={{marginLeft:0,marginRight:0}}>
            <h6 className="Shop_results  ">Showing results</h6>
                <div class="row rows">
                    <div class="col-2 shop_col">
                    <h5>Categories</h5>
                    <ul className="Shop_cat_ul">
                    <li></li><h6 className="Cate_h-text">FASHION & Accessories</h6>
                    <li></li><p>Women's T-Shirts</p>
                    <li></li><p>Men's T-Shirts</p>
                    <li></li><p>Dresses</p>
                    <li></li><p>Novelty socks</p>
                    <li></li><p>Women's sunglasses</p>
                    <li></li><p>Men's sunglasses</p>
                    </ul>
                    <ul className="Shop_cat_ul">
                    <li></li><h6 className="Cate_h-text">Health & Beauty</h6>
                    <li></li><p>Shavers</p>
                    <li></li><p>bags</p>
                    <li></li><p>Cometics</p>
                    <li></li><p>Nail Art</p>
                    <li></li><p>Masks</p>
                    <li></li><p>Beauty kits</p>
                    </ul>
                    <ul className="Shop_cat_ul">
                    <li></li><h6 className="Cate_h-text">ELECTRONICS</h6>
                    <li></li><p>electronics</p>
                    <li></li><p>USB Flash drives</p>
                    <li></li><p>Headphones</p>
                    <li></li><p>Portable speakers</p>
                    <li></li><p>Women's sunglasses</p>
                    <li></li><p>Mobile Phones</p>
                    </ul>
                    </div>
                    <div class="col-8 shop_col2">
                    <div class="row">
                    {ItemsList.map(item =>
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
                        )}
                   </div>
                </div>
                </div>
                </div>
        </div>
    )
}
export default Shopping
