import React from 'react';
import PolaroidCard from './PolaroidCard';

const ProductCard = ({ title, description, picture, fillWidth = false }) => {   
    return (
        <div className={`col-sm-12 col-md-${fillWidth ? 12 : 6} col-xl-${fillWidth ? 12 : 4}`}>
            <PolaroidCard
                picture={picture}
                alt=""
                title={title}
                className="mt-3 mb-3 product-card"
            >
                {/* <p className="card-text">{description}</p> */}
            </PolaroidCard>
        </div>
    )
}

export default ProductCard;