import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { ServiceName, ServiceDescription, ServicePrice, ServiceImg, _id } = props.allService
    const url = `/service/${_id}`
    return (
        <Col>
            <Card className='p-4'>
                <Card.Img variant="top" src={ServiceImg} style={{ width: '80px', height: '80px', margin: '0 auto' }} />
                <Card.Body>
                    <Card.Title>{ServiceName}</Card.Title>
                    <Card.Text>
                        <h4 style={{ color: '#ff3385' }}> ${ServicePrice}</h4>
                        <p>{ServiceDescription}</p>
                    </Card.Text>
                    <Link to={url}>
                        <Button className='btn btn-danger'> <i class="fas fa-cart-plus"></i> add to cart</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;