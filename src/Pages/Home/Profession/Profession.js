import React from 'react';
import { Container, Row } from 'react-bootstrap';
import professionImg from '../../../Image/professionImg.png'
import './Profession.css'

const Profession = () => {
    return (
        <Container className='my-5'>
            <Row>
                <div className="col-md-6 col-12">
                    <img src={professionImg} alt="" style={{ width: '450px' }} className="img-fluid" />
                </div>
                <div className="col-md-6 col-12 profession-des">
                    <h2>Let us handel your <br /> screen <span style={{ color: '#ff3385', fontWeight: 700 }}>Professionally</span> </h2>
                    <p>In today’s hectic life and busy routines, beauty spa treatments for your skin and body are very important to keep you going. The importance of beauty spa treatments.</p>
                    <div className=" d-flex align-itmes-center justify-content-around">
                        <div>
                            <h1 className='amount'>500+</h1>
                            <h5>Happy Customer</h5>
                        </div>
                        <div>
                            <h1 className='amount'>50+</h1>
                            <h5>Total Service</h5>
                        </div>
                    </div>
                </div>

            </Row>
        </Container>
    );
};

export default Profession;