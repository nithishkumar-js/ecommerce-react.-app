import React from 'react'
import {Link} from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './navbar.css'
import { useStateValue } from '../Data/StateProvider';
function Navbar() 
{
  const [{basket} ] = useStateValue();
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/"><strong>Stuff Plaza</strong></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Shop">Shop</Link>
      </li>
    </ul>
    <ul className="navbar-nav">
     <Link to="/Cart">
      <li className="nav-link"><ShoppingCartIcon/></li></Link>
      <Link to="/Cart"> <li className="nav-link">Cart({basket.length})</li> </Link>
      <li className="nav-link">Login</li>
    </ul>
  </div>
</nav>
        </div>
    )
}

export default Navbar
