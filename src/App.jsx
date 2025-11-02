import MainMenu from "./components/MainMenu";
import MainDisplay from "./components/MainDisplay";
import { MapWidthProvider } from "./context/MapWidthContext";
import useSceneTransition from "./hooks/useSceneTransition";
import useNpcActive from "./hooks/useNpcActive";
import { NpcProvider } from "./context/NpcContext";
import { ItemPopupProvider } from "./context/ItemPopupContext";
import ItemPopupLayer from "./components/ItemPopupLayer";
import { MenuProvider } from "./context/MenuContext";

export default function App() {
	const {
		sectionRef,
		inMainMenu,
		mcX,
		setMcX,
		handleScrollToMain,
		handleScrollToMenu,
	} = useSceneTransition();

	return (
		<div className="flex flex-col">
			<MapWidthProvider>
				<NpcProvider>
					<ItemPopupProvider>
						<MenuProvider>
							<section className="h-screen">
								<MainMenu handleScroll={handleScrollToMain} />
							</section>
							<ItemPopupLayer />
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
						</MenuProvider>
					</ItemPopupProvider>
				</NpcProvider>
			</MapWidthProvider>
		</div>
	);
}
