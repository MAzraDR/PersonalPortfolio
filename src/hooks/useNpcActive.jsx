import { useState } from "react";
import { calculateNpcMetrics } from "../utils/calculateNpcMetrics";
import { UseMapWidth } from "./UseMapWidth";
import { useEffect } from "react";
import { npcData } from "../data/TextData";

export default function useNpcActive({ mcX, setIsDialogueVisible = {} }) {
	const [activeNpc, setActiveNpc] = useState(null);
	const mapWidth = UseMapWidth();		

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
	}, [activeNpc, mapWidth, mcX, setIsDialogueVisible]);

	return { activeNpc, setActiveNpc };
}
