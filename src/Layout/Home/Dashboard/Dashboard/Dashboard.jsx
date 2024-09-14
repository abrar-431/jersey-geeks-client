import { CiTrash } from "react-icons/ci";
import { FaHome, FaUsers } from "react-icons/fa";
import { FaCartShopping, FaPenToSquare } from "react-icons/fa6";
import { GiLoincloth } from "react-icons/gi";
import { IoMdAddCircle } from "react-icons/io";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { VscWorkspaceUnknown } from "react-icons/vsc";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../../../Hooks/useAdmin";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-green-900 text-white min-h-full space-y-3 w-80 p-4">
                    {/* Sidebar content here */}
                    {isAdmin?
                    <>
                    <li>
                        <NavLink className={({isActive})=>isActive?'bg-green-700': '' } to='/dashboard/adminHome'><FaHome></FaHome>Dashboard Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive})=>isActive?'bg-green-700': '' } to='/dashboard/add-jersey'><IoMdAddCircle />Add Jersey</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive})=>isActive?'bg-green-700': '' } to='/dashboard/manage-jersey'><FaPenToSquare />Manage Jersey</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive})=>isActive?'bg-green-700': '' } to='/dashboard/delete-jersey'><CiTrash />Delete Jersey</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive})=>isActive?'bg-green-700': '' } to='/dashboard/users'><FaUsers />All Users</NavLink>
                    </li>
                    </> 
                    :
                    <>
                    <li>
                        <NavLink className={({isActive})=>isActive?'bg-green-700': '' } to='/dashboard/userHome'><FaHome></FaHome>Dashboard Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive})=>isActive?'bg-green-700': '' } to='/dashboard/cart'><FaCartShopping></FaCartShopping>My Cart</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive})=>isActive?'bg-green-700': '' } to='/dashboard/bookings'><MdFormatListBulletedAdd />My Bookings</NavLink>
                    </li></>
                    }
                    
                    <div className="divider"></div>
                    <li>
                        <NavLink className={({isActive})=>isActive?'bg-green-700': '' } to='/'><FaHome></FaHome>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive})=>isActive?'bg-green-700': '' } to='/about-us'><VscWorkspaceUnknown />About Us</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive})=>isActive?'bg-green-700': '' } to='/club-jersey'><GiLoincloth />Club Jersey</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive})=>isActive?'bg-green-700': '' } to='/Custom-jersey'><GiLoincloth />Custom Jersey</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;