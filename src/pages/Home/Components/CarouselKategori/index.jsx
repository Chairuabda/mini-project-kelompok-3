// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";
import { Box, Center, Link, Text } from "@chakra-ui/react";
import KonserMusik from "../../../../assets/KonserMusik.png";
import Pendidikan from "../../../../assets/pendidikan.png";
import Olahraga from "../../../../assets/olahraga.png";
// import { Link } from "react-router-dom";

export const CarouselKategori = () => {
	return (
		<Box
			mb={"100px"}
			mx={"80px"}
			display={"flex"}
			flexDirection={"column"}
		>
			<Text
				fontSize={"32px"}
				fontWeight={600}
				m={"54px 0px 46px 0px"}
			>
				Featured Categories
			</Text>
			<Box mb={"20px"}>
				<Swiper
					style={{
						height: "200px",
						width: "100%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
					slidesPerView={3.5}
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
							color={"white"}
							h={"100%"}
							w={"95%"}
							borderRadius={"30px"}
							backgroundImage={KonserMusik}
							backgroundSize={"110%"}
							backgroundPosition={"center"}
						>
							KONSER MUSIK
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
							color={"white"}
							h={"100%"}
							w={"95%"}
							borderRadius={"30px"}
							backgroundImage={Olahraga}
							backgroundSize={"110%"}
							backgroundPosition={"center"}
						>
							OLAHRAGA
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
							color={"white"}
							h={"100%"}
							w={"95%"}
							borderRadius={"30px"}
							backgroundImage={Pendidikan}
							backgroundSize={"110%"}
							backgroundPosition={"center"}
						>
							PENDIDIKAN
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
							color={"white"}
							h={"100%"}
							w={"95%"}
							borderRadius={"30px"}
							backgroundImage={KonserMusik}
							backgroundSize={"110%"}
							backgroundPosition={"center"}
						>
							PENTAS SENI
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
							color={"white"}
							h={"100%"}
							w={"95%"}
							borderRadius={"30px"}
							backgroundImage={Pendidikan}
							backgroundSize={"110%"}
							backgroundPosition={"center"}
						>
							KONSER MUSIK
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
							color={"white"}
							h={"100%"}
							w={"95%"}
							borderRadius={"30px"}
							backgroundImage={Olahraga}
							backgroundSize={"110%"}
							backgroundPosition={"center"}
						>
							KONSER MUSIK
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
							color={"white"}
							h={"100%"}
							w={"95%"}
							borderRadius={"30px"}
							backgroundImage={KonserMusik}
							backgroundSize={"110%"}
							backgroundPosition={"center"}
						>
							KONSER MUSIK
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
							color={"white"}
							h={"100%"}
							w={"95%"}
							borderRadius={"30px"}
							backgroundImage={Olahraga}
							backgroundSize={"110%"}
							backgroundPosition={"center"}
						>
							KONSER MUSIK
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
							color={"white"}
							h={"100%"}
							w={"95%"}
							borderRadius={"30px"}
							backgroundImage={Pendidikan}
							backgroundSize={"110%"}
							backgroundPosition={"center"}
						>
							KONSER MUSIK
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
							color={"white"}
							h={"100%"}
							w={"95%"}
							borderRadius={"30px"}
							backgroundImage={Olahraga}
							backgroundSize={"110%"}
							backgroundPosition={"center"}
						>
							OLAHRAGA
						</Box>
					</SwiperSlide>
				</Swiper>
			</Box>
			<Center>
				<Link fontSize={"20px"} fontWeight={600} color={"home.primary"}>
					See All Categories
				</Link>
			</Center>
		</Box>
	);
};
