import { BiSolidCategoryAlt } from "react-icons/bi";
import { CgUnavailable } from "react-icons/cg";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdEventAvailable } from "react-icons/md";
import { Link } from "react-router-dom";

const Club = ({ jersey }) => {
    const { _id, image, title, price, version, description, available } = jersey;
    return (
        <div className='border-gray-200 border-2 p-4 rounded-xl flex flex-col'>
            <div className='flex-grow'>
                <img className='rounded-lg mx-auto' src={image} alt={title} />
                <h2 className="text-2xl font-bold my-3 text-center">{title}</h2>
                <p>{description}</p>
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
                                <CgUnavailable  className='text-lg mr-2 text-red-600'></CgUnavailable >
                                <p>Out of Stock</p>
                            </div>
                        }
                </div>
            </div>
            <div className='text-center mt-5'>
                <Link to={`/jerseys/${_id}`}><button className='btn btn-accent text-white'>View Details</button></Link>
            </div>
        </div>
    );
};

export default Club;