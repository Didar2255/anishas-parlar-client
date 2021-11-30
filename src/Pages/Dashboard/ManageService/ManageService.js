import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageService = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-5'>
            <h2 className='mb-4'>Manage All Service </h2>
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Service Name</th>
                        <th>Service Price</th>
                        <th>Service Image</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services.map(service => <tr>
                            <td></td>
                            <td>{service.ServiceName}</td>
                            <td>{service.ServicePrice}</td>
                            <td>{service.ServiceImg}</td>
                            <td><i class="fas fa-edit"></i></td>
                            <td><i class="fas fa-trash-alt"></i></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageService;