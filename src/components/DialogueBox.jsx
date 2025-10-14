import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function DialogueBox({ text, isVisible }) {
	const [displayedText, setDisplayedText] = useState("");
	let speed = 20;	

	useEffect(() => {
		if (isVisible) {
			let i = 0;
			setDisplayedText("");

			const interval = setInterval(() => {
				setDisplayedText((prev) => prev + text.charAt(i));
				i++;
				if (i >= text.length) clearInterval(interval);
			}, speed);

			return () => clearInterval(interval);
		}
	}, [speed, text, isVisible]);

	if (!isVisible) return null;

	return (
		<div className="w-screen flex justify-center px-4 relative top-30">
			<motion.div
				initial={{ opacity: 1, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0 }}
				className="bg-black/70 text-white text-lg px-4 py-6 rounded-2xl shadow-lg max-w-[50vw] w-fit text-center">
				<p className="leading-relaxed">{displayedText}</p>
			</motion.div>
		</div>
	);
}
