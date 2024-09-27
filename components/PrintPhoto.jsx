import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const StyledPrintPhoto = styled.div`
	width: calc(50% - 10px);
	img {
		max-width: 100%;
		margin-bottom: -4px;
	}
`;

const ImageContainer = styled.div`
	position: relative;
`;

const HoverAnimation = keyframes`
  from { transform: scale(1) }
  to { transform:  scale(1.1.3) }
`;

const Card = styled.div`
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
		animation: ${HoverAnimation} 333ms ease-in-out forwards;
	}
`;

const ImageNew = styled.img`
	position: absolute;
`;

export default function PrintPhoto({
	image,
	alt,
	onHandleSwapItems,
	onReleaseSwapItems,
	itemLocation,
}) {
	const [newImage, setNewImage] = useState("");

	useEffect(
		(oldValue) => {
			// to trigger animation from one img to another
			setNewImage(image);
			newImageTransition();
		},
		[image]
	);

	const newImageTransition = () => {
		// TODO: needs finishing
		// save old image, new image placed over at 0% opacity
		// also needs a circle mask and 0px, animate the mask out
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
					{/* need to transition between image src change */}
					{newImage && image.target && (
						<ImageNew src={newImage.src} alt={alt} draggable={false} />
					)}
					<img src={image.src} alt={alt} draggable={false} />
				</Card>
			</ImageContainer>
		</StyledPrintPhoto>
	);
}
