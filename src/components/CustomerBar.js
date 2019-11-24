import React from 'react';
import Row from 'react-bootstrap/Row';

const CustomerBar = ({ customerList }) => {
    return (
        <Row className="d-flex justify-content-center">
            {customerList.map((item, index) =>
            <div className="col-2">
                <img
                    src={item.logo}
                    alt={item.name}
                    key={index + 1}
                    className="m-3 img-fluid"
                />
                {/* <p>{item.name}</p> */}
            </div>
            )}
        </Row>
    )
}

export default CustomerBar;