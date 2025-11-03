import { motion } from "motion/react";
import { useState } from "react";
import { bookTitle, itemDescriptions, menuText } from "../data/TextData";
import { MenuButton } from "./MenuButton";
import bookCoverLeft from "../assets/BookCoverLeft.png";
import bookCoverRight from "../assets/BookCoverRight.png";
import paperCoverLeft from "../assets/PaperCoverLeft.png";
import paperCoverRight from "../assets/PaperCoverRight.png";
import { useNpc } from "../context/NpcContext";
import { useItemPopupContext } from "../context/ItemPopupContext";
import { useEffect } from "react";
import { useMenu } from "../context/MenuContext";

export default function MainMenu({ handleScroll }) {
	const [isOpen, setIsOpen] = useState(false);
	const { setItemPopup } = useItemPopupContext();
	const { activeNpc, setActiveNpc } = useNpc();
	const { isMenu, setIsMenu } = useMenu();

	const handleClickMenu = () => {
		setIsOpen(true);
	};

	const handleClickMain = (item) => {
		if (item.linkedNpc === "#") {
			handleScroll(item.id);
			setIsMenu(false);
			setItemPopup({
				isOpen: false,
				content: null,
			});
		} else if (item.linkedNpc) {
			setActiveNpc(item.linkedNpc);
			if (activeNpc && isMenu) {
				setItemPopup({
					isOpen: true,
					content: itemDescriptions[item.linkedNpc],
				});
			}
		}
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
						src={bookCoverLeft}
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
								className="font-felipa text-2xl md:text-5xl lg:text-5xl xl:text-6xl text-[#743841] font-medium leading-tight tracking-wide">
								{char}
							</motion.span>
						))}
					</motion.div>
				</div>
				<motion.img
					src={paperCoverLeft}
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
					src={bookCoverRight}
					alt="Book Cover Right"
					className="object-contain w-[42.5vw] md:w-[35vw] lg:w-[25vw] h-auto"
				/>
				<div
					className="absolute top-0 left-0 object-contain w-[97%] h-full brightness-100"
					style={{
						backgroundImage: `url(${paperCoverRight})`,
						backgroundRepeat: "no-repeat",
						backgroundPosition: "left",
						backgroundSize: "contain",
					}}>
					<div className="h-[100%] flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-8 w-full">
						{Object.values(menuText).map((item) => (
							<MenuButton
								id={item.id}
								key={item.id}
								href={item.href}
								title={item.title}
								subtitle={item.subTitle}
								onClick={() => handleClickMain(item)}
								// onTouchStart={() =>handleScroll(item.id)}
							/>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
}
