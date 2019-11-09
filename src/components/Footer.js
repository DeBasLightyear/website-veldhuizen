import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import constants from '../Constants';
import logo from '../img/logo - white.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="overlay-footer" />
            <Container>
                <Row>
                    <div className="col-sm-5 col-md-4 col-xl-4">
                        <img
                            src={logo}
                            // className="img-fluid"
                            alt="Veldhuizen Perspak"
                        />
                    </div>
                    <div className="col-4">
                        <Row>
                            <h4 className="col-12 pl-0">Adres</h4>
                            <div className="col-12 pl-0 pt-1">{constants.contact.adress}</div>
                            <div className="col-12 pl-0 pt-1">{`${constants.contact.zipCode} ${constants.contact.city}`}</div>
                        </Row>
                    </div>
                    <div className="col-4">
                        <Row>
                            <h3 className="col-12 pl-0">Contactgegevens</h3>
                            <div className="col-11 pl-0 pt-1">
                                <a href={`mailto:${constants.contact.email}`}>
                                    <i className="fas fa-envelope mr-2"></i>
                                    {constants.contact.email}
                                </a>
                            </div>
                            <div className="col-11 pl-0 pt-1">
                                <a href={`tel:${constants.contact.telephoneInternational}`}>
                                    <i className="fas fa-phone-square-alt  mr-2"></i>
                                    {constants.contact.telephoneDutch}
                                </a>
                            </div>
                        </Row>
                    </div>
                </Row>
            </Container>
            
        </div>
    )
}

export default Footer;