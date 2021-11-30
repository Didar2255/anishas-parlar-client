import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const OrderList = () => {
    const [allOrders, setAllOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allOrder')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, []);
    console.log(allOrders)
    return (
        <div className='my-4'>
            <h2 className='mb-4'>All Order here</h2>
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Order Email</th>
                        <th>Service Name</th>
                        <th>Service Price</th>
                        <th>Order Status</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allOrders.map(order => <tr>
                            <td></td>
                            <td>{order.email}</td>
                            <td>{order.serviceName}</td>
                            <td>{order.price}</td>
                            <td>{order.status}</td>
                            <td><i class="fas fa-edit"></i></td>
                            <td><i class="fas fa-trash-alt"></i></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default OrderList;