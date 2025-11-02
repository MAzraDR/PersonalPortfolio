// NpcContext.jsx
import { createContext, useContext } from "react";
import useNpcActive from "../hooks/useNpcActive";

const NpcContext = createContext();

export function NpcProvider({ children, mcX }) {
	const npcActive = useNpcActive({ mcX });
	return (
		<NpcContext.Provider value={npcActive}>{children}</NpcContext.Provider>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export function useNpc() {
	return useContext(NpcContext);
}
