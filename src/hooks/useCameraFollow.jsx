import { useState } from "react";
import { useEffect } from "react";

export default function useCameraFollow({ x, mapWidth }) {
	const [cameraOffSet, setCameraOffset] = useState(0);

	useEffect(() => {
		let anim;
		const screenWidth = window.innerWidth;
		const target = -(x - screenWidth / 2 + 100);

		const maxOffset = 0;
		const minOffset = -(mapWidth - screenWidth);
		const clampedTarget = Math.min(maxOffset, Math.max(target, minOffset));

		const smoothFollow = () => {
			setCameraOffset((prev) => prev + (clampedTarget - prev) * 0.1);
			anim = requestAnimationFrame(smoothFollow);
		};
		anim = requestAnimationFrame(smoothFollow);
		return () => cancelAnimationFrame(anim);
	}, [x, mapWidth]);
	return {
		transform: `translateX(${cameraOffSet}px)`,
		transition: "transform 0.1s linear",
		willChange: "transform",
	};
}
