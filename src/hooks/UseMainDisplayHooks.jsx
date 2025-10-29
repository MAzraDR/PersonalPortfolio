import { itemDescriptions, npcData, npcDialogues } from "../data/TextData";
import { useState, useEffect } from "react";
import { calculateNpcMetrics } from "../utils/calculateNpcMetrics";
import useCameraFollow from "../hooks/UseCameraFollow";
import { UseMapWidth } from "./UseMapWidth";

export default function UseMainDisplayHooks(mcX) {
	const [activeNpc, setActiveNpc] = useState(null);
	const [currentLine, setCurrentLine] = useState(0);
	const [currentDialogue, setCurrentDialogue] = useState(null);
	const [isDialogueCompleted, setIsDialogueCompleted] = useState(false);
	const [isDialogueVisible, setIsDialogueVisible] = useState(false);
	const [isDialogueActive, setIsDialogueActive] = useState(false);
	const [playerAction, setPlayerAction] = useState("idle");
	const [itemPopup, setItemPopup] = useState({
		isOpen: false,
		content: null,
	});

	// Camera / Map
	const mapWidth = UseMapWidth();
	const cameraStyle = useCameraFollow({ mcX });

	// NPC Interaction
	const handleNpcInteract = (npcName) => {
		setActiveNpc(npcName);
		setCurrentLine(0);
		setIsDialogueCompleted(false);
		setIsDialogueVisible(true);
		setIsDialogueActive(true);
	};

	// Dialogue Flow
	useEffect(() => {
		if (!activeNpc) return;

		const npc = npcData.find((npc) => npc.name === activeNpc);
		if (!npc) return;

		const { distance } = calculateNpcMetrics(npc.xRatio, mapWidth, mcX);

		if (distance > 100) {
			setActiveNpc(null);
			setIsDialogueVisible(false);
			return;
		}

		const lines = npcDialogues[activeNpc]?.dialogue;

		if (!lines) return;

		if (currentLine < lines.length) {
			setCurrentDialogue(lines[currentLine]);
		} else {
			setIsDialogueCompleted(true);
			setIsDialogueVisible(false);
		}
	}, [activeNpc, currentLine, mapWidth, mcX]);

	// MC behaviour
	useEffect(() => {
		setPlayerAction(isDialogueVisible ? "idle" : "walk");
	}, [isDialogueVisible]);

	// When item popup is open, pause dialogue
	useEffect(() => {
		setIsDialogueVisible(!itemPopup.isOpen);
	}, [itemPopup.isOpen]);

    // Handle next dialogue flow
	const handleNextDialogue = () => {
		if (!activeNpc || isDialogueCompleted) return;
		const totalLines = npcDialogues[activeNpc]?.dialogue?.length ?? 0;
		if (currentLine < totalLines - 1) {
			setCurrentLine((prev) => prev + 1);

			const nextLine = npcDialogues[activeNpc].dialogue[currentLine];
			if (nextLine?.givesItem) {
				setItemPopup({
					isOpen: true,
					content: itemDescriptions[activeNpc],
				});

				if (itemPopup.isOpen === true) {
					setIsDialogueVisible(false);
				} else {
					setIsDialogueVisible(true);
				}
			}
		} else {
			setIsDialogueCompleted(true);
			setActiveNpc(null);
			setPlayerAction("idle");
			setIsDialogueActive(false);
		}
	};

	const closeItemPopup = () => {
		setItemPopup({ isOpen: false, content: null });
	};

	return {
		// Map and camera		
		cameraStyle,

		// NPC and dialogue states
		activeNpc,
		currentDialogue,
		isDialogueVisible,
		isDialogueCompleted,
		isDialogueActive,

		// Player state
		playerAction,
        setPlayerAction,

		// Item popup
		itemPopup,

		// Handlers
		handleNpcInteract,
		handleNextDialogue,
		closeItemPopup,
	};
}
