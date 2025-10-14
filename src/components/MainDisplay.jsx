import Npc from "./Npc";
import { npcData } from "../data/TextData";
import MainCharacter from "./MainCharacter";
import Button from "./Button";
import homeIcon from "../assets/HomeIcon.png";
import DialogueBox from "./DialogueBox";
import { npcDialogues } from "../data/TextData";
// import { motion } from "motion/react";

export default function MainDisplay({
	mapWidth,
	handleInteract,
	sectionRef,
	handleClick,
	showButton,
	mcX,
	setMcX,
	isVisible
}) {
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
			<MainCharacter x={mcX} setX={setMcX} mapWidth={mapWidth} />

			<DialogueBox
				text={npcDialogues.Hector.dialogue[0].text} isVisible={isVisible}></DialogueBox>

			{npcData.map((npc) => (
				<Npc
					key={npc.id}
					name={npc.name}
					sprite={npc.sprite}
					xRatio={npc.xRatio}
					mapWidth={mapWidth}
					mcX={mcX}
					onInteract={handleInteract}
				/>
			))}
		</div>
	);
}
