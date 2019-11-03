import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logoNoText from '../img/logo_transparant_notext_small.png';

const Navigation = () => {
    return (
        <Navbar
            fixed="top"
            expand="sm"
            className="navbar-default nav-transparent"
        >
            <Navbar.Brand>
                <NavLink to="/">
                    <img
                        src={logoNoText}
                        alt="Veldhuizen Perspakket"
                        className="w-25"
                    />
                </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navigation d-flex justify-content-around w-75">
                    <Nav.Item><NavLink to="/">Home</NavLink></Nav.Item>
                    <Nav.Item><NavLink to="/AboutUs">Over ons</NavLink></Nav.Item>
                    <Nav.Item><NavLink to="/Products">Producten</NavLink></Nav.Item>
                    <Nav.Item><NavLink to="/Contact">Contact</NavLink></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;