import Error from '../assets/error-01.jpg'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
    return (
        <div className='my-10'>
            <Helmet>
                <title>Jersey Geeks | Page Not Found</title>
            </Helmet>
            <img className='mx-auto mt-10 w-1/2 rounded-lg' src={Error} alt="Error-Not Found" />
            <div className="mt-6 flex justify-center">
                <Link to='/'><button className='rounded-lg btn btn-info'>Return to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;