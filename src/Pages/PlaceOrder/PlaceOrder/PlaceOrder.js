import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../../Hook/useAuth';
import './PlaceOrder.css'

const PlaceOrder = () => {
    const { user } = useAuth()
    const { id } = useParams()
    const [service, setService] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/singleService/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [id])
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.email = (user.email)
        data.status = 'pending'
        fetch('http://localhost:5000/bookingOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order Successfully Placed')
                    reset()
                }
            })
    };
    return (
        <Container>
            <div className='row '>
                <h2 className='my-5'>Order Your Service</h2>
                <div className="col-md-5">
                    <Card style={{ width: '18rem', backgroundColor: ' #ccffcc', padding: '10px' }}>
                        <Card.Img variant="top" src={service.ServiceImg} style={{ height: '150px', width: '150px', margin: '0 auto' }} />
                        <Card.Body>
                            <Card.Title>{service.ServiceName}</Card.Title>
                            <h5>Price : {service.ServicePrice}</h5>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-7 order-form mb-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("serviceName")}
                            type='text'
                            defaultValue={service?.ServiceName}
                        />
                        <input {...register("date")}
                            type='date'
                            defaultValue={new Date()}

                        />
                        <input {...register("comment")}
                            type='text'
                            placeholder='Your Comment'
                        />
                        <input {...register("serviceImg")}
                            type='text'
                            defaultValue={service?.ServiceImg}
                        />
                        <input {...register("price")}
                            type='number'
                            defaultValue={service?.ServicePrice}

                        />
                        <select {...register("option")}>
                            <option value="premium">premium</option>
                            <option value="classic">classic</option>
                            <option value="business">business</option>
                        </select>
                        <input type="submit" value='Place Order' />
                    </form>
                </div>

            </div>
        </Container>
    );
};

export default PlaceOrder;