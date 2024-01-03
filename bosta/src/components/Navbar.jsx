import React , {useState}from 'react';
import { Link } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import "./Navbar.css"
import Logo from '../images/download.jfif'
 export const Navbar = () => {
  
    const[menuOpen,setMenuOpen]=useState(false)
  return<nav>
    <BrowserRouter>  
			  	<nav>
            
            <div className='menu' onClick={() =>{
              setMenuOpen(!menuOpen)
            }

            }>
              <span></span>
              <span></span>
              <span></span>
            </div>
            		<ul className={menuOpen ? "open" : ""}>
                  <li>
                     <div className='logo'>
             <img src={Logo} alt='Logo'  className='custom-img'/>
            </div>
                  </li>
                <li>
              <Link to="/home"> Home</Link>
             </li>
            <li>
           <Link to="/prices">Prices </Link>
           </li>
         <li>
          <Link to="/call">Call Courir</Link>
        </li>
       <li>
        <Link to="/track">Track Shipment</Link>
        </li>
        <li>
         <Link to="/signin">Sign In</Link>
         </li>
      	</ul>
          		</nav>
        	</BrowserRouter> 

  </nav>;
}

export default Navbar
