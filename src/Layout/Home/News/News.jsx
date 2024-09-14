import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import './News.css'

const News = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])

    console.log(news)
    return (
        <div className='my-10'>
            <h2 className="text-2xl font-bold text-center"> Hot Football Discussions</h2>
            <p className="w-4/5 text-center mx-auto my-3">Stay updated with the latest buzz in the world of football! Our Hot Football Discussions section brings you breaking news, in-depth analysis, and lively debates on the biggest stories in the sport. From thrilling match previews and transfer rumors to record-breaking performances and tactical insights, we have got you covered. Join the conversation and keep your finger on the pulse of the football universe. Read on for the most talked-about topics and expert opinions from around the globe.</p>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='mx-auto' src="https://i.ibb.co/w0GSTHv/news-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='mx-auto' src="https://i.ibb.co/MSfPR2m/news-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='mx-auto' src="https://i.ibb.co/L065QGC/news-4.jpg" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default News;