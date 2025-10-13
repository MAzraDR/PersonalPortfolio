import { useState } from "react";
import useMapWidth from "./hooks/useMapWidth";
import MainMenu from "./components/MainMenu";
import MainDisplay from "./components/MainDisplay";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect } from "react";
gsap.registerPlugin(ScrollToPlugin);

export default function App() {
	const mapWidth = useMapWidth();
	const [mcX, setMcX] = useState(100);
	const sectionRef = useRef(null);

	const handleInteract = (npcName) => {
		alert(`You interacted with ${npcName}!`);
	};

	useEffect(() => {
		document.body.style.overflowY = "hidden";
		if ("scrollRestoration" in history) {
			history.scrollRestoration = "manual";
		}

		const resetScroll = setTimeout(() => {
			window.scrollTo(0, 0);
			document.body.style.overflow = "hidden";
		}, 100); // 100ms delay agar pasti setelah render

		return () => clearTimeout(resetScroll);
	}, []);

	const handleScrollToMain = () => {
		document.body.style.overflowY = "auto";

		gsap.to(window, {
			duration: 1.2,
			scrollTo: sectionRef.current,
			ease: "power2.inOut",
			onComplete: () => {
				document.body.style.overflow = "hidden";
			},
		});
	};

	return (
		<div className="flex flex-col">
			<section className="h-screen">
				<MainMenu handleScroll={handleScrollToMain} />
			</section>

			<section ref={sectionRef} className="h-screen">
				<MainDisplay
					sectionRef={sectionRef}
					mapWidth={mapWidth}
					mcX={mcX}
					setMcX={setMcX}
					handleInteract={handleInteract}
				/>
			</section>
		</div>
	);
}
