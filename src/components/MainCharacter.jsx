import { useState, useRef, useMemo } from "react";
import { throttle } from "lodash";
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

	const throttledMoveLeft = useMemo(
		() =>
			throttle(() => moveLeft(), 80, { leading: true, trailing: false }),
		[moveLeft]
	);

	const throttledMoveRight = useMemo(
		() =>
			throttle(() => moveRight(), 80, { leading: true, trailing: false }),
		[moveRight]
	);

	const handlers = useSwipeable({
		onSwiping: (eventData) => {
			if (eventData.dir === "Left") throttledMoveLeft();
			else if (eventData.dir === "Right") throttledMoveRight();
		},
		onSwiped: () => stop(),
		preventScrollOnSwipe: true,
		trackTouch: true,
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
