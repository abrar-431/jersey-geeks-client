import { Helmet } from "react-helmet-async";
import useJerseys from '../../Hooks/useJerseys';
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";

const ManageJersey = () => {
    const [jerseys] = useJerseys();
    return (
        <div className="mx-auto my-10 px-20">
            <Helmet>
                <title>Jersey Geeks | Dashboard | Manage Jersey</title>
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
                                jerseys.map(jersey => <tr key={jersey._id}>
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
                                        <Link to={`/dashboard/manage/${jersey._id}`}>
                                            <button><CiEdit className="text-lg text-white" /></button>
                                        </Link>
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

export default ManageJersey;