import { useState } from "react";
import useMapWidth from "./hooks/useMapWidth";
import MainMenu from "./components/MainMenu";
import MainDisplay from "./components/MainDisplay";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect } from "react";
import { npcDialogues } from "./data/TextData";

gsap.registerPlugin(ScrollToPlugin);

export default function App() {
	const mapWidth = useMapWidth();
	const sectionRef = useRef(null);
	const [inMainMenu, setInMainMenu] = useState(true);
	const [mcX, setMcX] = useState(100);
	const [isVisible, setIsVisible] = useState(false)
	const mcXRef = useRef(mcX);

	useEffect(() => {
		mcXRef.current = mcX;
	}, [mcX]);

	useEffect(() => {
		document.body.style.overflowY = "hidden";
		if ("scrollRestoration" in history) {
			history.scrollRestoration = "manual";
		}

		window.scrollTo(0, 0);
		document.body.style.overflow = "hidden";
	}, []);

	const handleScrollToMain = (id) => {
		if (id === "main") {
			document.body.style.overflowY = "auto";
			setInMainMenu(false);
			gsap.to(window, {
				duration: 1.2,
				scrollTo: sectionRef.current,
				ease: "power2.inOut",
				onComplete: () => {
					document.body.style.overflow = "hidden";
				},
			});
		}
	};

	const handleClick = () => {
		document.body.style.overflow = "auto";
		setIsVisible(false)
		gsap.to(".main-display", {
			duration: 0.8,
			opacity: 0,
			ease: "power2.inOut",
			onComplete: () => {
				const temp = { value: mcX };
				gsap.to(temp, {
					duration: 1,
					value: 100,
					ease: "power2.inOut",
					onUpdate: () => {
						setMcX(temp.value);
					},
				});
			},
		});

		gsap.to(window, {
			duration: 1,
			scrollTo: { y: 0, autoKill: true },
			ease: "power2.inOut",
			onComplete: () => {
				document.body.style.overflow = "hidden";
				setInMainMenu(true);
				gsap.set(".main-display", { opacity: 1 });
			},
		});
	};

	const handleInteract = (npcName) => {
		const npc = npcDialogues[npcName];
		if (npc) {
			npc.dialogue.map((item) => {
				setIsVisible(true)
			});
		}
	};

	return (
		<div className="flex flex-col">
			<section className="h-screen">
				<MainMenu handleScroll={handleScrollToMain} />
			</section>

			<section
				ref={sectionRef}
				className="h-screen main-display transition-opacity duration-700">
				<MainDisplay
					sectionRef={sectionRef}
					mapWidth={mapWidth}
					handleInteract={handleInteract}
					handleClick={handleClick}
					showButton={!inMainMenu}
					mcX={mcX}
					setMcX={setMcX}
					isVisible={isVisible}
				/>
			</section>
		</div>
	);
}
