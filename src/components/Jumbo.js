import React from 'react';
import Jumbrotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const Jumbo = ({jumboBackground, headerText}) => {
    const cssClass = `jumbo ${jumboBackground}`
    
    return (
        <Jumbrotron
            fluid={true}
            className={cssClass}
        >
            <div className="overlay overlay-jumbo"></div>
            <Container>
                <h1>{`${headerText}`}</h1>
            </Container>       
        </Jumbrotron>
    )
}

export default Jumbo;