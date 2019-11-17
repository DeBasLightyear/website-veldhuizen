import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import constants from '../Constants';
import logo from '../img/logo - white.png'
import backgroundFooter from '../img/floor_boards_cropped.jpg';

const Footer = () => {
    const backgroundStyle = {
        backgroundImage: `url('${backgroundFooter}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        backgroundSize: 'cover'
    }

    return (
        <div className="footer" style={backgroundStyle}>
            <div className="overlay-footer" />
            <Container>
                <Row>
                    <div className="d-none d-md-block col-md-4 col-lg-3 mt-2">
                        <img
                            src={logo}
                            className="img-fluid"
                            alt="Veldhuizen Perspak"
                        />
                    </div>
                    <div className="d-none d-lg-block col-lg-1"/>
                    <div className="col-sm-12 col-md-4 mt-2">
                            <h4>Adres</h4>
                            <div className="pt-1">{constants.contact.adress}</div>
                            <div className="pt-1">{`${constants.contact.zipCode} ${constants.contact.city}`}</div>
                    </div>
                    <div className="col-sm-12 col-md-4 mt-2">
                        <h4>Contactgegevens</h4>
                        <div className="pt-1">
                            <a href={`mailto:${constants.contact.email}`}>
                                <i className="fas fa-envelope mr-2"></i>
                                {constants.contact.email}
                            </a>
                        </div>
                        <div className="pt-1">
                            <a href={`tel:${constants.contact.telephoneInternational}`}>
                                <i className="fas fa-phone-square-alt mr-2"></i>
                                {constants.contact.telephoneDutch}
                            </a>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;