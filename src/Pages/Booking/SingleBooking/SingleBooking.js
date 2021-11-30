import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleBooking = (props) => {
    const { serviceImg, serviceName, status, price, option, date } = props.bookingOrder
    return (
        <Col>
            <Card className='p-2'>
                <Card.Img variant="top" src={serviceImg} style={{ width: '130px', height: '130px', margin: '0 auto' }} />
                <Card.Body>
                    <Card.Title>{serviceName}</Card.Title>
                    <Card.Text>
                        <div className=" d-flex align-items-center justify-content-around">
                            <p>Price : ${price}</p>
                            <p>Status : {status}</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-around">
                            <p>Booking Option : {option}</p>
                            <p>Booking Date : {date}</p>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleBooking;