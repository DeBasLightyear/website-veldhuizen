import React from 'react';
import Jumbrotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const Jumbo = () => {
    return (
        <Jumbrotron fluid className="jumbo jumbotron-farm">
            <div className="overlay overlay-jumbo"></div>
            <Container>
                <h1>Welkom</h1>
                <p>Veldhuizen Perspakket</p>
            </Container>       
        </Jumbrotron>
    )
}

export default Jumbo;