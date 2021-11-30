import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-5'>
            <h1 className='my-5' style={{ fontSize: '40px', fontWeight: 700 }}>Our Top <span style={{ color: '#ff3385' }}>Services</span></h1>
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {
                        services.map(allService => <Service
                            key={allService._id}
                            allService={allService}
                        ></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;