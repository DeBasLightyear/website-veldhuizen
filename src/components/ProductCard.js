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

    const backgroundStyle = {
        backgroundImage: `url('${picture}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }

    return (
        <div className={`col-sm-12 col-md-${fillWidth ? 12 : 6} col-xl-${fillWidth ? 12 : 4}`}>
            <Card className="mt-3 mb-3 product-card">
                {/* <h4 className="card-header">{title}</h4> */}
                <div 
                    className="minitron d-flex pl-3 align-items-center"
                    style={backgroundStyle}
                >
                    <div className="overlay overlay-mini" />
                    <h3>{title}</h3>
                </div>
                <div className="card-body">
                    <p className="card-text">{description}</p>
                </div>
                {/* {picture ? image : ""} */}
            </Card>
        </div>
        // <div className="card-special">
        //     <h2 className="transition">Awesome Headline</h2>
        //     <p>Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla.</p>
        //     <div className="cta-container transition"><a href="#" className="cta">Call to action</a></div>
        //     <div
        //         className="card_circle transition"
        //         style={backgroundStyle}
        //     ></div>
        // </div>
    )
}

export default ProductCard;