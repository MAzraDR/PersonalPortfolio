import { useEffect } from "react";
import { useState } from "react";

export default function useMcBehaviour({isDialogueVisible}) {
	const [playerAction, setPlayerAction] = useState("idle");

	// MC behaviour
	useEffect(() => {
		setPlayerAction(isDialogueVisible ? "idle" : "walk");
	}, [isDialogueVisible]);

    return { playerAction, setPlayerAction };
}