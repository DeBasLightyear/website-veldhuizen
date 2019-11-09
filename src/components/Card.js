import React from 'react';
import Row from 'react-bootstrap/Row';

const Card = ({ title, description, picture }) => {
    return (
        <Row>
            <div className="col-sm-12 col-md-6">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
            <div className="col-sm-12 col-md-6">
                <img
                    src={picture}
                    className="img-fluid"
                    alt="the picture"
                />
            </div>
        </Row>
    )
}

export default Card;