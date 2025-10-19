import { useState, useRef, useEffect } from "react";
import useCharacterControls from "../hooks/useCharacterControls";
import useCameraFollow from "../hooks/useCameraFollow";
import mainCharIdleGif from "../assets/characters/hat-man-idle.gif";
import mainCharWalkGif from "../assets/characters/hat-man-walk.gif";
import { useSwipeable } from "react-swipeable";

const MainCharacter = ({
	x,
	setX,
	mapWidth,
	action,
	setAction,
	isDialogueActive,
}) => {
	const [direction, setDirection] = useState("right");
	const cameraX = useRef(0);

	const { moveLeft, moveRight, stop } = useCharacterControls({
		setX,
		setDirection,
		setAction,
		mapWidth,
		isDialogueActive,
	});

	useCameraFollow({ x, cameraX });

	const swipeIntervalRef = useRef(null);
	const swipeDirRef = useRef(null);

	const startSwipeLoop = (dir) => {
		if (swipeIntervalRef.current && swipeDirRef.current === dir) return;

		if (swipeIntervalRef.current) {
			clearInterval(swipeIntervalRef.current);
			swipeIntervalRef.current = null;
		}

		swipeIntervalRef.current = dir;

		swipeIntervalRef.current = setInterval(() => {
			if (dir === "Left") moveLeft();
			if (dir === "Right") moveRight();
		}, 30);
	};

	const stopSwipeLoop = () => {
		if (swipeIntervalRef.current) {
			clearInterval(swipeIntervalRef.current);
			swipeIntervalRef.current = null;
			swipeDirRef.current = null;
		}
		stop();
	};

	useEffect(() => {
		return () => {
			if (swipeIntervalRef.current)
				clearInterval(swipeIntervalRef.current);
		};
	}, []);

	const handlers = useSwipeable({
		onSwiping: (eventData) => {
			if (eventData.dir === "Left") {
				startSwipeLoop("Left");
			} else if (eventData.dir === "Right") {
				startSwipeLoop("Right");
			} else {
				stopSwipeLoop();
			}
		},
		onSwiped: () => {
			stopSwipeLoop();
		},
		onTap: () => {
			stopSwipeLoop();
		},
		preventScrollOnSwipe: true,
		trackTouch: true,
		trackMouse: false,
	});

	return (
		<div
			{...handlers}
			className="absolute bottom-5 transition-transform duration-100"
			style={{
				left: `${x}px`,
				transform: direction === "left" ? "scaleX(-1)" : "scaleX(1)",
			}}>
			<img
				src={action === "walk" ? mainCharWalkGif : mainCharIdleGif}
				alt="main character"
				className="w-32 h-32 object-contain"
			/>
		</div>
	);
};

export default MainCharacter;
