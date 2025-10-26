import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function InfoMessage() {
	const [showMessage, setShowMessage] = useState(false);

	useEffect(() => {
		setShowMessage(true);
		const timer = setTimeout(() => {
			setShowMessage(false);
		}, 3000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<AnimatePresence>
			{showMessage && (
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{
						opacity: 1,
						y: 0,
						transition: {
							delay: 1,
							duration: 1.5,
							ease: "easeOut",
						},
					}}
					exit={{
						opacity: 0,
						y: -20,
						transition: {
							delay: 0, 
							duration: 1,
							ease: "easeInOut",
						},
					}}
					className="fixed z-50 text-white text-base md:text-lg lg:text-xl w-screen text-center top-20 font-semibold italic">
					Use swipe or use keyboard button "A" or "D" to move
				</motion.p>
			)}
		</AnimatePresence>
	);
}
