import { useState } from "react";
import MainCharacter from "./components/MainCharacter";
import Npc from "./components/Npc";
import { npcData } from "./data/npcData";
import useMapWidth from "./hooks/useMapWidth";
import MainMenu from "./components/MainMenu";

export default function App() {
	const mapWidth = useMapWidth();
	const [mcX, setMcX] = useState(100);

	// Fungsi jika MC berinteraksi dengan NPC
	const handleInteract = (npcName) => {
		alert(`You interacted with ${npcName}!`);
	};

	return (
		<div>
			<MainMenu></MainMenu>
			<div
				className="relative h-screen bg-result bg-no-repeat bg-bottom bg-contain overflow-x-hidden overflow-y-hidden"
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
		</div>
	);
}
