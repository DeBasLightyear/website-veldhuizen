import React from 'react';

const PolaroidCard = ({ title, picture, children, rotation }) => {
    const styles = {
        transform: `rotate(${rotation}deg)`
    }

    return (
        <div className="polaroid-card" style={styles}>
            <img
                src={picture}
                alt=""
                className="img-fluid filter-earlybird"
            />
            {title ? <p className="m-1">{title}</p> : "" }
            {children}
        </div>
    )
}

export default PolaroidCard