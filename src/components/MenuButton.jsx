import { motion } from "motion/react";

export function MenuButton({ id, href, title, subtitle, onClick, onTouchStart }) {
	const handleClick = (e) => {		
		e.stopPropagation();

		if (onClick) onClick(e);
	};

	return (
		<motion.a
			id={id}
			onPointerDown={handleClick}						
			href={href}
			whileTap={{ scale: 0.95 }}
			transition={{ type: "spring", stiffness: 400, damping: 20 }}
			className="group relative w-[90%] bg-[url('/src/assets/ButtonImg.png')] bg-contain bg-no-repeat bg-center aspect-[5/1] flex items-center justify-center text-[10px] md:text-base lg:text-lg xl:text-xl hover:brightness-95 font-lora text-shadow-lg/10 text-[#321d20]">
			{title}
			<span className="absolute bottom-8 md:bottom-12 lg:bottom-16 text-[0.5rem] md:text-xs text-[#321d20] bg-white/50 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition text-center pointer-events-none">
				{subtitle}
			</span>
		</motion.a>
	);
}
