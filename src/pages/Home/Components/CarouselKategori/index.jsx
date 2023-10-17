// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";
import { Box, Text } from "@chakra-ui/react";

export const CarouselKategori = () => {
	return (
		<Box my={"100px"} mx={"50px"} display={"flex"} flexDirection={"column"}>
			<Text fontSize={"20px"} ml={"50px"}>Kategori</Text>
			<Box mb={"100px"} mx={"50px"}>
				<Swiper
					style={{
						height: "200px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
					slidesPerView={5}
					spaceBetween={30}
					className="mySwiper"
					navigation={true}
					modules={[Navigation]}
				>
					<SwiperSlide
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Box
							display={"flex"}
							justifyContent={"center"}
							alignItems={"center"}
							border={"1px solid black"}
							bgColor={"white"}
							h={"100%"}
							w={"95%"}
						>
							1
						</Box>
					</SwiperSlide>
					<SwiperSlide
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Box
							display={"flex"}
							justifyContent={"center"}
							alignItems={"center"}
							border={"1px solid black"}
							bgColor={"white"}
							h={"100%"}
							w={"95%"}
						>
							2
						</Box>
					</SwiperSlide>
					<SwiperSlide
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Box
							display={"flex"}
							justifyContent={"center"}
							alignItems={"center"}
							border={"1px solid black"}
							bgColor={"white"}
							h={"100%"}
							w={"95%"}
						>
							3
						</Box>
					</SwiperSlide>
					<SwiperSlide
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Box
							display={"flex"}
							justifyContent={"center"}
							alignItems={"center"}
							border={"1px solid black"}
							bgColor={"white"}
							h={"100%"}
							w={"95%"}
						>
							4
						</Box>
					</SwiperSlide>
					<SwiperSlide
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Box
							display={"flex"}
							justifyContent={"center"}
							alignItems={"center"}
							border={"1px solid black"}
							bgColor={"white"}
							h={"100%"}
							w={"95%"}
						>
							5
						</Box>
					</SwiperSlide>
					<SwiperSlide
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Box
							display={"flex"}
							justifyContent={"center"}
							alignItems={"center"}
							border={"1px solid black"}
							bgColor={"white"}
							h={"100%"}
							w={"95%"}
						>
							6
						</Box>
					</SwiperSlide>
					<SwiperSlide
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Box
							display={"flex"}
							justifyContent={"center"}
							alignItems={"center"}
							border={"1px solid black"}
							bgColor={"white"}
							h={"100%"}
							w={"95%"}
						>
							7
						</Box>
					</SwiperSlide>
					<SwiperSlide
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Box
							display={"flex"}
							justifyContent={"center"}
							alignItems={"center"}
							border={"1px solid black"}
							bgColor={"white"}
							h={"100%"}
							w={"95%"}
						>
							8
						</Box>
					</SwiperSlide>
					<SwiperSlide
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Box
							display={"flex"}
							justifyContent={"center"}
							alignItems={"center"}
							border={"1px solid black"}
							bgColor={"white"}
							h={"100%"}
							w={"95%"}
						>
							9
						</Box>
					</SwiperSlide>
					<SwiperSlide
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Box
							display={"flex"}
							justifyContent={"center"}
							alignItems={"center"}
							border={"1px solid black"}
							bgColor={"white"}
							h={"100%"}
							w={"95%"}
						>
							10
						</Box>
					</SwiperSlide>
				</Swiper>
			</Box>
		</Box>
	);
};
