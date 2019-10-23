import React from 'react';
import Jumbrotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const Jumbo = (jumboBackground) => {
    const cssClass = `jumbo ${jumboBackground}`

    return (
        <Jumbrotron fluid className={cssClass}>
            <div className="overlay overlay-jumbo"></div>
            <Container>
                <h1>Welkom</h1>
                <p>Veldhuizen Perspakket</p>
            </Container>       
        </Jumbrotron>
    )
}

export default Jumbo;