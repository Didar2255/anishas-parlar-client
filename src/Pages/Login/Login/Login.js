import React from 'react';
import { Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
import image from '../../../Image/4884170.jpg'
import logo from '../../../Image/Icon/Group 573.png'
import { useHistory, useLocation } from 'react-router';
import './Login.css'

const Login = () => {
    const location = useLocation()
    const history = useHistory()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const { googleLogin } = useAuth()

    const handelLogIn = () => {
        googleLogin(location, history)
    }
    return (
        <div className="d-flex align-items-center justify-content-around my-5">
            <Row>
                <div className="login-img col-md-6">
                    <img src={image} alt="" className='img-fluid' />
                </div>
                <div className='login-form col-md-6'>
                    <h2>Please Log-in</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type='email' {...register("email")} placeholder='Email' />
                        <input type="password" {...register("password")} placeholder='Password' />
                        <input type="submit" value='Log-in' />
                    </form>
                    <p>New user ? <Link to='/register'>Register Here</Link></p>
                    ____________Or_____________
                    <br />
                    <button className="login-btn "><img src={logo} alt="" className='logo' onClick={handelLogIn} /> Sign In With Google</button>
                </div>
            </Row>
        </div>
    );
};

export default Login;