import { useEffect } from "react";

export default function useCameraFollow({ x, cameraX }) {
	useEffect(() => {
		let animationFrame;

		const updateCamera = () => {
			const targetCamera = x - window.innerWidth / 2;
			cameraX.current += (targetCamera - cameraX.current) * 0.08;
			window.scrollTo({ left: cameraX.current });
			animationFrame = requestAnimationFrame(updateCamera);
		};

		updateCamera();
		return () => cancelAnimationFrame(animationFrame);
	}, [cameraX, x]);
}
