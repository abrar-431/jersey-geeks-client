import { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaShippingFast } from 'react-icons/fa';

const MyBookings = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([])
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get('/orders')
            .then(res => setOrders(res.data))
    }, [axiosSecure])

    const bookings = orders.filter(order => order.email == user.email)

    return (
        <div className='m-6'>
            <Helmet>
                <title>Jersey Geeks | Dashboard | Bookings</title>
            </Helmet>
            <h2 className="md:text-3xl text-lg font-bold text-center">------My Jersey Bookings------</h2>
            <h2 className="text-base md:text-xl font-medium text-green-700 my-4 text-center"><i>Track, Manage & Gear Up in Style!</i></h2>
            <div className="overflow-x-auto mt-6">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Products</th>
                            <th>Amount</th>
                            <th>Address</th>
                            <th>Delivery Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map(booking => <tr key={booking._id}>
                                <td>{booking.productName}</td>
                                <td>{booking.amount}</td>
                                <td>{booking.address}</td>
                                <td>
                                    {
                                        booking.deliveryStatus == "Pending" ?
                                            <div>
                                                <div className="badge badge-primary mr-3"><AiOutlineClockCircle className='text-lg font-black mr-1' />{booking.deliveryStatus}</div>
                                            </div>
                                            :
                                            <div className="badge badge-success text-gray-200"><FaShippingFast className='text-lg font-black  mr-1' />{booking.deliveryStatus}</div>
                                    }
                                </td>
                            </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;