import React from 'react'
import Searchbox from './Searchbox';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div className="container">
                <a className="navbar-brand" href="/">
                    Mercado Free <i class="fab fa-typo3"></i>
                </a>

                <Searchbox />



                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                About
                </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Contact
                </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;