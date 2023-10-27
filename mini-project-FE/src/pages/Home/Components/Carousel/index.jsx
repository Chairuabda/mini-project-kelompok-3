// import React, { useRef, useState } from 'react';
import { Box, Button, Image, Text } from "@chakra-ui/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Banner from "../../../../assets/banner.png"

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Scrollbar } from "swiper/modules";

export const Carousel = () => {
	return (
		<Box display={"flex"} alignItems={"center"} h={"500px"} mt={"70px"}>
			<Box position={"absolute"} zIndex={5} color={"white"} left={20}>
				<Text fontSize={"48px"} fontWeight={300}>Temukan tiket konser</Text>
				<Text fontSize={"48px"} fontWeight={700} mt={"-15px"}>Band Favoritmu</Text>
				<Button bgColor={"home.primary"} color={"white"} size={"sm"} w={"110px"} h={"40px"} fontSize={"16px"} fontWeight={300} mt={"30px"}>Beli Disini</Button>
			</Box>
			<Swiper
				slidesPerView={1}
				style={{ height: "100%"}}
				spaceBetween={30}
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				scrollbar={{
					el: ".swiper-scrollbar",
					hide: true,
				}}
				modules={[Autoplay, Scrollbar]}
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
				<Box className="swiper-scrollbar" background={"white"} ></Box>
			</Swiper>
		</Box>
	);
};
