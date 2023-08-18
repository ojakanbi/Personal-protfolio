import React from 'react';
import "./Navbar.css"



export default function Navbar () {
    return (
      <div className='navbar-container'>
        <nav>
            <div>
                <h2>OJ Akanbi</h2>

            </div>

            <div>
                <h2>Still Under development</h2>

            </div>

            <div className="nav-links-container">
                <ul>
                    <li>
                        <a href='#about'>
                            About
                        </a>
                    </li>
                    <li>
                        <a href='#protfolio'>
                            Protfolio 
                        </a>
                    </li>
                    <li>
                        <a href='#contact'>
                            Contact
                        </a>
                    </li>
                </ul>
                
              
            </div>

            
        </nav>
      </div>
    )
}