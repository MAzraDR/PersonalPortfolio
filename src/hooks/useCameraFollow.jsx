import { useState } from "react";
import { useEffect } from "react";
import { UseMapWidth } from "./UseMapWidth";

export default function useCameraFollow({ mcX }) {
	const [cameraOffSet, setCameraOffset] = useState(0);
	const mapWidth = UseMapWidth();

	useEffect(() => {
		let anim;
		const screenWidth = window.innerWidth;
		const target = -(mcX - screenWidth / 2 + 100);

		const maxOffset = 0;
		const minOffset = -(mapWidth - screenWidth);
		const clampedTarget = Math.min(maxOffset, Math.max(target, minOffset));

		const smoothFollow = () => {
			setCameraOffset((prev) => prev + (clampedTarget - prev) * 0.1);
			anim = requestAnimationFrame(smoothFollow);
		};
		anim = requestAnimationFrame(smoothFollow);
		return () => cancelAnimationFrame(anim);
	}, [mcX, mapWidth]);
	return {
		transform: `translateX(${cameraOffSet}px)`,
		transition: "transform 0.1s linear",
		willChange: "transform",
	};
}
