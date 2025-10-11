import { useState } from "react";
import useMapWidth from "./hooks/useMapWidth";
import MainMenu from "./components/MainMenu";
import MainDisplay from "./components/MainDisplay";
import { useRef } from "react";

export default function App() {
	const mapWidth = useMapWidth();
	const [mcX, setMcX] = useState(100);
	const sectionRef = useRef(null);

	// Fungsi jika MC berinteraksi dengan NPC
	const handleInteract = (npcName) => {
		alert(`You interacted with ${npcName}!`);
	};

	const handleScrollToMain = () => {
		if (sectionRef.current) {
			const top = sectionRef.current.offsetTop;
			window.scrollTo({ top, behavior: "smooth" });
		}
	};

	return (
		<div>
			<MainMenu handleScroll={handleScrollToMain}></MainMenu>
			<MainDisplay
				sectionRef={sectionRef}
				mapWidth={mapWidth}
				mcX={mcX}
				setMcX={setMcX}
				handleInteract={handleInteract}></MainDisplay>
		</div>
	);
}
