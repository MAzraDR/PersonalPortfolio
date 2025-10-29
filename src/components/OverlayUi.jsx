import Button from "./Button";
import InfoMessage from "./InfoMessage";
import homeIcon from "../assets/HomeIcon.png";

export default function OverlayUi({ handleClick, mcX, showButton }) {
	return (
		<>
			<Button
				onClick={handleClick}
				src={homeIcon}
				x={mcX}
				showButton={showButton}
			/>
			<InfoMessage></InfoMessage>
		</>
	);
}
