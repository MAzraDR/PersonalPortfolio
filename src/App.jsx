import MainMenu from "./components/MainMenu";
import MainDisplay from "./components/MainDisplay";
import { MapWidthProvider } from "./context/MapWidthContext";
import UseSceneTransition from "./hooks/useSceneTransition";

export default function App() {
	const {
		sectionRef,
		inMainMenu,
		mcX,
		setMcX,
		handleScrollToMain,
		handleScrollToMenu,
	} = UseSceneTransition(() => {});

	return (
		<div className="flex flex-col">
			<section className="h-screen">
				<MainMenu handleScroll={handleScrollToMain} />
			</section>
			<MapWidthProvider>
				<section
					ref={sectionRef}
					className="main-display transition-opacity duration-700">
					<MainDisplay
						sectionRef={sectionRef}
						handleClick={handleScrollToMenu}
						showButton={!inMainMenu}
						mcX={mcX}
						setMcX={setMcX}
					/>
				</section>
			</MapWidthProvider>
		</div>
	);
}
