import React, { useState } from 'react';
import AddServices from '../AddServices/AddServices';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageService from '../ManageService/ManageService';
import OrderList from '../OrderList/OrderList';
import './Dashboard.css'

const Dashboard = () => {
    const [control, setControl] = useState('orderList')
    return (
        <div className='admin-container'>
            <div className="dashboard">
                <div className="admin-box">
                    <div className="row admin-container">
                        <div className="col-md-3 ">
                            <div className="admin-area p-1">
                                <div className="all-menu mt-4">
                                    <li
                                        onClick={() => setControl('orderList')}
                                        className='admin-menu p-2'
                                    >
                                        <i class="fas fa-list icon"></i>
                                        Order List
                                    </li>
                                    <li
                                        onClick={() => setControl('addService')}
                                        className='admin-menu p-2'>
                                        <i class="fas fa-plus icon"></i>
                                        Add Service
                                    </li>
                                    <li
                                        onClick={() => setControl('manageService')}
                                        className='admin-menu p-2'>
                                        <i class="fas fa-th-large icon"></i>
                                        Manage Service
                                    </li>
                                    <li
                                        onClick={() => setControl('addAdmin')}
                                        className='admin-menu p-2'>
                                        <i class="fas fa-user-plus icon"></i>  Make Admin
                                    </li>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 text-center">
                            {control === 'orderList' && <OrderList></OrderList>}
                            {control === 'addService' && <AddServices></AddServices>}
                            {control === 'manageService' && <ManageService></ManageService>}
                            {control === 'addAdmin' && <MakeAdmin></MakeAdmin>}
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Dashboard;