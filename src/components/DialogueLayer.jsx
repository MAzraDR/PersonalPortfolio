import DialogueBox from "./DialogueBox";
import { motion, AnimatePresence } from "motion/react";

export default function DialogueLayer({
	itemPopup,
	handleNextDialogue,
	currentDialogue,
	isDialogueCompleted,
	isDialogueVisible,
}) {
	return (
		<div
			onClick={!itemPopup.isOpen ? handleNextDialogue : null}
			className="w-screen flex justify-center px-4 fixed top-10 pointer-events-auto">
			<AnimatePresence mode="wait">
				{currentDialogue &&
					!isDialogueCompleted &&
					isDialogueVisible && (
						<motion.div
							key={currentDialogue.text}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.5 }}
							className="bg-black/70 text-white text-lg px-6 py-5 rounded-2xl shadow-lg max-w-[70vw] lg:max-w-[50vw] w-fit text-center">
							<DialogueBox
								text={currentDialogue.text}
								speaker={currentDialogue.speaker}
								isVisible={isDialogueVisible}
							/>

							<p className="text-sm opacity-50 mt-4 text-right">
								Click to Continue
							</p>
						</motion.div>
					)}
			</AnimatePresence>
		</div>
	);
}
