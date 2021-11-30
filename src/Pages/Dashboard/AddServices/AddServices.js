import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Inserted successfully')
                    reset()
                }
            })
    };

    return (
        <div className='addService-form my-5'>
            <h2>Add Services : </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("ServiceName")} placeholder='Service Name' />
                <input {...register("ServiceDescription")} placeholder='Service Description' />
                <input {...register("ServiceImg")} placeholder='Service Img' />
                <input type="number" {...register("ServicePrice")} placeholder='Service Price' />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddServices;