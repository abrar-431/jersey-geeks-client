import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdAdminPanelSettings } from 'react-icons/md';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(
        {
            queryKey: ['users'],
            queryFn: async () => {
                const res = await axiosSecure.get('/users');
                return res.data;
            }
        }
    )
    
    const handleMakeAdmin = user =>{
        Swal.fire({
            title: "Are you sure you want to make this user Admin?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make Admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `${user.name} has been added as Admin`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }
        });
    }
    const handleDeleteUser = user =>{
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
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `${user.name} has been removed`,
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
            <h2 className="md:text-3xl text-lg font-bold text-center">------All Users------</h2>
            <h2 className="text-base md:text-xl font-medium text-green-700 my-4 text-center"><i>Manage users in your own way!</i></h2>
            <div className='flex justify-between'>
                <h2 className='text-lg md:text-2xl font-bold'>Total Users: {users.length}</h2>
            </div>
            <div>
                <div className="overflow-x-auto mt-6">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>User Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <td>{index+1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {user.role==='admin'? 'Admin' : <button onClick={()=>handleMakeAdmin(user)} className="btn btn-ghost btn-sm text-xl font-bold text-white bg-green-700"><MdAdminPanelSettings /></button>}
                                    </td>
                                    <td>
                                        <button onClick={()=>handleDeleteUser(user)} className="btn btn-ghost btn-sm text-xl font-bold text-white bg-red-700"><RiDeleteBin6Line /></button>
                                    </td>
                                </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;