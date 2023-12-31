import {
	AspectRatio,
	Box,
	Container,
	forwardRef,
	Heading,
	Input,
	Stack,
	Text,
	Image,
  Button,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

const first = {
	rest: {
		rotate: "-15deg",
		scale: 0.95,
		x: "-50%",
		filter: "grayscale(80%)",
		transition: {
			duration: 0.5,
			type: "tween",
			ease: "easeIn",
		},
	},
	hover: {
		x: "-70%",
		scale: 1.1,
		rotate: "-20deg",
		filter: "grayscale(0%)",
		transition: {
			duration: 0.4,
			type: "tween",
			ease: "easeOut",
		},
	},
};

const second = {
	rest: {
		rotate: "15deg",
		scale: 0.95,
		x: "50%",
		filter: "grayscale(80%)",
		transition: {
			duration: 0.5,
			type: "tween",
			ease: "easeIn",
		},
	},
	hover: {
		x: "70%",
		scale: 1.1,
		rotate: "20deg",
		filter: "grayscale(0%)",
		transition: {
			duration: 0.4,
			type: "tween",
			ease: "easeOut",
		},
	},
};

const third = {
	rest: {
		scale: 1.1,
		filter: "grayscale(80%)",
		transition: {
			duration: 0.5,
			type: "tween",
			ease: "easeIn",
		},
	},
	hover: {
		scale: 1.3,
		filter: "grayscale(0%)",
		transition: {
			duration: 0.4,
			type: "tween",
			ease: "easeOut",
		},
	},
};

const PreviewImage = forwardRef((props, ref) => {
	return (
		<Box
			bg="white"
			top="0"
			height="100%"
			width="100%"
			position="absolute"
			borderWidth="1px"
			borderStyle="solid"
			rounded="sm"
			borderColor="gray.400"
			as={motion.div}
			backgroundSize="cover"
			backgroundRepeat="no-repeat"
			backgroundPosition="center"
			backgroundImage={`url("https://image.shutterstock.com/image-photo/paella-traditional-classic-spanish-seafood-600w-1662253543.jpg")`}
			{...props}
			ref={ref}
		/>
	);
});

export default function UploadImage() {
	const controls = useAnimation();
	const startAnimation = () => controls.start("hover");
	const stopAnimation = () => controls.stop();
	const [selectedImage, setSelectedImage] = useState(null);
	return (
		<Container mt='3rem' w='50'>
			<AspectRatio width="64" ratio={1}>
				<Box
					borderColor="gray.300"
					borderStyle="dashed"
					borderWidth="2px"
					rounded="md"
					shadow="sm"
					role="group"
					transition="all 150ms ease-in-out"
					_hover={{
						shadow: "md",
					}}
					as={motion.div}
					initial="rest"
					animate="rest"
					whileHover="hover"
				>
					<Box position="relative" height="100%" width="100%" display={"flex"} alignItems={"center"} justifyContent={"center"}>
						{selectedImage ? (
							<Box>
								<Image
									alt="not found"
									width={"250px"}
									src={URL.createObjectURL(selectedImage)}
								/>
							</Box>
						) : (
							<Box
								position="absolute"
								top="0"
								left="0"
								height="100%"
								width="100%"
								display="flex"
								flexDirection="column"
							>
								<Stack
									height="100%"
									width="100%"
									display="flex"
									alignItems="center"
									justify="center"
									spacing="4"
								>
									<Box height="16" width="12" position="relative">
										<PreviewImage
											variants={first}
											backgroundImage="url('https://image.shutterstock.com/image-photo/paella-traditional-classic-spanish-seafood-600w-1662253543.jpg')"
										/>
										<PreviewImage
											variants={second}
											backgroundImage="url('https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2628&q=80')"
										/>
										<PreviewImage
											variants={third}
											backgroundImage={`url("https://images.unsplash.com/photo-1563612116625-3012372fccce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2480&q=80")`}
										/>
									</Box>
									<Stack p="8" textAlign="center" spacing="1">
										<Heading
											fontSize="lg"
											color="gray.700"
											fontWeight="bold"
										>
											Drop images here
										</Heading>
										<Text fontWeight="light">or click to upload</Text>
									</Stack>
								</Stack>
							</Box>
						)}

						<Input
							type="file"
							height="100%"
							width="100%"
							position="absolute"
							top="0"
							left="0"
							opacity="0"
							aria-hidden="true"
							accept="image/*"
							onDragEnter={startAnimation}
							onDragLeave={stopAnimation}
              onChange={(event) => {
                console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0]);
              }}
						/>
					</Box>
				</Box>
			</AspectRatio>
            {selectedImage ? (
              <Button onClick={() => setSelectedImage(null)}>
                Remove
              </Button>
            ) : (
              <></>
            )}
		</Container>
	);
}
