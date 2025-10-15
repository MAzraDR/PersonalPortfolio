import { useState, useRef } from "react";
import useCharacterControls from "../hooks/useCharacterControls";
import useCameraFollow from "../hooks/useCameraFollow";
import mainCharIdleGif from "../assets/characters/hat-man-idle.gif";
import mainCharWalkGif from "../assets/characters/hat-man-walk.gif";

const MainCharacter = ({ x, setX, mapWidth, action, setAction }) => {
	const [direction, setDirection] = useState("right");
	const cameraX = useRef(0);

	useCharacterControls({ x, setX, setDirection, setAction, mapWidth });

	useCameraFollow({ x, cameraX });

	return (
		<div
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
