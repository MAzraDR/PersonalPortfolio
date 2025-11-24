import { itemDescriptions, npcDialogues } from "../utils/TextData";
import { useState } from "react";
import useCameraFollow from "../hooks/UseCameraFollow";
import useNpcDialogue from "./useNpcDialogue";
import useMcBehaviour from "./useMcBehaviour";
import { useItemPopupContext } from "../context/ItemPopupContext";
import { useNpc } from "../context/NpcContext";

export default function UseMainDisplayHooks(mcX) {
	const [isDialogueVisible, setIsDialogueVisible] = useState(false);

	const { activeNpc, setActiveNpc } = useNpc();

	const { itemPopup, setItemPopup, closeItemPopup } = useItemPopupContext();

	const { playerAction, setPlayerAction } = useMcBehaviour({
		setIsDialogueVisible,
	});

	const {
		currentDialogue,
		isDialogueCompleted,
		isDialogueActive,
		handleNextDialogue,
		setIsDialogueActive,
		setCurrentLine,
		setIsDialogueCompleted,
	} = useNpcDialogue({
		activeNpc,
		mcX,
		npcDialogues,
		setItemPopup,
		itemDescriptions,
		setActiveNpc,
		setPlayerAction,
		closeItemPopup,
		setIsDialogueVisible,
	});

	// Camera / Map
	const cameraStyle = useCameraFollow({ mcX });

	// NPC Interaction
	const handleNpcInteract = (npcName) => {
		setActiveNpc(npcName);
		setCurrentLine(0);
		setIsDialogueCompleted(false);
		setIsDialogueVisible(true);
		setIsDialogueActive(true);
	};

	return {
		// Map and camera
		cameraStyle,

		// NPC and dialogue states
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
	};
}
