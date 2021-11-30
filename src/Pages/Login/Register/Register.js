import React from 'react';
import { Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import logo from '../../../Image/logo.jpg'
import './Register.css'

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="d-flex align-items-center justify-content-around my-5">
            <Row>
                <div className="login-img col-md-6">
                    <img src={logo} alt="" className='img-fluid' />
                </div>
                <div className='login-form col-md-6'>
                    <h2>Create Your Account !</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type='text' {...register("name")} placeholder='User Name' />
                        <input type='email' {...register("email")} placeholder='User Email' />
                        <input type="password" {...register("password")} placeholder=' User Password' />
                        <input type="submit" value='Register' />
                    </form>
                    <p>Already have an Account ? <Link to='/login'>Log in</Link></p>
                </div>
            </Row>
        </div>
    );
};

export default Register;