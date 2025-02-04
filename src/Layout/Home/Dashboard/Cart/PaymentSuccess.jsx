import { Link, useParams } from "react-router-dom";

const PaymentSuccess = () => {
    const { tran_id } = useParams();
    return (
        <div>
            <h1 className="text-lg font-bold text-center">Payment Successful</h1>
            <p className="mt-2 italic text-center">Your transaction id is, {tran_id}</p>
            <div className="flex justify-center">
                <Link to='/'>
                <button className='btn btn-success mt-4'>Go to Home</button></Link>
            </div>
        </div>
    );
};

export default PaymentSuccess;