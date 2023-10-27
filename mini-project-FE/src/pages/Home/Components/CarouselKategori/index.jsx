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
				w="75%"
			>
				<Text
					fontSize={"32px"}
					fontWeight={600}
					m={"54px 0px 46px 0px"}
				>
					Featured Categories
				</Text>
				<Box
					mb={"20px"}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
					h={{ sm: "90px", md: "150px" }}
				>
					<Button
						className="prev"
						position={"absolute"}
						zIndex={10}
						left={"210px"}
						size={"xm"}
						borderRadius={"50%"}
						fontSize={"28px"}
						bgColor={"white"}
						_focus={{ outline: "none" }}
						_hover={{ border: "none" }}
					>
						<ChevronLeftIcon />
					</Button>
					<Button
						className="next"
						position={"absolute"}
						zIndex={10}
						right={"185px"}
						size={"xm"}
						borderRadius={"50%"}
						fontSize={"28px"}
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
						slidesPerView={3.5}
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
						fontSize={"20px"}
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
