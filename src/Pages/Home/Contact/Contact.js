import React from 'react';
import { Button } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact-section'>
            <h2 className='mb-5' style={{ fontWeight: 700 }}>Let us handle your <br />project,Professionally</h2>
            <form action="">
                <div className=" d-flex align-items-center justify-content-center contact-form">
                    <input type="text" placeholder='Full Name' />
                    <input type="text" placeholder='Last Name' />
                </div>
                <div className="d-flex align-items-center justify-content-center contact-form">
                    <input type="email" placeholder='Email address' />
                    <input type="number" placeholder='Phone Number' />
                </div>
                <div className="contact-form">
                    <textarea cols="40" rows="5" placeholder='Your Message'></textarea>
                </div>
                <Button className='contact-btn'>SEND MESSAGE</Button>
            </form >
        </div >
    );
};

export default Contact;