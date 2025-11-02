import { useState, useEffect } from "react";

export default function useItemPopup({ setIsDialogueVisible } = {}) {
	const [itemPopup, setItemPopup] = useState({
		isOpen: false,
		content: null,
	});	

	useEffect(() => {
		if (typeof setIsDialogueVisible === "function") {
			setIsDialogueVisible(!itemPopup.isOpen);
		}
	}, [itemPopup.isOpen, setIsDialogueVisible]);

	const closeItemPopup = () => {
		setItemPopup({ isOpen: false, content: null });
	};

	return { itemPopup, setItemPopup, closeItemPopup };
}
