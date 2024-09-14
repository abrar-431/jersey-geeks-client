import { Typewriter } from "react-simple-typewriter";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../../assets/Banner/banner-2.jpg'
import img2 from '../../../assets/Banner/banner-3.webp'
import img3 from '../../../assets/Banner/banner-4.jpg'
import img4 from '../../../assets/Banner/banner-9.jpg'
import img5 from '../../../assets/Banner/banner-5.webp'
import img6 from '../../../assets/Banner/banner-10.jpg'
import img7 from '../../../assets/Banner/banner-1.jpg'
import img8 from '../../../assets/Banner/banner-4.webp'

const Slider = () => {
    return (
        <div>
        <h1 className="md:text-2xl text-lg font-bold text-center">Wear your pride and show your {' '}
            <span className="md:text-2xl text-lg font-bold text-green-600">
                <Typewriter
                    words={['Jersey', 'Cheer', 'Repeat']}
                    loop={5}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                >
                </Typewriter>
            </span>
        </h1>
        <p className="my-5 text-center md:w-4/5 w-full mx-auto">Discover a wide range of authentic local and club jerseys that let you represent your favorite teams with passion and style. Whether you are cheering from the stands or playing on the field, Jersey Geeks has the perfect gear for every fan and athlete. Explore our collection today and wear your pride on your sleeve!</p>
        <div className="md:w-2/5 w-full mx-auto">
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

export default Slider;