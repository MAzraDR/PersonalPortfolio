import { useState, useRef } from "react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { gsap } from "gsap";
import { useEffect } from "react";

gsap.registerPlugin(ScrollToPlugin);

export default function useSceneTransition() {
	const sectionRef = useRef(null);
	const [inMainMenu, setInMainMenu] = useState(true);
	const [mcX, setMcX] = useState(100);
    const mcXRef = useRef(mcX);

	useEffect(() => {
		mcXRef.current = mcX;
	}, [mcX]);

	useEffect(() => {
		document.documentElement.style.overflowY = "hidden";
		if ("scrollRestoration" in history) {
			history.scrollRestoration = "manual";
		}

		window.scrollTo(0, 0);
		document.documentElement.style.overflow = "hidden";
	}, []);

	const handleScrollToMain = (id) => {
		if (id === "main") {
			document.documentElement.style.overflowY = "auto";
			setInMainMenu(false);
			gsap.to(window, {
				duration: 1.2,
				scrollTo: sectionRef.current,
				ease: "power2.inOut",
				onComplete: () => {
					document.documentElement.style.overflow = "hidden";
				},
			});
		}
	};

	const handleScrollToMenu = () => {
		document.documentElement.style.overflow = "auto";
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
				document.documentElement.style.overflow = "hidden";
				setInMainMenu(true);
				gsap.set(".main-display", { opacity: 1 });
			},
		});
	};
	return {
		sectionRef,
		inMainMenu,
		mcX,
		setMcX,
		handleScrollToMain,
		handleScrollToMenu,
	};
}
