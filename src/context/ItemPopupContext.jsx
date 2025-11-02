// context/ItemPopupContext.jsx
import { createContext, useContext } from "react";
import useItemPopup from "../hooks/useItemPopup";

const ItemPopupContext = createContext();

export function ItemPopupProvider({ children }) {
	const popup = useItemPopup();	
	return (
		<ItemPopupContext.Provider value={popup}>
			{children}
		</ItemPopupContext.Provider>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export function useItemPopupContext() {
	const context = useContext(ItemPopupContext);

	if (!context) {
		throw new Error(
			"useItemPopupContext must be used inside <ItemPopupProvider>"
		);
	}
	return context;
}
