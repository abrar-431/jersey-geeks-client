import { BiSolidCategoryAlt } from "react-icons/bi";
import { CgUnavailable } from "react-icons/cg";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdEventAvailable } from "react-icons/md";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const CustomJersey = ({ jersey }) => {
    const { _id, image, title, price, version, description, available, design, sleeve, fabric_quality } = jersey;
    return (
        <div className='border-2 border-gray-400 rounded-2xl p-6 flex flex-col'>
            <div className="flex-grow">
                <div>
                    <div className='flex items-center'>
                        <p className='text-2xl font-bold'>{title}</p>
                    </div>
                    <img className='rounded-lg mx-auto my-3 max-w-xs' src={image} alt={title} />
                </div>
                <div className='my-4 flex justify-between'>
                    <div className='flex items-center'>
                        <FaMoneyCheckDollar className='text-lg mr-2'></FaMoneyCheckDollar>
                        <p>BDT {price}</p>
                    </div>
                    <div className='flex items-center'>
                        <BiSolidCategoryAlt className='text-lg mr-2'></BiSolidCategoryAlt>
                        <p>{version}</p>
                    </div>
                    {
                        available === true ?
                            <div className='flex items-center'>
                                <MdEventAvailable className='text-lg mr-2 text-green-600'></MdEventAvailable>
                                <p>In Stock</p>
                            </div>
                            :
                            <div className='flex items-center'>
                                <CgUnavailable className='text-lg mr-2 text-red-600'></CgUnavailable >
                                <p>Out of Stock</p>
                            </div>
                    }
                </div>
                <h2 className="text-lg font-semibold mt-10 mb-2">More about the {description}</h2>
                <div className="flex gap-6">
                    <p>Design specification: {design}</p>
                    <p>Sleeve: {sleeve}</p>
                </div>
                <p>Fabric quality: {fabric_quality}</p>
            </div>
            <div className="my-5 flex">
                <Link to={`/jerseys/${_id}`}>
                    <button className="btn btn-accent mx-auto">View Details</button>
                </Link>
            </div>
            <ToastContainer />
        </div>
    );
};

export default CustomJersey;