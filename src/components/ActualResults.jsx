import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { UsIcon } from '../utils/icons';
import { SLIDER_LIST } from '../utils/helper';
import Heading from '../common/Heading';
import SubHeading from '../common/SubHeading';

const ResultSlider = () => {
    return (
        <div className="bg-cover relative bg-no-repeat bg-center bg-actual-results flex flex-col justify-center items-center">
            <div className="text-center pt-[119px]  max-xl:pt-20 max-lg:pt-14 max-md:pt-10 max-sm:pt-6 px-4 md:px-6 lg:px-0">
                <SubHeading heading="Actual businesses." className="!text-white" />
                <Heading boldHeading="Actual results." className="!text-white" />
                <p className="text-white  font-normal space-mono text-sm sm:text-base md:text-lg lg:text-custom-sm leading-5 pt-4 sm:pt-6 md:pt-10">
                    Businesses trust Venveo to power growth.
                </p>
            </div>

            <div className="mx-auto flex items-center justify-center w-full pt-10 md:pt-[81px] max-w-[1920px]">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={90}
                    centeredSlides={true}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                            autoplay: false
                        },
                    }}
                    modules={[Navigation, Pagination, Autoplay]}
                    className="mySwiper !pb-[60px] sm:!pb-[80px] lg:!pb-[100px]"
                >
                    {SLIDER_LIST.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="text-center w-full max-w-[992px] mx-auto">
                                <img
                                    src={slide.image}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full max-w-[640px] max-sm:max-w-full mx-auto"
                                />
                                <p className="text-white pt-6 sm:pt-8 lg:pt-[74px] font-light max-w-[300px] sm:max-w-[450px] lg:max-w-[613px] mx-auto text-3xl max-sm:text-2xl">
                                    {`"${slide.quote}"`}
                                </p>
                                <p className="text-white font-normal pt-4 sm:pt-5 space-mono text-sm sm:text-base lg:text-custom-sm">
                                    {slide.name},
                                </p>
                                <p className="text-white font-normal space-mono text-sm sm:text-base lg:text-custom-sm">
                                    {slide.title}
                                </p>
                                <p className="text-center pt-3 mx-auto flex items-center justify-center">
                                    <UsIcon />
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="max-md:hidden swiper-button-prev  absolute !left-0  top-[50%] transform translate-y-[-50%]">
                    <button className=" w-[61px] max-md:hidden rounded-full flex items-center justify-center">
                        <img src="/assets/images/prev-arrow.webp" alt="prev" />
                    </button>
                </div>
                <div className="max-md:hidden swiper-button-next absolute !right-0 top-[50%] transform translate-y-[-50%]">
                    <button className="bg-white max-md:hidden rounded-full flex items-center justify-center">
                        <img src="/assets/images/next-arrow.webp" alt="next" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResultSlider;