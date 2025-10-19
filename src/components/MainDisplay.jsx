import Npc from "./Npc";
import { npcData, npcDialogues } from "../data/TextData";
import MainCharacter from "./MainCharacter";
import Button from "./Button";
import homeIcon from "../assets/HomeIcon.png";
import DialogueBox from "./DialogueBox";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { calculateNpcMetrics } from "../utils/calculateNpcMetrics";

export default function MainDisplay({
	mapWidth,
	handleClick,
	showButton,
	mcX,
	setMcX,
	sectionRef,
}) {
	const [activeNpc, setActiveNpc] = useState(null);
	const [currentLine, setCurrentLine] = useState(0);
	const [currentDialogue, setCurrentDialogue] = useState(null);
	const [isCompleted, setIsCompleted] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [action, setAction] = useState("idle");
	const [isDialogueActive, setIsDialogueActive] = useState(false);


	const handleNpcInteract = (npcName) => {
		setActiveNpc(npcName);
		setCurrentLine(0);
		setIsCompleted(false);
		setIsVisible(true);
		setIsDialogueActive(true);
	};

	useEffect(() => {		
		if (!activeNpc) return;

		const npc = npcData.find((npc) => npc.name === activeNpc);
		if (!npc) return;

		const { distance } = calculateNpcMetrics(npc.xRatio, mapWidth, mcX);

		if (distance > 100) {
			setActiveNpc(null);
			setIsVisible(false);			
			return;
		}

		const lines = npcDialogues[activeNpc]?.dialogue;

		if (!lines) return;

		if (currentLine < lines.length) {
			setCurrentDialogue(lines[currentLine]);
		} else {
			setIsCompleted(true);
			setIsVisible(false);			
		}
	}, [activeNpc, currentLine, mapWidth, mcX]);

	const handleNext = () => {
		if (!activeNpc || isCompleted) return;
		const totalLines = npcDialogues[activeNpc]?.dialogue?.length ?? 0;
		if (currentLine < totalLines - 1) {
			setCurrentLine((prev) => prev + 1);
		} else {
			setIsCompleted(true);
			setActiveNpc(null);
			setAction("idle");
			setIsDialogueActive(false);
		}
	};

	useEffect(() => {
		if (isVisible) {
			setAction("idle");
		} else {
			setAction("walk");
		}
	}, [isVisible]);

	return (
		<div
			ref={sectionRef}
			className="relative h-screen bg-result bg-no-repeat bg-bottom bg-contain"
			style={{ width: `${mapWidth}px` }}>
			{showButton && (
				<Button
					onClick={handleClick}
					src={homeIcon}
					x={mcX}
					showButton={showButton}
				/>
			)}

			<MainCharacter
				x={mcX}
				setX={setMcX}
				mapWidth={mapWidth}
				action={action}
				setAction={setAction}
				isDialogueActive={isDialogueActive}
			/>

			{npcData.map((npc) => (
				<Npc
					key={npc.id}
					name={npc.name}
					sprite={npc.sprite}
					xRatio={npc.xRatio}
					mapWidth={mapWidth}
					mcX={mcX}
					onInteract={() => handleNpcInteract(npc.name)}
				/>
			))}

			<div
				onClick={handleNext}
				className="w-screen flex justify-center px-4 fixed top-10">
				<AnimatePresence mode="wait">
					{currentDialogue && !isCompleted && isVisible && (
						<motion.div
							key={currentLine}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.5 }}
							className="bg-black/70 text-white text-lg px-6 py-5 rounded-2xl shadow-lg max-w-[70vw] lg:max-w-[50vw] w-fit text-center">
							<DialogueBox
								text={currentDialogue.text}
								speaker={currentDialogue.speaker}
								isVisible={isVisible}
							/>

							<p className="text-sm opacity-50 mt-4 text-right">
								Click to Continue
							</p>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
}
