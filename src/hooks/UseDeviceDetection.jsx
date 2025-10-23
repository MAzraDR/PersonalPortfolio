import { useState, useEffect } from "react";

export default function useDeviceDetection() {
	const [isMobile, setIsMobile] = useState(
		window.matchMedia("(max-width: 768px)").matches
	);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 768px)");

		const handleChange = (e) => setIsMobile(e.matches);

		mediaQuery.addEventListener("change", handleChange);

		return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);

	return isMobile;
}
