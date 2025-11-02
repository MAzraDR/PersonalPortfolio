import { useEffect } from "react";
import { useState } from "react";

export default function useNpcDialogue({
	activeNpc,
	mcX,
	npcDialogues,
	setItemPopup,
	itemDescriptions,
	setActiveNpc,
	setPlayerAction,
	closeItemPopup,
	setIsDialogueVisible,
}) {
	const [currentLine, setCurrentLine] = useState(0);
	const [currentDialogue, setCurrentDialogue] = useState(null);
	const [isDialogueCompleted, setIsDialogueCompleted] = useState(false);
	const [isDialogueActive, setIsDialogueActive] = useState(false);

	// Dialogue Flow
	useEffect(() => {
		const lines = npcDialogues[activeNpc]?.dialogue;

		if (!lines) return;

		if (currentLine < lines.length) {
			setCurrentDialogue(lines[currentLine]);
		} else {
			setIsDialogueCompleted(true);
			setIsDialogueVisible(false);
		}
	}, [activeNpc, currentLine, mcX, npcDialogues, setIsDialogueVisible]);

	const handleNextDialogue = () => {
		if (!activeNpc || isDialogueCompleted) return;

		const lines = npcDialogues[activeNpc]?.dialogue ?? [];
		const nextIndex = currentLine + 1;

		// Check if there is another line
		if (nextIndex < lines.length) {
			const nextLine = lines[nextIndex-1];

			// If the next line gives an item, show the popup
			if (nextLine?.givesItem) {
				setItemPopup({
					isOpen: true,
					content: itemDescriptions[activeNpc],
				});
				setIsDialogueVisible(false);
			}
			setIsDialogueVisible(true);
			setCurrentLine(nextIndex);
		} else {
			// Dialogue completed
			setIsDialogueCompleted(true);
			setIsDialogueVisible(false);
			setActiveNpc(null);
			setPlayerAction("idle");
			setIsDialogueActive(false);
		}
	};

	return {
		currentDialogue,
		isDialogueCompleted,
		isDialogueActive,
		handleNextDialogue,
		setIsDialogueActive,
		setCurrentLine,
		setIsDialogueCompleted,
	};
}
