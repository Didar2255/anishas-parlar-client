import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../Hook/useAuth';
import SingleBooking from '../SingleBooking/SingleBooking';

const BookingList = () => {
    const { user } = useAuth()
    const [bookingOrders, setBookingOrder] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/singleOrder?email=${user.email}`)
            .then(res => res.json())
            .then(data => setBookingOrder(data))
    }, [user]);

    return (
        <Container>
            <div>
                <h2 className='my-4'>All Booking Here </h2>
                <Row xs={1} md={2} className="g-4">
                    {
                        bookingOrders.map(bookingOrder => <SingleBooking
                            key={bookingOrder._id}
                            bookingOrder={bookingOrder}
                        ></SingleBooking>)
                    }
                </Row>
            </div>
        </Container>
    );
};

export default BookingList;