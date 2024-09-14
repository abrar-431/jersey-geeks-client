import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root";
import Home from "../Layout/Home/Home/Home";
import AboutUs from "../Layout/Home/Home/AboutUs";
import ClubDetails from "../Layout/Home/ClubJersey/ClubDetails";
import Clubs from "../Layout/Home/ClubJersey/Clubs";
import CustomJerseys from "../Layout/Home/CustomJersey/CustomJerseys";
import ErrorPage from "../Components/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddJersey from "../Pages/AddJersey/AddJersey";
import ManageJersey from "../Pages/ManageJersey/ManageJersey";
import Dashboard from "../Layout/Home/Dashboard/Dashboard/Dashboard";
import Cart from '../Layout/Home/Dashboard/Cart/Cart'
import UserHome from "../Layout/Home/Dashboard/UserHome/UserHome";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Layout/Home/Dashboard/All Users/AllUsers";
import Manage from "../Pages/ManageJersey/Manage";
import DeleteJersey from "../Layout/Home/Dashboard/DeleteJersey/DeleteJersey";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/about-us',
            element: <AboutUs></AboutUs>
        },
        {
          path: '/jerseys/:id',
          element: <ClubDetails></ClubDetails>,
          loader: ({params})=>fetch(`https://jersey-geeks-server.vercel.app/jerseys/${params.id}`)
        },
        {
          path: '/club-jersey',
          element: <Clubs></Clubs>
        },
        {
          path: '/custom-jersey',
          element: <CustomJerseys></CustomJerseys>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
    {
      // Dashboard
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'cart',
          element: <Cart></Cart>
        },
        {
          path: 'userHome',
          element: <UserHome></UserHome>
        },
        {
          path: 'add-jersey',
          element: <AddJersey></AddJersey>
        },
        {
          path: 'manage-jersey',
          element: <ManageJersey></ManageJersey>
        },
        {
          path: 'delete-jersey',
          element: <DeleteJersey></DeleteJersey>
        },
        {
          path: 'manage/:id',
          element: <Manage></Manage>,
          loader: ({params})=>fetch(`https://jersey-geeks-server.vercel.app/jerseys/${params.id}`)
        },
        {
          path: 'users',
          element: <AllUsers></AllUsers>
        }
      ]
    }
  ]);

export default router;