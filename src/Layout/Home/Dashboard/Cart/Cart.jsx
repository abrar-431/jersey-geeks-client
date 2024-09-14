import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import useCart from '../../../../Hooks/useCart'
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Helmet } from 'react-helmet-async';
const Cart = () => {
    const [carts, refetch] = useCart();
    const totalPrice = carts.reduce((total, cart) => total + cart.price, 0)
    const axiosSecure = useAxiosSecure();

    const handleDeleteItem = (id, jersey) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `${jersey} has been deleted from cart`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className="mx-auto my-10 px-20">
            <Helmet>
                <title>Jersey Geeks | Dashboard | Cart</title>
            </Helmet>
            <h2 className="md:text-3xl text-lg font-bold text-center">------My Cart------</h2>
            <h2 className="text-base md:text-xl font-medium text-green-700 my-4 text-center"><i>Jerseys in Your Cart, Just a Step Away!</i></h2>
            <div className='flex justify-between'>
                <h2 className='text-lg md:text-2xl font-bold'>Total Orders: {carts.length}</h2>
                <h2 className='text-lg md:text-2xl font-bold'>Total Price: {totalPrice}</h2>
                <button className='btn btn-success'>Pay</button>
            </div>
            <div>
                <div className="overflow-x-auto mt-6">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Item Image</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                carts.map(cart => <tr key={cart._id}>
                                    <td>{cart.title}</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-16 w-16">
                                                    <img
                                                        src={cart.image}
                                                        alt={cart.title} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{cart.price}</td>
                                    <th>
                                        <button onClick={() => handleDeleteItem(cart._id, cart.title)} className="btn btn-ghost btn-xl text-xl font-bold text-white bg-red-700"><RiDeleteBin6Line /></button>
                                    </th>
                                </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;