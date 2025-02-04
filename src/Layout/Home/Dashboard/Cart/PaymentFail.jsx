import { Link } from 'react-router-dom';

const PaymentFail = () => {
        return (
            <div>
                <h1 className="text-lg font-bold text-red-600 text-center">Sorry, Payment Successful</h1>
                <div className="flex justify-center">
                    <Link to='/'>
                    <button className='btn btn-success mt-4'>Go to Home</button></Link>
                </div>
            </div>
        );
};

export default PaymentFail;