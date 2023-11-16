import React from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import { A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface ImageGroupProps {
  images: string[];
  setActiveIndex: (index: number) => void;
}

const ImageGroup = ({ images, setActiveIndex }: ImageGroupProps) => {
  return (
    <Swiper
      modules={[A11y]}
      pagination
      onActiveIndexChange={(swiper) => setActiveIndex(swiper.realIndex)}
    >
      {images.map((image) => {
        return (
          <SwiperSlide key={image}>
            <img
              src={image}
              width="100%"
              height="100%"
              className="w-full"
              alt="임시 이미지"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ImageGroup;
