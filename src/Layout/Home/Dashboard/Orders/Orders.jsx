import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaShippingFast } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';

const Orders = () => {
    const [orders, setOrders] = useState([])
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get('/orders')
            .then(res => setOrders(res.data))
    }, [axiosSecure])

    const handleDelivery = (id) => {
        axiosSecure.put(`/orders/${id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    toast('Order has been dispatched successfully')
                    axiosSecure.get('/orders')
                        .then(res => setOrders(res.data))
                }
            })
    }
    return (
        <div>
            <Helmet>
                <title>Jersey Geeks | Dashboard | Orders</title>
            </Helmet>
            <h2 className="md:text-3xl text-lg font-bold text-center">------My Orders------</h2>
            <h2 className="text-base md:text-xl font-medium text-green-700 my-4 text-center"><i>Track, Process & Manage All Orders with Ease!</i></h2>
            <div className="overflow-x-auto mt-6">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Contact Number</th>
                            <th>Products</th>
                            <th>Amount</th>
                            <th>Address</th>
                            <th>Delivery Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <tr key={order._id}>
                                <td>{order.name}</td>
                                <td>{order.number}</td>
                                <td>
                                    <ul>
                                        {
                                            order.productName.map((product, idx) =>
                                                <li key={idx}>{idx + 1}. {product}</li>)
                                        }
                                    </ul>
                                </td>
                                <td>{order.amount}</td>
                                <td>{order.address}</td>
                                <td>
                                    {
                                        order.deliveryStatus == "Pending" ?
                                            <div>
                                                <span className="badge badge-primary mr-3"><AiOutlineClockCircle className='text-lg font-black mr-1' />{order.deliveryStatus}</span>
                                                <span onClick={() => handleDelivery(order._id)} className="badge badge-success text-gray-200"><FaShippingFast className='text-lg font-black  mr-1'/>Dispatch</span>
                                            </div>
                                            :
                                            <div className="badge badge-success text-gray-200"><FaShippingFast className='text-lg font-black  mr-1' />{order.deliveryStatus}</div>
                                    }
                                </td>
                            </tr>
                            )}
                    </tbody>
                </table>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Orders;