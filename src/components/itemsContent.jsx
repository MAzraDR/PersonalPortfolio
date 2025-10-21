import React, { memo } from "react";
import { motion } from "motion/react";

const ItemsContent = memo(function ItemsContent({
	item,
	isOpen,
	closeDialog,
	activeNpc,
}) {
	if (!item || !isOpen) return null;

	const renderContent = () => {
		switch (activeNpc) {
			case "Hector":
				return (
					<div>
						<h3
							id="dialog-title"
							className="text-3xl font-bold text-center mb-10 italic">
							The Master's Chronicle
						</h3>
						<h3 className="text-sm md:text-lg lg:text-xl font-medium">
							{item.title}
						</h3>
						<h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-white">
							{item.name}
						</h3>

						<div className="flex flex-col gap-5 my-4">
							<p className="text-base md:text-base lg:text-lg">
								{item.bio}
							</p>
							<p className="text-sm md:text-base font-light">
								{item.education}
							</p>
							<ul>
								{item.techinalSkills?.map((skill, index) => (
									<li
										key={index}
										className="text-sm md:text-base">
										{skill}
									</li>
								))}
							</ul>
							{item.interests?.map((interest, i) => (
								<p
									key={i}
									className="text-sm md:text-base font-light">
									{interest}
								</p>
							))}
							<p className="text-sm md:text-base font-semibold italic text-center">
								<span className="block font-light not-italic ">Motto :</span>
								{item.motto}
							</p>
						</div>
					</div>
				);

			case "Leylah":
				return (
					<div>
						<h3
							id="dialog-title"
							className="text-3xl font-bold text-center mb-10 italic">
							Completed Quests
						</h3>
						<h3 className="text-xl md:text-2xl font-semibold mb-2">
							{item.Name}
						</h3>
						<ul className="list-disc list-inside">
							{item.Projects?.map((proj, index) => (
								<li
									key={index}
									className="text-base md:text-lg">
									{proj}
								</li>
							))}
						</ul>
					</div>
				);

			case "Louis":
				return (
					<div>
						<h3
							id="dialog-title"
							className="text-3xl font-bold text-center mb-10 italic">
							The Oath and Seal
						</h3>
						<div className="flex flex-col gap-3 text-center">
							<a
								href={item.contactsInfo?.github}
								target="_blank"
								rel="noopener noreferrer"
								className="underline text-[#B69779] hover:text-white">
								GitHub
							</a>
							<a
								href={item.contactsInfo?.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								className="underline text-[#B69779] hover:text-white">
								LinkedIn
							</a>
							<p className="text-sm md:text-base">
								{item.contactsInfo?.email}
							</p>
						</div>
					</div>
				);

			default:
				return null;
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0, scale: 1 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.9 }}
			transition={{ duration: 0.7, delay: 0.2 }}>
			<div className="fixed inset-0 z-50 flex justify-center items-center bg-black/60 backdrop-blur-sm">
				<div className="relative bg-[#2B2121]/90 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-white w-[80vw] md:w-[50vw] rounded-xl shadow-lg">
					{renderContent()}
					<button
						onClick={closeDialog}
						className="block cursor-pointer rounded-md bg-[#B69779]/30 px-10 py-3 text-xs md:text-sm lg:text-base font-semibold text-white hover:bg-[#B69779]/50 mx-auto mt-6">
						Close
					</button>
				</div>
			</div>
		</motion.div>
	);
});

export default ItemsContent;
