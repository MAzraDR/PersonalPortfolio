import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export const getSkillIcon = (skill) => {
	switch (skill) {
		case "HTML":
			return <FaHtml5 className="text-orange-500" />;
		case "CSS":
			return <FaCss3Alt className="text-blue-500" />;
		case "JS":
			return <FaJs className="text-yellow-500" />;
		case "React":
			return <FaReact className="text-blue-400" />;
		case "tailwindcss":
			return <SiTailwindcss className="text-teal-400" />;
		default:
			return null;
	}
};
