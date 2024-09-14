import { Bounce, Fade } from "react-awesome-reveal";
import useAuth from "../Hooks/useAuth";

const Faq = () => {
    const {theme} = useAuth();
    return (
        <div className=" my-5 space-y-3">
            <Bounce direction="top"><h2 className="text-center mx-auto md:w-1/2 w-full md:text-2xl text-lg font-bold">Frequently Asked Questions (FAQ)</h2></Bounce>
            <hr className='w-1/6 mx-auto mt-2 bg-blue-800 border-0 h-1 rounded-full' />
            <Fade delay={500}>
                <p className="font-medium text-lg my-3 md:w-3/4 w-full mx-auto text-center">Got questions? We have got answers! Explore our comprehensive FAQ section.</p>
            </Fade>
            <div className={theme=='dark'?"collapse collapse-plus bg-base-200 text-white" : "collapse collapse-plus bg-base-200 text-black"}>
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    What is the difference between fan and player version?
                </div>
                <div className="collapse-content">
                    <p>Fan version of jersey is comfortable to wear. Player version is more premium and the quality of the fabric is better than fan version. </p>
                </div>
            </div>
            <div className={theme=='dark'?"collapse collapse-plus bg-base-200 text-white" : "collapse collapse-plus bg-base-200 text-black"}>
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Can I make jersey for my school/college/university group?
                </div>
                <div className="collapse-content">
                    <p>Absolutely! Explore out=r custom jersey section.</p>
                </div>
            </div>
            <div className={theme=='dark'?"collapse collapse-plus bg-base-200 text-white" : "collapse collapse-plus bg-base-200 text-black"}>
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    What are the differences of different customized jerseys?
                </div>
                <div className="collapse-content">
                    <p>Mainly the difference is in fabric.</p>
                </div>
            </div>
            <div className={theme=='dark'?"collapse collapse-plus bg-base-200 text-white" : "collapse collapse-plus bg-base-200 text-black"}>
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Can I make jersey for my school/college/university group?
                </div>
                <div className="collapse-content">
                    <p>Absolutely! Explore out=r custom jersey section.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;