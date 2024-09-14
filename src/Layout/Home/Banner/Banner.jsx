import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-container text-white pt-8 mb-10">
            <div className="flex gap-24 px-80 py-36 items-center justify-center">
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className="space-y-3">
                    <h2 className="text-4xl font-bold uppercase">WHY<br />Jersey <br />GEEKS?</h2>
                    <p className="w-1/2 font-medium my-2 rounded-lg">Jersey geeks, name of a reliable online shop. We provide club jersey as well as customized jersey at an affordable cost.</p>
                    <Link to='/about-us'><button className="btn btn-success">Continue Reading</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;