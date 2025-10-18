import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

export default function DialogueBox({
	text = "",
	speed = 30,
	speaker,
	isVisible,
}) {
	const [displayedText, setDisplayedText] = useState("");
	const intervalRef = useRef(null);

	useEffect(() => {
		if (!isVisible || !text) return;

		setDisplayedText("");
		let i = 0;
		let currentText = "";

		clearInterval(intervalRef.current);
		intervalRef.current = setInterval(() => {
			if (i < text.length) {
				currentText += text[i]; 
				setDisplayedText(currentText); 
				i++;
			} else {
				clearInterval(intervalRef.current);
			}
		}, speed);
		

		return () => clearInterval(intervalRef.current);
	}, [text, isVisible, speed]);

	if (!isVisible) return null;

	return (
		<motion.div
			initial={{ opacity: 1, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1, delay: 0 }}
			className="">
			<h6 className="leading-relaxed font-bold ">{speaker}</h6>
			<hr />
			<p className="leading-relaxed text-sm md:text-lg">
				{displayedText}
			</p>
		</motion.div>
	);
}
