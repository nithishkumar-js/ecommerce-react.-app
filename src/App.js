import React from 'react';
import './App.css';
import Navbar from './Components/Core Components/Navbar/Navbar';
import {BrowserRouter} from 'react-router-dom'
import {Switch,Route,} from 'react-router-dom'
import Homepage from './Components/Homepage/Homepage';
import Shopping from './Components/Shoppage/Shopping';
import Footer from './Components/Core Components/Footer/Footer';
import Aboutme from './Components/Aboutme/Aboutme';
import Cart from './Components/Cart/Cart';
import Product_details from './Components/Product_details/Product_details'
function App() {
  return (
    <div>
    <div className="App">
      {/* Navbar */}
     <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/Shop" component={Shopping}/>
        <Route path="/Aboutme" component={Aboutme}/>
        <Route path="/Cart" component={Cart}/>
        <Route path="/product Details" component={Product_details}/>
      </Switch>
      </BrowserRouter>
      {/* Footer */}
    </div>
      <Footer/>
    </div>
  );
}

export default App;
