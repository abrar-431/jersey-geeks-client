import { Fade } from "react-awesome-reveal";
import Club from "./Club";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Clubs = () => {
    const [search, setSearch] = useState('');
    const [jerseys, setJerseys] = useState([]);
    const axiosPublic = useAxiosPublic();
    useEffect(() => {
        axiosPublic.get(`/club-jerseys?search=${search}`)
            .then(res => setJerseys(res.data))
    }, [axiosPublic, search])

    const handleSearch = e => {
        e.preventDefault();
        const text = e.target.text.value;
        setSearch(text);
        e.target.reset();
    }

    return (
        <div id="spots">
            <div className="mt-10">
                <Helmet>
                    <title>Jersey Geeks</title>
                </Helmet>
                <h2 className="text-2xl font-bold text-center"> Premium Club Jerseys Collection</h2>
                <p className="w-4/5 text-center mx-auto mt-3">Explore our exclusive collection of premium club jerseys, featuring the latest designs and top-quality fabrics. Whether you are a die-hard fan or a casual supporter, our jerseys offer comfort, style, and durability. Each jersey is crafted with meticulous attention to detail, ensuring you stand out on and off the pitch. From breathable mesh for enhanced ventilation to moisture-wicking technology, our club jerseys are designed to keep you cool and comfortable during every match. Upgrade your sportswear wardrobe with our range of player and fan versions, available in a variety of iconic designs and colors. Shop now and show your support for your favorite club in style!</p>
                <div className="flex items-center justify-center mt-8">
                <form onSubmit={handleSearch} className="flex gap-4">
                    <label className="input input-success flex items-center gap-2">
                        <input name="text" type="text" className="grow mr-3" placeholder="Search your jersey" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                    <button className="btn btn-success text-white">Search</button>
                    <button onClick={()=>setSearch('')} className="btn btn-ghost">Reset</button>
                </form>
            </div>
                <Fade damping={0.8} duration={4000}>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-5">
                        {
                            jerseys.map(jersey => <Club key={jersey._id} jersey={jersey}></Club>)
                        }
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Clubs;