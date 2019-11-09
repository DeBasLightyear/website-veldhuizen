import React from 'react';
import Jumbrotron from 'react-bootstrap/Jumbotron';

const Jumbo = ({jumboBackground, headerText}) => {
    const cssClass = `jumbo ${jumboBackground} d-flex align-items-center justify-content-center`
    
    return (
        <Jumbrotron
            fluid={true}
            className={cssClass}
        >
            <div className="overlay overlay-jumbo"></div>
            <h1>{headerText}</h1>
        </Jumbrotron>
    )
}

export default Jumbo;