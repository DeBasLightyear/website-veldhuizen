import React from 'react';
import Jumbrotron from 'react-bootstrap/Jumbotron';

const Jumbo = ({ jumboBackground, headerText }) => {
    const backgroundStyle = {
        backgroundImage: `url('${jumboBackground}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
    
    return (
        <Jumbrotron
            fluid={true}
            className="jumbo d-flex align-items-center justify-content-center jumbotron-base"
            style={backgroundStyle}
        >
            <div className="overlay overlay-jumbo"></div>
            <h1>{headerText}</h1>
        </Jumbrotron>
    )
}

export default Jumbo;