import { useState, useEffect, createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const mapWidthContext = createContext();

export function MapWidthProvider({ children }) {
	const [mapWidth, setMapWidth] = useState(3957); // default

	useEffect(() => {
		const updateMapWidth = () => {
			const width = window.innerWidth;
			if (width >= 1536) setMapWidth(3957); // 2xl
			else if (width >= 1280) setMapWidth(3229); // xl
			else if (width >= 768) setMapWidth(3228); // md
			else setMapWidth(3227); // sm
		};

		updateMapWidth();
		window.addEventListener("resize", updateMapWidth);
		return () => window.removeEventListener("resize", updateMapWidth);
	}, []);

	return (
		<mapWidthContext.Provider value={mapWidth}>
			{children}
		</mapWidthContext.Provider>
	);
}
