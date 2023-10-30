// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../../../../node_modules/swiper/modules/navigation.css";

// import required modules
import { Navigation } from "swiper/modules";
import { Box, Button, Center, Link, Text } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import KonserMusik from "../../../../assets/KonserMusik.png";
import Pendidikan from "../../../../assets/pendidikan.png";
import Olahraga from "../../../../assets/olahraga.png";
// import { Link } from "react-router-dom";

export const CarouselKategori = () => {
	return (
		<Box display={"flex"} justifyContent={"center"} w={"full"}>
			<Box
				display={"flex"}
				flexDirection={"column"}
				w={{base: "75%", sm: "87%",md: "80%", lg: "75%"}}
			>
				<Text
					fontSize={{base: "16px",lg: "32px"}}
					fontWeight={600}
					m={{base: "14px 0px 16px 0px",lg: "54px 0px 46px 0px"}}
				>
					Featured Categories
				</Text>
				<Box
					mb={"20px"}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
					h={{base:"100px", sm: "120px", md: "150px" }}
				>
					<Button
						className="prev"
						position={"absolute"}
						zIndex={5}
						left={{base: "60px",sm:"60px",md: "100px",lg:"170px", xl:"210px"}}
						size={"xm"}
						borderRadius={"50%"}
						fontSize={{sm: "16px",lg: "24px", xl: "28px"}}
						bgColor={"white"}
						_focus={{ outline: "none" }}
						_hover={{ border: "none" }}
					>
						<ChevronLeftIcon/>
					</Button>
					<Button
						className="next"
						position={"absolute"}
						zIndex={5}
						right={{base:"52px",sm: "35px",md: "75px",lg: "145px", xl: "185px"}}
						size={"xm"}
						borderRadius={"50%"}
						fontSize={{sm:"16px",lg:"24px", xl: "28px"}}
						bgColor={"white"}
						_focus={{ outline: "none" }}
						_hover={{ border: "none" }}
					>
						<ChevronRightIcon />
					</Button>
					<Swiper
						style={{
							width: "100%",
							height: "100%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
						slidesPerView={1.5}
						breakpoints={{
							640: {
								slidesPerView: 2.5,
								spaceBetween: 20,
							},
							768: {
								slidesPerView: 2.5,
								spaceBetween: 40,
							},
							1150: {
								slidesPerView: 3.5,
								spaceBetween: 50,
							},
						}}
						spaceBetween={10}
						className="mySwiper"
						navigation={{
							nextEl: ".next",
							prevEl: ".prev",
							clickable: true,
						}}
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
								color={"white"}
								h={"100%"}
								w={"95%"}
								borderRadius={"30px"}
								backgroundImage={KonserMusik}
								backgroundSize={"110%"}
								backgroundPosition={"center"}
								backgroundRepeat={"no-repeat"}
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
								color={"white"}
								h={"100%"}
								w={"95%"}
								borderRadius={"30px"}
								backgroundImage={Olahraga}
								backgroundSize={"110%"}
								backgroundPosition={"center"}
								backgroundRepeat={"no-repeat"}
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
								color={"white"}
								h={"100%"}
								w={"95%"}
								borderRadius={"30px"}
								backgroundImage={Pendidikan}
								backgroundSize={"110%"}
								backgroundPosition={"center"}
								backgroundRepeat={"no-repeat"}
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
								color={"white"}
								h={"100%"}
								w={"95%"}
								borderRadius={"30px"}
								backgroundImage={KonserMusik}
								backgroundSize={"110%"}
								backgroundPosition={"center"}
								backgroundRepeat={"no-repeat"}
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
								color={"white"}
								h={"100%"}
								w={"95%"}
								borderRadius={"30px"}
								backgroundImage={Pendidikan}
								backgroundSize={"110%"}
								backgroundPosition={"center"}
								backgroundRepeat={"no-repeat"}
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
								color={"white"}
								h={"100%"}
								w={"95%"}
								borderRadius={"30px"}
								backgroundImage={Olahraga}
								backgroundSize={"110%"}
								backgroundPosition={"center"}
								backgroundRepeat={"no-repeat"}
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
								color={"white"}
								h={"100%"}
								w={"95%"}
								borderRadius={"30px"}
								backgroundImage={KonserMusik}
								backgroundSize={"110%"}
								backgroundPosition={"center"}
								backgroundRepeat={"no-repeat"}
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
								color={"white"}
								h={"100%"}
								w={"95%"}
								borderRadius={"30px"}
								backgroundImage={Olahraga}
								backgroundSize={"110%"}
								backgroundPosition={"center"}
								backgroundRepeat={"no-repeat"}
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
								color={"white"}
								h={"100%"}
								w={"95%"}
								borderRadius={"30px"}
								backgroundImage={Pendidikan}
								backgroundSize={"110%"}
								backgroundPosition={"center"}
								backgroundRepeat={"no-repeat"}
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
								color={"white"}
								h={"100%"}
								w={"95%"}
								borderRadius={"30px"}
								backgroundImage={Olahraga}
								backgroundSize={"110%"}
								backgroundPosition={"center"}
								backgroundRepeat={"no-repeat"}
							>
								OLAHRAGA
							</Box>
						</SwiperSlide>
					</Swiper>
				</Box>
				<Center>
					<Link
						fontSize={{base: "14px",lg: "20px"}}
						fontWeight={600}
						color={"home.primary"}
						textDecoration={"underline"}
					>
						See All Categories
					</Link>
				</Center>
			</Box>
		</Box>
	);
};
