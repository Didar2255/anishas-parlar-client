import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import logo from '../../Image/Group 33092.png'
import './Navigation.css'

const Navigation = () => {
    const { handelSignOut, user } = useAuth()
    return (
        <Navbar bg="light" variant="light" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="100px"
                        height="40px"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Nav className="ms-auto menu-bar">
                    <NavLink to='/home'>Home</NavLink>
                    <NavLink to='/services'>Services</NavLink>
                    <NavLink to='/booking'>My Booking</NavLink>
                    <NavLink to='/dashboard'>Dashboard</NavLink>
                    {!user.email ? <NavLink to='/login'>Login</NavLink>
                        :
                        <button className="btn btn-danger" onClick={handelSignOut}>Log out</button>
                    }
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;