import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import bannerImg from '../../../Image/banner-img.png'
import './TopBanner.css'

const TopBanner = () => {
    return (
        <Container className='top-banner'>
            <Row>
                <div className="col-md-6 col-12 banner-des" >
                    <h1 className='title'>BEAUTY SALON <br /> FOR EVERY WOMEN</h1>
                    <p>Every person can look awesome if their skin glows like star, facial is one easy way of brightening and tightening your skin.</p>
                    <Button variant='danger'>Get an Appointment</Button>
                </div>
                <div className="col-md-6 col-12 banner-img">
                    <img src={bannerImg} alt="" className="img-fluid" />
                </div>
            </Row>
        </Container>
    );
};

export default TopBanner;