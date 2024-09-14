import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

const DeleteJersey = () => {
    const [newJerseys, setNewJerseys] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(()=>{
        axios.get('https://jersey-geeks-server.vercel.app/jerseys')
        .then(res=>setNewJerseys(res.data))
    },[])

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
                axiosPublic.delete(`/jerseys/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            const modifiedjerseys = newJerseys.filter(jersey=> jersey._id !== id)
                            setNewJerseys(modifiedjerseys);
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `${jersey} has been deleted from list`,
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
                <title>Jersey Geeks | Dashboard | Delete Jersey</title>
            </Helmet>
            <h2 className="md:text-3xl text-lg font-bold text-center">------My jersey------</h2>
            <h2 className="text-base md:text-xl font-medium text-green-700 my-4 text-center"><i>Jerseys in Your jersey, Just a Step Away!</i></h2>
            <div>
                <div className="overflow-x-auto mt-6">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Image</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                newJerseys.map(jersey => <tr key={jersey._id}>
                                    <td>{jersey.title}</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-16 w-16">
                                                    <img
                                                        src={jersey.image}
                                                        alt={jersey.title} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{jersey.category}</td>
                                    <td>{jersey.price}</td>
                                    <td>
                                        <button onClick={() => handleDeleteItem(jersey._id, jersey.title)} className="btn btn-ghost btn-xl text-xl font-bold text-white bg-red-700"><RiDeleteBin6Line /></button>
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

export default DeleteJersey;