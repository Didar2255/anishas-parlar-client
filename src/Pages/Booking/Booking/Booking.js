import React, { useState } from 'react';
import AddReview from '../AddReview/AddReview';
import BookingList from '../BookingList/BookingList';
import './Booking.css'

const Booking = () => {
    const [control, setControl] = useState('bookingList')
    return (
        <div>
            <div className="booking">
                <div className="booking-box">
                    <div className="row booking-container">
                        <div className="col-md-3 ">
                            <div className="booking-area p-1">
                                <div className="all-menu mt-5">
                                    <li
                                        onClick={() => setControl('bookingList')}
                                        className='order-menu p-2'>
                                        <i className="fas fa-clipboard-list icon"></i>
                                        Booking List
                                    </li>
                                    <li
                                        onClick={() => setControl('addReview')}
                                        className='order-menu p-2'>
                                        <i className="far fa-comment-dots icon"></i>
                                        Review
                                    </li>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 text-center">
                            {control === 'bookingList' && <BookingList></BookingList>}
                            {control === 'addReview' && <AddReview></AddReview>}
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Booking;