import React from 'react';

const PolaroidCard = ({ title, picture }) => {
    return (
        <div className="polaroid-card">
            <img src={picture} alt="picture" className="w-100" />
            {title ? <p className="m-1">{title}</p> : "" }
        </div>
    )
}

export default PolaroidCard