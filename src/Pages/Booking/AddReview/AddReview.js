import React from 'react';
import { useForm } from "react-hook-form";
import './AddReview.css'

const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='review-form'>
            <h2 className='my-4'>Add Your Opinion :</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name",)} placeholder='Your Name *' />
                <input {...register("company")} placeholder='Company name, Designation *' />
                <input {...register("rating")} placeholder='Rating *' />
                <textarea  {...register("message")} placeholder='Type message *' />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddReview;