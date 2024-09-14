import Contact from "../../../Components/Contact";
import Faq from "../../../Components/Faq";
import Banner from "../Banner/Banner";
import Clubs from "../ClubJersey/Clubs";
import CustomJerseys from "../CustomJersey/CustomJerseys";
import News from "../News/News";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <Slider></Slider>
            <Clubs></Clubs>
            <CustomJerseys></CustomJerseys>
            <News></News>
            <Contact></Contact>
            <Faq></Faq>
        </div>
    );
};

export default Home;