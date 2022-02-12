import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper';
import productOne from '../images/image-product-1.jpg'
import productTwo from '../images/image-product-2.jpg'
import productThree from '../images/image-product-3.jpg'
import productFour from '../images/image-product-4.jpg'


const SlideThumbs = () => {
  // store thumbs swiper instance
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <main>
      <Swiper modules={[Thumbs]} thumbs={{ swiper: thumbsSwiper }}>
        <img className='rounded' src={productOne} alt="" />
      </Swiper>

      <Swiper
        modules={[Thumbs]}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
      >
        <img className='rounded' src={productTwo} alt="" />
      </Swiper>
    </main>
  )
}

export default SlideThumbs;