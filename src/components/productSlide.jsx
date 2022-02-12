import {React, useState} from 'react';
import productOne from '../images/image-product-1.jpg'
import productTwo from '../images/image-product-2.jpg'
import productThree from '../images/image-product-3.jpg'
import productFour from '../images/image-product-4.jpg'

import { Navigation, Pagination, Thumbs} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

function ProductSlide() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return <div className=' lg:px-20 items-center ml-5 w-full md:w-1/2 md:h-screen'>
       <Swiper
      // install Swiper modules
      modules={window.innerWidth < 768 ? [Navigation, Thumbs, Pagination] : [Navigation, Thumbs] }
      // modules={[Navigation, Thumbs]}
      // navigation
      thumbs={{ swiper: thumbsSwiper }}
  
    >
      <SwiperSlide className='mb-5' >
        <img className='rounded-2xl lg:w-full lg:h-[30rem] ' src={productOne} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='rounded-2xl lg:w-full lg:h-[30rem]' src={productTwo} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='rounded-2xl lg:w-full lg:h-[30rem]' src={productThree} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='rounded-2xl lg:w-full lg:h-[30rem]' src={productFour} alt="" />
      </SwiperSlide>
    </Swiper>

    <Swiper
        modules={[Thumbs]}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        spaceBetween={30}
        className='hidden md:block'
      >
        <SwiperSlide >
        <img className='rounded' src={productOne} alt="" />
        </SwiperSlide>

        <SwiperSlide >
        <img className='rounded' src={productTwo} alt="" />
        </SwiperSlide>

        <SwiperSlide >
        <img className='rounded' src={productThree} alt="" />
        </SwiperSlide>

        <SwiperSlide >
        <img className='rounded' src={productFour} alt="" />
        </SwiperSlide>
      </Swiper>

  </div>;
}

export default ProductSlide;
