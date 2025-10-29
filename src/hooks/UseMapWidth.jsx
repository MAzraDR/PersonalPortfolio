import { useContext } from "react";
import { mapWidthContext } from "../context/MapWidthContext";

export function UseMapWidth() {
	const context = useContext(mapWidthContext);

	if (context === undefined) {
		throw new Error("useMapWidth must be used within a MapWidthProvider");
	}
	return context;
}
