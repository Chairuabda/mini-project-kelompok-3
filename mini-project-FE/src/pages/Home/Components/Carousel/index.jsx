// import React, { useRef, useState } from 'react';
import { Box, Button, Image, Text } from "@chakra-ui/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Banner from "../../../../assets/banner.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Scrollbar } from "swiper/modules";

export const Carousel = () => {
	return (
		<Box
			display={"flex"}
			alignItems={"center"}
			h={{ base: "220px",sm: "300px",md: "400px" ,lg: "500px" }}
			mt={{ base: "30px",sm: "60px", lg: "69px" }}
			ml={"-1px"}
		>
			<Box position={"absolute"} zIndex={5} color={"white"} left={{base: 10,lg: 20}}>
				<Text fontSize={{sm: "24px",lg: "48px"}} fontWeight={300}>
					Temukan tiket konser
				</Text>
				<Text fontSize={{sm: "24px",lg: "48px"}} fontWeight={700} mt={{sm: "-10px",lg: "-15px"}}>
					Band Favoritmu
				</Text>
				<Button
					bgColor={"home.primary"}
					color={"white"}
					size={"sm"}
					borderRadius={{base: "5px"}}
					w={{base: "55px",lg: "110px"}}
					h={{base: "20px",lg: "40px"}}
					fontSize={{base: "10px",lg: "16px"}}
					fontWeight={300}
					mt={{base: "0",lg: "30px"}}
				>
					Beli Disini
				</Button>
			</Box>
			<Swiper
				slidesPerView={1}
				style={{ height: "100%" }}
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
						bgColor={"red"}
					>
						<Image src={Banner} h={"full"} w={"full"} />
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
						<Image src={Banner} h={"full"} w={"full"}/>
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
						<Image src={Banner} h={"full"} w={"full"} />
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
						<Image src={Banner} h={"full"} w={"full"} />
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
						<Image src={Banner} h={"full"} w={"full"} />
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
						<Image src={Banner} h={"full"} w={"full"} />
					</Box>
				</SwiperSlide>
				<Box className="swiper-scrollbar" background={"white"}></Box>
			</Swiper>
		</Box>
	);
};
