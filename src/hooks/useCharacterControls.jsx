import { useEffect } from "react";

export default function useCharacterControls({
	x,
	setX,
	setDirection,
	setAction,
	mapWidth,
}) {
	useEffect(() => {
		const handleKeyDown = (e) => {
			const step = 7;
			let newX = x;

			switch (e.key.toLowerCase()) {
				case "a":
					newX = x - step;
					setDirection("left");
					setAction("walk");
					break;
				case "d":
					newX = x + step;
					setDirection("right");
					setAction("walk");
					break;
				default:
					return;
			}

			// batas kanan sesuai mapWidth
			const maxRight = mapWidth - 128;
			newX = Math.max(0, Math.min(newX, maxRight));
			setX(newX);
		};

		const handleKeyUp = (e) => {
			if (["a", "d"].includes(e.key.toLowerCase())) setAction("idle");
		};

		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, [x, mapWidth, setX, setDirection, setAction]);
}
