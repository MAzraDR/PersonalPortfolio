import idleGif from "../assets/characters/bearded-idle.gif";
import walkGif from "../assets/characters/bearded-walk.gif";
import { useState, useEffect, useRef } from "react";
import useMapWidth from "../hooks/useMapWidth";
import useCharacterControls from "../hooks/useCharacterControls";
import useCameraFollow from "../hooks/useCameraFollow";

const Character = () => {
	const mapWidth = useMapWidth();
	const [x, setX] = useState(100);
	const [direction, setDirection] = useState("right");
	const [action, setAction] = useState("idle");
	const cameraX = useRef(0);

	// 🕹️ Keyboard movement logic
	useCharacterControls({ x, setX, setDirection, setAction, mapWidth });

	// 🎥 Smooth camera follow
	useCameraFollow({ x, cameraX });

	return (
		<div
			className="absolute bottom-5 transition-transform duration-100"
			style={{
				left: `${x}px`,
				transform: direction === "left" ? "scaleX(-1)" : "scaleX(1)",
			}}>
			<img
				src={action === "walk" ? walkGif : idleGif}
				alt="character"
				className="w-32 h-32 object-contain"
			/>
		</div>
	);
};

export default Character;
