import { useRef } from "react";
import Character from "./components/Character";

function App() {
	const worldRef = useRef(null);

	return (
		
			<div className="relative w-[3227px] md:w-[3228px] xl:w-[3229px] 2xl:w-[3957px] h-screen bg-result bg-no-repeat bg-bottom-left bg-contain overflow-x-hidden overflow-y-hidden">
				<Character worldRef={worldRef}/>
			</div>
	
	);
}

export default App;
