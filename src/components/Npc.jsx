import { useEffect, useState } from "react";
import { calculateNpcMetrics } from "../utils/calculateNpcMetrics";

export default function Npc({
	name,
	sprite,
	xRatio,
	mapWidth,
	mcX,
	onInteract,
}) {
	const { npcX, distance } = calculateNpcMetrics(xRatio, mapWidth, mcX);
	const canInteract = distance < 100;
	const mcIsLeft = mcX > npcX;

	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === "e" || e.key === "E") {
				if (canInteract) onInteract(name, npcX, distance);
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [canInteract, distance, name, npcX, onInteract]);

	return (
		<div
			className="absolute bottom-5 transition-transform duration-100"
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
			{canInteract && (
				<div
					className="absolute -top-8 left-1/2 -translate-x-1/2 text-white text-sm bg-black/70 px-2 py-1 rounded"
					style={{
						transform: mcIsLeft ? "scaleX(1)" : "scaleX(-1)",
					}}>
					Press E to talk
				</div>
			)}
		</div>
	);
}
