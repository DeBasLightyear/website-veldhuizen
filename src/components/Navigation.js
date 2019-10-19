import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'

const logoNoText = require("../img/logo_transparant_notext_small.png")

const Navigation = () => {
    return (
        <Navbar bg="dark" expand="sm" className="navbar-default">
            <div class="container-fluid">
                <div className="navbar-header">
                    <Navbar.Brand href="/">
                        <img
                            src={logoNoText}
                            alt="Veldhuizen Perspakket"
                            className="w-25"
                        />
                    </Navbar.Brand>
                </div>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        <ul className="nav navbar-nav">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/AboutUs">Over ons</NavLink></li>
                            <li><NavLink to="/Products">Producten</NavLink></li>
                            <li><NavLink to="/Contact">Contact</NavLink></li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default Navigation;