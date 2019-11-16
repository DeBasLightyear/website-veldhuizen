import React from 'react';
import Card from 'react-bootstrap/Card';

const ProductCard = ({ title, description, picture, fillWidth = false }) => {   
    const image = (
        <img
            className="card-image-top"
            src={picture}
            alt="afbeelding product"
        />
    )

    return (
        <div className={`col-sm-12 col-md-${fillWidth ? 12 : 6} col-xl-${fillWidth ? 12 : 4}`}>
            <Card className="mt-3 mb-3 product-card">
                {picture ? image : ""}
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{description}</p>
                </div>
            </Card>
        </div>
    )
}

export default ProductCard;