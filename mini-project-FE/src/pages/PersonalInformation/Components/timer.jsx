import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";

export const Timers = () => {
	const [timer, setTimer] = useState(900);
	const [isRunning, setIsRunning] = useState(true);

	useEffect(() => {
		// setIsRunning(true);
		let intervalsw;

		if (isRunning) {
			if (timer >= 0) {
				intervalsw = setInterval(() => {
					setTimer((prevTime) => prevTime - 1);
				}, 1000);
			} else {
				clearInterval(intervalsw);
        setIsRunning(false)
			}
		}

		return () => {
			clearInterval(intervalsw);
		};
	}, [isRunning]);


	const formatTime = (time) => {
		// menghitung menit dan detik dari total detik
		const minutes = Math.floor(time / 60);
		const remainingSeconds = time % 60;

		// menggunakan pedStart(), agar menit dan detik memiliki 2 digit "00"
		const formatMinutes = String(minutes).padStart(2, "0");
		const formatSeconds = String(remainingSeconds).padStart(2, "0");

		return `${formatMinutes}:${formatSeconds}`;
	};

	return (
		<Box>
			<Text>{formatTime(timer)}</Text>
		</Box>
	);
};
