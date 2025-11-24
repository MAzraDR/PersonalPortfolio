import React, { memo } from "react";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { getSkillIcon } from "../utils/getIcon";

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
						<header className="text-center mb-10">
							<h3
								id="dialog-title"
								className="text-3xl font-bold italic">
								The Master's Chronicle
							</h3>
						</header>

						<section className="mb-6">
							<h4 className="text-sm md:text-lg lg:text-xl font-medium italic">
								{item.title}
							</h4>
							<h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white">
								{item.name}
							</h2>
						</section>

						<section className="flex flex-col gap-5 my-4">
							<p className="text-base md:text-base lg:text-lg">
								{item.bio}
							</p>
							<p className="text-sm md:text-base font-light">
								{item.education}
							</p>

							{item.techinalSkills && (
								<div>
									<h5 className="text-sm md:text-base font-semibold mb-3">
										Proficient in:
									</h5>
									<ul className="grid grid-cols-2 gap-2">
										{Object.entries(
											item.techinalSkills
										).map(([key, value], index) => (
											<li
												key={index}
												className="flex items-center gap-2 text-sm md:text-base">
												{getSkillIcon(key)} {value}
											</li>
										))}
									</ul>
								</div>
							)}

							{item.interests?.length > 0 && (
								<div>
									<h5 className="text-sm md:text-base font-semibold">
										Interests
									</h5>
									{item.interests.map((interest, i) => (
										<p
											key={i}
											className="text-sm md:text-base font-light">
											{interest}
										</p>
									))}
								</div>
							)}
						</section>

						<footer className="text-center mt-6">
							<p className="text-sm md:text-base font-semibold italic">
								Contact Information
							</p>
							<div className="flex justify-center gap-4 mt-4">
								{item.contactsInfo?.github && (
									<a
										href={item.contactsInfo.github}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 text-[#B69779] hover:text-white">
										<FaGithub /> GitHub
									</a>
								)}
								{item.contactsInfo?.linkedln && (
									<a
										href={item.contactsInfo.linkedln}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 text-[#B69779] hover:text-white">
										<FaLinkedin /> LinkedIn
									</a>
								)}
								{item.contactsInfo?.email && (
									<a
										href={`mailto:${item.contactsInfo.email}`}
										className="flex items-center gap-2 text-[#B69779] hover:text-white">
										<FaEnvelope /> Email
									</a>
								)}
							</div>
						</footer>
					</div>
				);

			case "Leylah":
				return (
					<div>
						<h3
							id="dialog-title"
							className="text-3xl font-bold text-center mb-8 italic">
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
							className="text-3xl font-bold text-center  italic">
							The Oath and Seal
						</h3>
						<div className="flex flex-col gap-3 text-center mt-5">
							<p> {item.Name}</p>
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
