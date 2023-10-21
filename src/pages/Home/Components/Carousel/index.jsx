// import React, { useRef, useState } from 'react';
import { Box, Image } from "@chakra-ui/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Banner from "../../../../assets/banner.png"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export const Carousel = () => {
	return (
		<Box>
			<Swiper
				slidesPerView={1}
				style={{ height: "385px", pagination: "black"}}
				spaceBetween={30}
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				modules={[Autoplay, Pagination]}
				className="mySwiper"
				pag
			>
				<SwiperSlide>
					<Box
						color={"white"}
						display={"flex"}
						justifyContent={"center"}
						alignItems={"center"}
						h={"full"}
					>
						<Image src={Banner} />
					</Box>
				</SwiperSlide>
				<SwiperSlide>
					<Box
						color={"white"}
						display={"flex"}
						justifyContent={"center"}
						alignItems={"center"}
						h={"full"}
					>
						<Image src={Banner} />
					</Box>
				</SwiperSlide>
				<SwiperSlide>
					<Box
						color={"white"}
						display={"flex"}
						justifyContent={"center"}
						alignItems={"center"}
						h={"full"}
					>
						<Image src={Banner}/>
					</Box>
				</SwiperSlide>
				<SwiperSlide>
					<Box
						color={"white"}
						display={"flex"}
						justifyContent={"center"}
						alignItems={"center"}
						h={"full"}
					>
						<Image src={Banner}/>
					</Box>
				</SwiperSlide>
				<SwiperSlide>
					<Box
						color={"white"}
						display={"flex"}
						justifyContent={"center"}
						alignItems={"center"}
						h={"full"}
					>
						<Image src={Banner} />
					</Box>
				</SwiperSlide>
				<SwiperSlide>
					<Box
						color={"white"}
						display={"flex"}
						justifyContent={"center"}
						alignItems={"center"}
						h={"full"}
					>
						<Image src={Banner} />
					</Box>
				</SwiperSlide>
			</Swiper>
		</Box>
	);
};
