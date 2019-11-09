import React from 'react';
import Row from 'react-bootstrap/Row';

const Card = ({ title, description, picture, picturePosition = 'right' }) => {
    const text = (
        <div className="col-sm-12 col-md-6">
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
    const img = (
        <div className="col-sm-12 col-md-6">
            <img
                src={picture}
                className="img-fluid"
                alt="the picture"
            />
        </div>
    )

    return (
        <Row className="mt-5 mb-5">
            {picturePosition === 'right'? text : img}
            {picturePosition === 'right'? img : text}
        </Row>
    )
}

export default Card;