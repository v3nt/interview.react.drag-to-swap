import { useEffect, useState } from "react";
import {
	StyledPrintPhoto,
	ImageContainer,
	Card,
	AnimateMask,
	ImageNew,
	ImageOriginal,
} from "./styles";

export default function PrintPhoto({
	image,
	alt,
	onHandleSwapItems,
	onReleaseSwapItems,
	itemLocation,
}) {
	const [newImage, setNewImage] = useState({ src: undefined, selected: false });
	const [originalImage, setOriginalImage] = useState({});
	const [showTransition, setShowTransition] = useState(false);

	useEffect(() => {
		setNewImage(image);

		if (!originalImage.src) {
			setOriginalImage(image);
		}

		if (
			originalImage.src &&
			originalImage.src !== image.src &&
			!originalImage.selected
		) {
			newImageTransition();
			console.log("call newImageTransition");
		} else {
			setOriginalImage(image);
		}
	}, [image]);

	const newImageTransition = () => {
		setShowTransition(true);
		setTimeout(() => {
			setShowTransition(false);
			setOriginalImage(image);
		}, 666);
	};

	return (
		<StyledPrintPhoto>
			<ImageContainer
				// user can click to set source and again for target.
				// or user can drag source to target
				onTouchStart={() => onHandleSwapItems(itemLocation)}
				onMouseDown={() => onHandleSwapItems(itemLocation)}
				onTouchEnd={() => onReleaseSwapItems(itemLocation)}
				onMouseUp={() => onReleaseSwapItems(itemLocation)}
			>
				<Card className={image.selected && "selected"} data-testid="card">
					{showTransition && (
						<ImageNew src={newImage.src} alt={alt} draggable={false} />
					)}

					{originalImage.src && (
						<ImageOriginal
							src={originalImage.src}
							alt={alt}
							draggable={false}
						/>
					)}
				</Card>
			</ImageContainer>
		</StyledPrintPhoto>
	);
}
