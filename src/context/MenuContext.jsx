import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const MenuContext = createContext();

export function MenuProvider({ children }) {
	const [isMenu, setIsMenu] = useState(true);

	return (
		<MenuContext.Provider value={{ isMenu, setIsMenu }}>
			{children}
		</MenuContext.Provider>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export function useMenu() {
	const context = useContext(MenuContext);

	if (!context) {
		throw new Error("MenuContext must be used inside <MenuProvider>");
	}
	return context;
}
