import { BiSolidCategoryAlt } from "react-icons/bi";
import { CgUnavailable } from "react-icons/cg";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdEventAvailable } from "react-icons/md";
import { useLoaderData, useLocation, useNavigate} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";

const ClubDetails = () => {
    const jersey = useLoaderData();
    const { title, image, description, available, fabric_quality, price, sleeve, version, design, gsm } = jersey;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [,refetch] = useCart();

    const handlePurchase = (jersey) => {
        if(user && user.email){
            // send cart data to the database
            const cartItem = {
                jersetId: jersey._id,
                title: title,
                email: user.email,
                name: user.name,
                image, 
                price
            }
            axiosSecure.post('/carts', cartItem)
            .then(res=>{
                if(res.data.insertedId){
                    toast('The jersey was added to the cart');
                    refetch()
                }
            })
        }
        else{
            // send user to login
            Swal.fire({
                title: "You are not logged in",
                text: "Please login!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', { state: location.pathname})
                }
              });
        }
    }
    return (
        <div>
            <h2 className="text-2xl font-bold my-4">{title}</h2>
            <img className='rounded-lg my-3 mx-auto' src={image} alt={title} />
            <h2 className="text-2xl font-semibold my-4 text-center">About {title}</h2>
            <p className="text-center my-2">{description}</p>
            <h2 className="text-xl font-semibold text-center mt-10 mb-3">How is the fabric quality?</h2>
            <p className="text-center my-2">{fabric_quality} and GSM: {gsm}</p>
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
            <h2 className="text-lg font-semibold mt-10 mb-2">More about the {title}</h2>
            <div className="flex gap-6">
                <p>Design specification: {design}</p>
                <p>Sleeve: {sleeve}</p>
            </div>
            <div className="my-5 flex">
                <button onClick={()=>handlePurchase(jersey)} className="btn btn-primary mx-auto">Purchase Now</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ClubDetails;