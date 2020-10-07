import React from 'react'
import './home.css'
import Product from '../Core Components/Products/Product'
import {Link} from 'react-router-dom'
import {ItemsList} from '../Core Components/Data/ItemsList'
function Homepage (){
    return (
        <div>
            {/* Banner */}
            <div className="Homepage_banner_text">
                <div className="banner_text">
                <p className="Banner_text1">NEW INSPIRATION 2020</p>
                <p className="Banner_text2">20% OFF ON NEW SEASON</p>
               <Link to ="/Shop"> <button className="Banner_btn">Browse Collection</button></Link>
                </div>
            </div>
            {/* Categories */}
            <div style={{marginTop:20}}>
            <p className="Banner_text3">CAREFULLY CREATED COLLECTIONS</p>
            <p className="Banner_text4">BROWSE OUR CATEGORIES</p>
            </div>
            {/* Products */}
            <div className="container">
            <div className="row">
                <div className="col-sm">
                <div className="Home_category_prod1">
                <Link to="/Shop">
                   <button className="homepage_category_btn">Clothes</button>
                </Link>
                </div>
                </div>
                <div class="col-sm ">
                <div className="Home_category_prod2_1">
                <Link to="/Shop">
                    <button className="homepage_category_btn">Shoes</button>
                    </Link>
                </div>
                <div className="Home_category_prod2_2">
                <Link to="/Shop">
                    <button className="homepage_category_btn">Watches</button>
                    </Link>
                </div>
                </div>
                <div class="col-sm">
                <div className="Home_category_prod3">
                <Link to="/Shop">
                    <button className="homepage_category_btn">Electronics</button>
                    </Link>
                </div>
                </div>
            </div>
            </div>
            {/* Txt */}
            <div style={{marginTop:20}}>
            <p className="Banner_text5">MADE THE HARD WAY</p>
            <p className="Banner_text6">TOP TRENDING PRODUCTS</p>
            </div>
            {/* Products */}
            <div class="container">
                <div class="row">
                    <div class="col-sm cols">
                    <Product name={ItemsList[0].name}
                     image={ItemsList[0].image}
                     details ={ItemsList[0].Details}
                     price ={ItemsList[0].price}
                     Description ={ItemsList[0].Description}
                     />
                    </div>
                    <div class="col-sm cols">
                     <Product name={ItemsList[1].name}
                     image={ItemsList[1].image}
                     details ={ItemsList[1].Details}
                     price ={ItemsList[1].price}
                     Description ={ItemsList[1].Description}
                     />
                    </div>
                    <div class="col-sm cols">
                     <Product name={ItemsList[2].name}
                     image={ItemsList[2].image}
                     details ={ItemsList[2].Details}
                     price ={ItemsList[2].price}
                     Description ={ItemsList[2].Description}
                     />
                    </div>
                    <div class="col-sm cols">
                     <Product name={ItemsList[3].name}
                     image={ItemsList[3].image}
                     details ={ItemsList[3].Details}
                     price ={ItemsList[3].price}
                     Description ={ItemsList[3].Description}
                     />
                    </div>
                </div>
                
                <div class="container">
                <div class="row">
                    <div class="col-sm cols2">
                    <h5>Free Shipping</h5>
                    <p className="Banner_text1">Free Shipping World wide</p>
                    </div>
                    <div class="col-sm cols2">
                    <h5>24 x 7 Service</h5>
                    <p className="Banner_text1">Free Shipping World wide</p>
                    </div>
                    <div class="col-sm cols2">
                    <h5>FESTIVAL OFFERS</h5>
                    <p className="Banner_text1">Free Shipping World wide</p>
                    </div>
                </div>
                </div>
                </div>
                    {/* Details */}
        </div>
    )
}

export default Homepage