import React from 'react';
import Card from 'react-bootstrap/Card';

const TextCard = (props) => {
    return (
        <Card className="text-card">
            <div className="card-body m-3">
                {props.children}
            </div>
        </Card>
    )
}

export default TextCard;