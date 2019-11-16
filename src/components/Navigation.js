import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logoNoText from '../img/logo_transparant_notext_small_white.png';

class Navigation extends Component {
    constructor(props){
        super(props);

        // Setting initial state
        this.state = { isNavTransparent : true };

        // Binding methods
        this.updateNavbarTransparency = this.updateNavbarTransparency.bind(this);
    }

    updateNavbarTransparency(){
        window.scrollY <= 160 ? this.setState({ isNavTransparent : true }) : this.setState({ isNavTransparent : false });
    }

    componentDidMount(){
        window.addEventListener("scroll", this.updateNavbarTransparency)
    }

    componentWillUnmount(){
        window.removeEventListener("scroll")
    }
    
    render() {
        const visibility = this.state.isNavTransparent ? "nav-transparent" : "nav-colored";

        return (
            <Container>
                <Navbar
                    fixed="top"
                    expand="sm"
                    className={`navbar-default ${visibility}`}
                    id="navigation-bar"
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
            </Container>
        )
    }
} 

export default Navigation;