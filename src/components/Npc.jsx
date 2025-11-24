import { useEffect, useState } from "react";
import { calculateNpcMetrics } from "../utils/calculateNpcMetrics";
import useDeviceDetection from "../hooks/UseDeviceDetection";
import { UseMapWidth } from "../hooks/UseMapWidth";

export default function Npc({
	name,
	sprite,
	xRatio,
	mcX,
	isDialogueActive,
	onInteract,
}) {
	const mapWidth = UseMapWidth();
	const { npcX, distance } = calculateNpcMetrics(xRatio, mapWidth, mcX);

	const canInteract = distance < 100;
	const mcIsLeft = mcX > npcX;

	const isMobile = useDeviceDetection();

	const handleTouchStart = (e) => {
		if (!canInteract || isDialogueActive) return;
		if (isMobile === true) {
			onInteract(name, npcX, distance);
		}
	};

	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === "e" || e.key === "E") {
				if (isMobile === false) {
					if (canInteract) onInteract(name, npcX, distance);
				}
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [
		canInteract,
		distance,
		isDialogueActive,
		isMobile,
		name,
		npcX,
		onInteract,
	]);

	return (
		<div
			className="absolute bottom-5 transition-transform duration-100 brightness-75"
			onTouchStart={isMobile ? (e) => handleTouchStart(e) : undefined}
			style={{
				left: `${npcX}px`,
				transform: mcIsLeft ? "scaleX(1)" : "scaleX(-1)",
			}}>
			<img
				src={sprite}
				alt={name}
				className={`w-32 h-32 object-contain ${
					canInteract ? "brightness-110" : ""
				}`}
			/>
			{canInteract &&
				(isMobile ? (
					<div
						className="absolute -top-15 left-1/2 -translate-x-1/2 text-white text-sm bg-black/70 px-2 py-1 rounded"
						style={{
							transform: mcIsLeft ? "scaleX(1)" : "scaleX(-1)",
						}}>
						Click NPC to talk
					</div>
				) : (
					<div
						className="absolute -top-10 left-1/2 -translate-x-1/2 text-white text-sm bg-black/70 px-2 py-1 rounded"
						style={{
							transform: mcIsLeft ? "scaleX(1)" : "scaleX(-1)",
						}}>
						Press E to talk
					</div>
				))}
		</div>
	);
}
