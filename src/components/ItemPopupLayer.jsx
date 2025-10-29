import ItemsContent from "./ItemsContent";

export default function ItemPopupLayer({
	itemPopup,
	closeItemPopup,
	activeNpc,
}) {
	if (!itemPopup.isOpen) return null;
	return (
		<div className="fixed inset-0 z-60 flex justify-center items-center">
			<div className="absolute inset-0 bg-black/10 backdrop-blur-xs" />
			<div className="relative z-10 pointer-events-auto">
				<ItemsContent
					item={itemPopup.content}
					isOpen={itemPopup.isOpen}
					closeDialog={closeItemPopup}
					activeNpc={activeNpc}
				/>
			</div>
		</div>
	);
}
