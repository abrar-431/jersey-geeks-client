import { Helmet } from "react-helmet-async";
import useAuth from "../../../../Hooks/useAuth";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaChalkboardUser } from "react-icons/fa6";

const UserHome = () => {
    const { user } = useAuth();
    return (
        <div className="mx-auto my-10 px-20">
            <Helmet>
                <title>Jersey Geeks | Dashboard | Home</title>
            </Helmet>
            <h2 className="text-lg md:text-3xl font-bold text-center">Welcome to the Dashboard, <i>{user.displayName}</i></h2>
            <p className="text-base text-center w-3/4 mx-auto my-4">This is your one-stop hub for managing and exploring everything related to your passion for sports jerseys. The dashboard provides an intuitive and user-friendly interface where you can easily navigate and manage your activities.</p>
            <div className="flex gap-10">
                <div className="flex justify-center items-center gap-5">
                    <MdMarkEmailUnread className="text-lg" />
                    <h2 className="text-lg">{user.email}</h2>
                </div>
                <div className="flex justify-center items-center gap-5">
                    <FaChalkboardUser className="text-lg" />
                    <img className="w-1/3 rounded-full" src={user.photoURL} alt="" />
                </div>
            </div>
        </div>
    );
};

export default UserHome;