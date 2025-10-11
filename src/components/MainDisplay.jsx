import Npc from "./Npc";
import { npcData } from "../data/npcData";
import MainCharacter from "./MainCharacter";

export default function MainDisplay({ mapWidth, mcX, setMcX, handleInteract, sectionRef }) {
	return (
		<div
			id=""
			ref={sectionRef}
			className="relative h-screen bg-result bg-no-repeat bg-bottom bg-contain"
			style={{ width: `${mapWidth}px` }}>
			<MainCharacter x={mcX} setX={setMcX} mapWidth={mapWidth} />
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
