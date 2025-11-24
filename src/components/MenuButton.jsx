import { motion } from "motion/react";
import  menuButton  from "../assets/ButtonImg.png";

export function MenuButton({ id, href, title, onClick }) {
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
			style={{ backgroundImage: `url(${menuButton})` }}
			className=" relative w-[90%] bg-contain bg-no-repeat bg-center aspect-[5/1] flex items-center justify-center text-[10px] md:text-base lg:text-lg xl:text-xl hover:brightness-95 font-lora text-shadow-lg/10 text-[#321d20]">
			{title}
		</motion.a>
	);
}
