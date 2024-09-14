import { Slide } from "react-awesome-reveal";
import CustomJersey from "./CustomJersey";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";

const CustomJerseys = () => {
    const [search, setSearch] = useState('');
    const [jerseys, setJerseys] = useState([]);
    const axiosPublic = useAxiosPublic();
    useEffect(() => {
        axiosPublic.get(`/custom-jerseys?search=${search}`)
            .then(res => setJerseys(res.data))
    }, [axiosPublic, search])

    const handleSearch = e => {
        e.preventDefault();
        const text = e.target.text.value;
        setSearch(text);
        e.target.reset();
    }
    return (
        <div className="mt-24">
            <Helmet>
                <title>Jersey Geeks</title>
            </Helmet>
            <h2 className="text-2xl font-bold text-center">Custom Jersey Creations: Grab your own</h2>
            <p className="md:w-4/5 w-full text-center mx-auto mt-3">Unleash your creativity with our Custom Jersey Creations! Design your own unique jerseys tailored to your exact preferences and style. Whether for your local team, a special event, or personal use, our custom jerseys offer a perfect blend of quality and individuality. Choose from a wide range of colors, patterns, and fabric options to create a jersey that truly represents you. With options like breathable mesh, moisture-wicking materials, and various GSM fabrics, your custom jersey will not only look great but also provide maximum comfort and performance. Stand out from the crowd and bring your vision to life with our easy-to-use customization tools. Start designing today and wear your masterpiece with pride!</p>
            <div className="flex items-center justify-center mt-8">
                <form onSubmit={handleSearch} className="flex gap-4">
                    <label className="input input-success flex items-center gap-2">
                        <input name="text" type="text" className="grow mr-3" placeholder="Search your jersey" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                    <button className="btn btn-success text-white">Search</button>
                    <button onClick={() => setSearch('')} className="btn btn-ghost">Reset</button>
                </form>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-5">
                <Slide damping={0.8} duration={2000}>
                    {
                        jerseys.map(jersey => <CustomJersey key={jersey._id} jersey={jersey}></CustomJersey>)
                    }
                </Slide>
            </div>
        </div>
    );
};
CustomJerseys.propTypes = {
    search: PropTypes.string,
}

export default CustomJerseys;