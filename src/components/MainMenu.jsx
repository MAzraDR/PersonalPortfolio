import { motion } from "motion/react";
import { useState } from "react";
import BookCoverLeft from "../assets/BookCoverLeft.png";
import { title } from "../data/TextData";

export default function BookMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		if (!clicked) {
			setIsOpen(true);
			setClicked(true);
		}
	};

	return (
		<div
			className="flex justify-center items-center w-full h-screen bg-[url('/src/assets/menuBg.png')] bg-cover bg-center overflow-hidden"
			onClick={() => handleClick()}>
			<motion.div
				className="relative origin-right z-20 brightness-90 flex justify-end ali items-center"
				initial={{ rotateY: -180 }}
				animate={{ rotateY: isOpen ? 0 : -180 }}
				transition={{
					duration: 1.5,
					ease: [0.76, 0, 0.24, 1],
				}}
				style={{
					transformStyle: "preserve-3d",
					perspective: "2000px",
				}}>
				<div className="relative">
					<img
						src="/src/assets/BookCoverLeft.png"
						alt="Book Cover Left"
						className="object-contain h-auto w-[42.5vw] md:w-[35vw] lg:w-[25vw]"
					/>
					<motion.div className="absolute top-1/7 md:top-1/5 left-4 lg:left-8 z-20">
						{title.map((char, i) => (
							<motion.span
								key={i}
								initial={{ opacity: 0, y: 20 }}
								animate={{
									opacity: isOpen ? 1 : 0,
									y: isOpen ? 0 : 20,
								}}
								transition={{
									delay: 1 + i * 0.05, // delay each letter slightly
									duration: 0.4,
								}}
								className="font-felipa text-[2.20rem] sm:text-5xl md:text-[3rem] lg:text-[3.85rem] text-gray-900 font-medium leading-tight tracking-wide">
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
					transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
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
						<a
							href="#"
							className="group relative w-[90%] bg-[url('/src/assets/ButtonImg.png')] bg-contain bg-no-repeat bg-center aspect-[5/1] hover:brightness-90 transition flex items-center justify-center text-xs md:text-lg lg:text-xl font-lora text-gray-800">
							Unfold the First Scroll
							<span className="absolute bottom-[-1.5rem] left-1/2 -translate-x-1/2 text-xs text-gray-700 bg-white/50 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
								Begin your adventure
							</span>
						</a>

						<a
							href="#"
							className="group relative w-[90%] bg-[url('/src/assets/ButtonImg.png')] bg-contain bg-no-repeat bg-center aspect-[5/1] hover:brightness-90 transition flex items-center justify-center text-xs md:text-lg lg:text-xl text-shadow-md font-lora text-gray-800">
							Completed Quests
							<span className="absolute bottom-[-1.5rem] left-1/2 -translate-x-1/2 text-xs text-gray-700 bg-white/50 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
								My Projects
							</span>
						</a>

						<a
							href="#"
							className="group relative w-[90%] bg-[url('/src/assets/ButtonImg.png')] bg-contain bg-no-repeat bg-center aspect-[5/1] hover:brightness-90 transition flex items-center justify-center text-xs md:text-lg lg:text-xl text-shadow-md font-lora text-gray-800">
							The Oath and Seal
							<span className="absolute bottom-[-1.5rem] left-1/2 -translate-x-1/2 text-xs text-gray-700 bg-white/50 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
								Contact Info
							</span>
						</a>

						<a
							href="#"
							className="group relative w-[90%] bg-[url('/src/assets/ButtonImg.png')] bg-contain bg-no-repeat bg-center aspect-[5/1] hover:brightness-90 transition flex items-center justify-center text-xs md:text-lg lg:text-xl text-shadow-md font-lora text-gray-800">
							The Master's Chronicle
							<span className="absolute bottom-[-1.5rem] left-1/2 -translate-x-1/2 text-xs text-gray-700 bg-white/50 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
								About Me
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
