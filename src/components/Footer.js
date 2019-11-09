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
                        <h4>Adres</h4>
                        <p>{constants.contact.adress}</p>
                        <p>{`${constants.contact.zipCode} ${constants.contact.city}`}</p>
                    </div>
                    <div className="col-4">
                        <h3>Contactgegevens</h3>
                        <p>
                            <a href={`mailto:${constants.contact.email}`}>
                                {constants.contact.email}
                            </a>
                        </p>
                        <p>
                            <a href={`tel:${constants.contact.telephoneInternational}`}>
                                {constants.contact.telephoneDutch}
                            </a>
                        </p>
                    </div>
                </Row>
            </Container>
            
        </div>
    )
}

export default Footer;