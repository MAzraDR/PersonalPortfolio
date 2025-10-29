import mainBg from "../assets/mainBg.png";
import { npcData } from "../data/TextData";
import Npc from "./Npc";
import MainCharacter from "./MainCharacter";
import { UseMapWidth } from "../hooks/UseMapWidth";

export default function GameScene({
	sectionRef,
	cameraStyle,
	mcX,
	setMcX,
	playerAction,
	setPlayerAction,
	isDialogueActive,
	itemPopup,
	handleNpcInteract,
}) {
	const mapWidth = UseMapWidth();
	return (
		<div
			ref={sectionRef}
			className={`relative h-dvh bg-no-repeat bg-top bg-cover transition-all duration-300 ${
				itemPopup.isOpen ? "brightness-90 pointer-events-none" : ""
			}`}
			style={{
				backgroundImage: `url(${mainBg})`,
				width: `${mapWidth}px`,
				...cameraStyle,
			}}>
			<MainCharacter
				x={mcX}
				setX={setMcX}
				action={playerAction}
				setAction={setPlayerAction}
				isDialogueActive={isDialogueActive}
			/>

			{npcData.map((npc) => (
				<Npc
					key={npc.id}
					name={npc.name}
					sprite={npc.sprite}
					xRatio={npc.xRatio}
					mcX={mcX}
					isDialogueActive={isDialogueActive}
					onInteract={() => handleNpcInteract(npc.name)}
				/>
			))}
		</div>
	);
}
