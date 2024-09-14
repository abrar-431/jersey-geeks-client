import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.jpg'
import useAuth from "../../Hooks/useAuth";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../Hooks/useCart";

const Header = () => {
    const { user, logOut, theme, setTheme } = useAuth();
    const [carts] = useCart();

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const handleTheme = e => {
        if (e.target.checked) {
            setTheme('dark');
        }
        else {
            setTheme('light');
        }
    }

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink
            className={({ isActive }) =>
                isActive ? "btn btn-success text-gray-300" : "btn btn-outline btn-success"
            }
            to="/">Home</NavLink></li>
        <li><NavLink
            className={({ isActive }) =>
                isActive ? "btn btn-success text-gray-300" : "btn btn-outline btn-success"
            }
            to="/about-us">About Us</NavLink></li>
        <li><NavLink
            className={({ isActive }) =>
                isActive ? "btn btn-success text-gray-300" : "btn btn-outline btn-success"
            }
            to="/club-jersey">Club Jersey</NavLink></li>
        <li><NavLink
            className={({ isActive }) =>
                isActive ? "btn btn-success text-gray-300" : "btn btn-outline btn-success"
            }
            to="/custom-jersey">Custom Jersey</NavLink></li>
        <li><NavLink
            className="btn btn-outline btn-success"
            to="/dashboard/cart">
            <div className="badge badge-success">+{carts.length}<FaCartShopping /></div></NavLink></li>
    </>
    return (
        <div className="navbar bg-black fixed top-0 bg-opacity-30 text-green-600  z-10">
            <div className="w-5/6 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="flex gap-4">
                        <img className="w-1/12 rounded-lg" src={logo} alt="Jersey Geeks" />
                        <h2 className="text-3xl font-bold"><span className="text-gray-100">Jersey</span> Geeks</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end flex items-center">
                    {
                        user ?
                            <div className='md:flex hidden gap-2 items-center'>
                                <button onClick={handleLogOut} className='btn btn-outline btn-success'>Logout</button>
                                <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                    <img className='w-10 h-10 rounded-full' src={user.photoURL} alt={user.displayName} />
                                </div>
                            </div>
                            :
                            <NavLink className={({ isActive }) => isActive ? "btn btn-success text-gray-300" : "btn btn-outline btn-success"} to='/login'>Login</NavLink>
                    }
                    <label className="flex cursor-pointer gap-2 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <input checked={theme === 'light' ? false : true} onChange={handleTheme} type="checkbox" className="toggle theme-controller" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;