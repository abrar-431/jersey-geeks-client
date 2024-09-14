import { Slide, Zoom } from "react-awesome-reveal";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../../assets/Banner/banner-1.jpg'
import img2 from '../../../assets/Banner/banner-3.webp'
import img3 from '../../../assets/Banner/banner-4.jpg'
import img4 from '../../../assets/Banner/banner-9.jpg'
import img5 from '../../../assets/Banner/banner-5.webp'
import img6 from '../../../assets/Banner/banner-10.jpg'
import img7 from '../../../assets/Banner/banner-1.jpg'
import img8 from '../../../assets/Banner/banner-4.webp'
import logo from '../../../assets/logo.jpg'
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
    return (
        <div>
            <Helmet>
                <title>Jersey Geeks | About Us</title>
            </Helmet>
            <div className="flex md:flex-row flex-col items-center md:gap-6 gap-2 mt-10">
                <div className="md:w-3/4 w-full">
                    <Slide damping={0.5}>
                        <div className=" p-4">
                            <h2 className="text-2xl font-bold mb-2">About Jersey Geeks</h2>
                            <p className="mt-3 md:text-lg text-sm text-justify font-medium mb-5 p-4">Welcome to Jersey Geeks, your ultimate destination for high-quality football jerseys! At Jersey Geeks, we are passionate about football and committed to bringing fans closer to the game they love. Our extensive collection features the latest club and national team jerseys, including exclusive player and fan versions.

                                We pride ourselves on offering top-notch products crafted with meticulous attention to detail. Whether you are looking for the latest kit from your favorite team or a custom-designed jersey to stand out from the crowd, we have got you covered. Our jerseys are made with premium fabrics, ensuring comfort, durability, and style both on and off the pitch.

                                Our mission is to provide football enthusiasts with the best shopping experience possible. With our easy-to-navigate website, secure payment options, and excellent customer service, we strive to make your jersey shopping seamless and enjoyable. Join the Jersey Geeks community today and wear your passion with pride!</p>
                        </div>
                    </Slide>
                </div>

                <div className="mx-auto md:w-1/4 w-full">
                    <Zoom damping={0.6}>
                        <img src={logo} alt="" />
                    </Zoom>
                </div>
            </div>
            <div className="md:w-2/5 w-full mx-auto">
            <h1 className="md:text-2xl text-lg font-bold text-center mb-3">Explore some of our collection</h1>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={img1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img6} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img7} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img8} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default AboutUs;