import { useEffect, useCallback } from "react";

export default function useCharacterControls({
	setX,
	setDirection,
	setAction,
	mapWidth,
	isDialogueActive,
}) {
	const step = 7;
	const maxRight = mapWidth - 128;

	const moveLeft = useCallback(() => {
		if (isDialogueActive) return;
		setX((prev) => Math.max(0, Math.min(prev - step, maxRight)));
		setDirection("left");
		setAction("walk");
	}, [isDialogueActive, setX, setDirection, setAction, maxRight]);

	const moveRight = useCallback(() => {
		if (isDialogueActive) return;
		setX((prev) => Math.max(0, Math.min(prev + step, maxRight)));
		setDirection("right");
		setAction("walk");
	}, [isDialogueActive, setX, setDirection, setAction, maxRight]);

	const stop = useCallback(() => {
		if (isDialogueActive) return;
		setAction("idle");
	}, [setAction, isDialogueActive]);

	useEffect(() => {
		const handleKeyDown = (e) => {
			if (isDialogueActive) return;

			switch (e.key.toLowerCase()) {
				case "a":
					moveLeft();
					break;
				case "d":
					moveRight();
					break;
				default:
					return;
			}
		};

		const handleKeyUp = (e) => {
			if (["a", "d"].includes(e.key.toLowerCase())) stop();
		};

		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, [moveLeft, moveRight, stop, isDialogueActive]);
	return { moveLeft, moveRight, stop };
}
