import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const StyledPrintPhoto = styled.div`
	width: calc(50% - 10px);
	img {
		max-width: 100%;
		margin-bottom: -4px;
	}
	@property --s {
		syntax: "<percentage>";
		inherits: false;
		initial-value: 0%;
	}
`;

const ImageContainer = styled.div``;

const Card = styled.div`
	position: relative;
	&:hover {
		cursor: pointer;
		outline: solid 3px white;
		background-color: white;
	}
	&.selected {
		width: 100%;
		outline: solid 8px white;
		box-shadow: 10px 10px 10px #333;
		background-color: white;
	}
`;

const AnimateMask = keyframes`
	0% {
    --s:0%;
  }
  50% {
    --s:50%;
  }
  100% {
    --s:100%;
  }`;

const ImageNew = styled.img`
	position: absolute;
	top: 0px;
	left: 0px;
	mask-image: radial-gradient(
		circle at 50% 50%,
		black var(--s),
		rgba(0, 0, 0, 0.1) 0%
	);
	mask-position: 50% 50%;
	mask-repeat: no-repeat;
	mask-size: 100%;
	animation: ${AnimateMask} 340ms forwards 1 ease-in-out;
	/* border: red solid 5px; */
`;

const ImageOriginal = styled.img`
	opacity: 1;
`;

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
