import UseMainDisplayHooks from "../hooks/UseMainDisplayHooks";
import GameScene from "./GameScene";
import DialogueLayer from "./DialogueLayer";
import ItemPopupLayer from "./ItemPopupLayer";
import OverlayUi from "./OverlayUI";

export default function MainDisplay({
	handleClick,
	showButton,
	mcX,
	setMcX,
	sectionRef,
}) {
	const {
		cameraStyle,
		activeNpc,
		currentDialogue,
		isDialogueVisible,
		isDialogueCompleted,
		isDialogueActive,
		playerAction,
		itemPopup,
		setPlayerAction,
		handleNpcInteract,
		handleNextDialogue,
		closeItemPopup,
	} = UseMainDisplayHooks(mcX);

	return (
		<>
			<GameScene
				sectionRef={sectionRef}
				cameraStyle={cameraStyle}
				mcX={mcX}
				setMcX={setMcX}
				playerAction={playerAction}
				setPlayerAction={setPlayerAction}
				isDialogueActive={isDialogueActive}
				itemPopup={itemPopup}
				handleNpcInteract={handleNpcInteract}></GameScene>

			<DialogueLayer
				itemPopup={itemPopup}
				handleNextDialogue={handleNextDialogue}
				currentDialogue={currentDialogue}
				isDialogueCompleted={isDialogueCompleted}
				isDialogueVisible={isDialogueVisible}></DialogueLayer>

			<ItemPopupLayer
				itemPopup={itemPopup}
				closeItemPopup={closeItemPopup}
				activeNpc={activeNpc}></ItemPopupLayer>

			{showButton && (
				<OverlayUi
					handleClick={handleClick}
					mcX={mcX}
					showButton={showButton}></OverlayUi>
			)}
		</>
	);
}
