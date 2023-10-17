// import React, { useRef, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        style={{height: "350px"}}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box color={"white"} display={"flex"} justifyContent={"center"} alignItems={"center"} h={"full"}><Text>Slide 1</Text></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box color={"white"} display={"flex"} justifyContent={"center"} alignItems={"center"} h={"full"}><Text>Slide 2</Text></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box color={"white"} display={"flex"} justifyContent={"center"} alignItems={"center"} h={"full"}><Text>Slide 3</Text></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box color={"white"} display={"flex"} justifyContent={"center"} alignItems={"center"} h={"full"}><Text>Slide 4</Text></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box color={"white"} display={"flex"} justifyContent={"center"} alignItems={"center"} h={"full"}><Text>Slide 5</Text></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box color={"white"} display={"flex"} justifyContent={"center"} alignItems={"center"} h={"full"}><Text>Slide 6</Text></Box>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
