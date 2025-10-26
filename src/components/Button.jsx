import { motion } from "motion/react";

export default function Button({ onClick, src, showButton }) {
	const handleClick = (e) => {
		e.preventDefault();
		e.stopPropagation();

		if (onClick) onClick(e);
	};

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{
				opacity: showButton ? 1 : 0,
				scale: showButton ? 1 : 0.8,
				pointerEvents: showButton ? "auto" : "none",
			}}
			transition={{ duration: 1, ease: ["easeOut"], delay:1 }}
			className="flex justify-center items-center top-3 left-3 fixed h-10 w-10 border-2 border-[#E9C49A] opacity-90 rounded-full">
			<button
				onClick={handleClick}
				className="cursor-pointer w-5 h-5 p-3 bg-center bg-contain"
				style={{
					backgroundImage: `url(${src})`,
				}}></button>
		</motion.div>
	);
}
