import { motion } from "motion/react";
import { useState } from "react";
import { bookTitle, menuText } from "../data/TextData";
import { MenuButton } from "./MenuButton";

export default function MainMenu({ handleScroll }) {
	const [isOpen, setIsOpen] = useState(false);

	const handleClickMenu = () => {
		setIsOpen(true);
	};

	return (
		<motion.div
			className="flex justify-center items-center w-full h-screen bg-[url('/src/assets/menuBg.png')] bg-cover bg-center"
			onClick={handleClickMenu}>
			<motion.div
				className="relative origin-right z-20 brightness-90 flex justify-end items-center"
				initial={{ rotateY: -180 }}
				animate={{ rotateY: isOpen ? 0 : -180 }}
				transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
				style={{
					transformStyle: "preserve-3d",
					perspective: "2000px",
				}}>
				<div className="relative">
					<img
						src="/src/assets/BookCoverLeft.png"
						alt="Book Cover Left"
						className="object-contain h-auto w-[42.5vw] md:w-[35vw] lg:w-[25vw] shadow-2xl"
					/>
					<motion.div className="absolute top-1/7 md:top-1/5 left-4 lg:left-8 z-20">
						{bookTitle.map((char, i) => (
							<motion.span
								key={i}
								initial={{ opacity: 0, y: 20 }}
								animate={{
									opacity: isOpen ? 1 : 0,
									y: isOpen ? 0 : 20,
								}}
								transition={{
									delay: 1 + i * 0.05,
									duration: 0.4,
								}}
								className="font-felipa text-[2.20rem] sm:text-5xl md:text-[3rem] lg:text-[3.85rem] text-[#743841] font-medium leading-tight tracking-wide">
								{char}
							</motion.span>
						))}
					</motion.div>
				</div>
				<motion.img
					src="/src/assets/PaperCoverLeft.png"
					alt="Paper Left"
					className="absolute right-0 object-contain h-auto w-[97%] origin-right"
					initial={{ opacity: 0 }}
					animate={{ opacity: isOpen ? 1 : 0 }}
					transition={{
						duration: 1.1,
						delay: 0.4,
						ease: [0.76, 0, 0.24, 1],
					}}
				/>
			</motion.div>

			<div className="relative origin-left z-10 brightness-90">
				<img
					src="/src/assets/BookCoverRight.png"
					alt="Book Cover Right"
					className="object-contain w-[42.5vw] md:w-[35vw] lg:w-[25vw] h-auto"
				/>
				<div
					className="absolute top-0 left-0 object-contain w-[97%] h-full brightness-100"
					style={{
						backgroundImage:
							"url('/src/assets/PaperCoverRight.png')",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "left",
						backgroundSize: "contain",
					}}>
					<div className="h-[100%] flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-8 w-full">
						{Object.values(menuText).map((item) => (
							<MenuButton
								id={item.id}
								key={item.title}
								href={item.href}
								title={item.title}
								subtitle={item.subTitle}
								onClick={handleScroll}
							/>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
}
