import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import useCart from '../../../../Hooks/useCart'
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../../Hooks/useAuth';
const Cart = () => {
    const [carts, refetch] = useCart();
    const totalPrice = carts.reduce((total, cart) => total + parseInt(cart.price), 0)
    const axiosSecure = useAxiosSecure();
    const productName = carts.map(cart=> cart.title)
    console.log(productName);
    const { user } = useAuth()

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

    const handleCreatePayment = (e) => {
        e.preventDefault();
        const form = e.target;
        const address = form.address.value;
        const city = form.city.value;
        const district = form.district.value;
        const postcode = form.postcode.value;
        const number = form.number.value;
        const paymentInfo = {
            name: user.displayName,
            email: user.email,
            amount: totalPrice,
            address,
            city,
            district,
            postcode,
            number,
            productName
        }
        axiosSecure.post('/create-payment', paymentInfo)
            .then(res => {
                window.location.replace(res.data.url)
            })
        form.reset()
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

                <button className='btn btn-success' onClick={() => document.getElementById('my_modal_1').showModal()} disabled={totalPrice>0?false:true}>Pay</button>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello, {user.displayName}!</h3>
                        <p className="py-4">Please confirm your details.</p>
                        {/* <div className="modal-action">
                            
                        </div> */}
                        <div>
                            <form onSubmit={handleCreatePayment} className='w-full rounded-lg border-gray-300 border-2 p-5'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input type="text" placeholder="Address" name='address' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">City</span>
                                    </label>
                                    <input type="text" placeholder="City" name='city' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">District</span>
                                    </label>
                                    <input type="text" placeholder="District" name='district' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Postcode</span>
                                    </label>
                                    <input type="text" placeholder="Postcode" name='postcode' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                    <input type="text" placeholder="Phone Number" name='number' className="input input-bordered" required />
                                </div>
                                <div className='flex justify-center'>
                                    <button className="btn btn-success mt-2">Submit</button>
                                </div>
                            </form>
                        </div>
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn mt-4">Close</button>
                        </form>
                    </div>
                </dialog>
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