import { useEffect, useCallback, useState, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import { UseMapWidth } from "./UseMapWidth";

export default function useCharacterControls({
	setX,
	setAction,
	isDialogueActive,
}) {
	const mapWidth = UseMapWidth();
	const swipeStep = 4;
	const keyboardStep = 6;
	const maxRight = mapWidth - 128;
	const [direction, setDirection] = useState("right");
	const swipeDirRef = useRef(null);
	const animationRef = useRef(null);

	const moveLeft = useCallback(
		(type = "keyboard") => {
			if (isDialogueActive) return;
			const step = type === "swipe" ? swipeStep : keyboardStep;
			setX((prev) => Math.max(0, Math.min(prev - step, maxRight)));
			setDirection("left");
			setAction("walk");
		},
		[isDialogueActive, setX, setDirection, setAction, maxRight]
	);

	const moveRight = useCallback(
		(type = "keyboard") => {
			if (isDialogueActive) return;
			const step = type === "swipe" ? swipeStep : keyboardStep;
			setX((prev) => Math.max(0, Math.min(prev + step, maxRight)));
			setDirection("right");
			setAction("walk");
		},
		[isDialogueActive, setX, setDirection, setAction, maxRight]
	);

	const stop = useCallback(() => {
		if (isDialogueActive) return;
		setAction("idle");
	}, [setAction, isDialogueActive]);

	const moveLoop = () => {
		if (swipeDirRef.current === "Left") moveLeft("swipe");
		if (swipeDirRef.current === "Right") moveRight("swipe");
		animationRef.current = requestAnimationFrame(moveLoop);
	};

	const startSwipeLoop = (dir) => {
		if (swipeDirRef.current === dir) return;
		stopSwipeLoop();

		swipeDirRef.current = dir;
		animationRef.current = requestAnimationFrame(moveLoop);
	};

	const stopSwipeLoop = () => {
		if (animationRef.current) {
			cancelAnimationFrame(animationRef.current);
			animationRef.current = null;
		}
		swipeDirRef.current = null;
		stop();
	};

	useEffect(() => {
		setAction("idle")		
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

	const handlers = useSwipeable({
		onSwiping: (eventData) => {
			if (eventData.dir === "Left") startSwipeLoop("Left");
			else if (eventData.dir === "Right") startSwipeLoop("Right");
			else stopSwipeLoop();
		},
		delta: 50,
		onSwiped: stopSwipeLoop,
		onTap: stopSwipeLoop,
		preventScrollOnSwipe: true,
		trackTouch: true,
		trackMouse: false,
	});

	return { direction, handlers };
}
