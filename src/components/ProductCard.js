import React from 'react';
import Card from 'react-bootstrap/Card';

const ProductCard = ({ title, description, picture, fillWidth = false }) => {   
    const image = (
        <img
            className="card-image-bottom"
            src={picture}
            alt="afbeelding product"
        />
    )

    return (
        <div className={`col-sm-12 col-md-${fillWidth ? 12 : 6} col-xl-${fillWidth ? 12 : 4}`}>
            <Card className="mt-3 mb-3 product-card">
                <h4 className="card-header">{title}</h4>
                <div className="card-body">
                    <p className="card-text">{description}</p>
                </div>
                {picture ? image : ""}
            </Card>
        </div>
    )
}

export default ProductCard;