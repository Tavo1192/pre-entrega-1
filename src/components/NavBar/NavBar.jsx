import React from 'react'
import CartWidget from './CartWidget'
import "./navbar.css";
import ToggleButton from "../ToggleButton/ToggleButton";

function NavBar() {
  return (
    <nav className="nav-menu">
        <ul className="nav-list">
            <li>
            <a href="/">
                <h2>KIXX Bags</h2>
            </a>
            </li>
            
            <li>
                <a href="/">Mochilas</a>
            </li>
            <li>
                <a href="/">Riñoneras</a>
            </li>
            <li>
                <a href="/">Materas</a>
            </li>
            <li>
                <CartWidget/>
            </li>
           
        </ul>
    </nav>
  )
}

export default NavBar