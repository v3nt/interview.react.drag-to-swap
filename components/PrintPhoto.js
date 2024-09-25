import styled from "styled-components";

const StyledPrintPhoto = styled.div`
	width: calc(50% - 10px);

	&:hover,
	.image-source {
		cursor: pointer;
		div {
			transform: scale(1);
			animation: frame 1s ease-in-out forwards;
			animation-name: frame;
			animation-iteration-count: 1;
		}
	}
	img {
		max-width: 100%;
	}
`;

const ImageContainer = styled.div`
	/* width: calc(50% - 10px); */

	/* overflow: hidden; */
`;

export default function PrintPhoto({
	src,
	alt,
	onHandleSwapItems,
	itemLocation,
}) {
	return (
		<StyledPrintPhoto>
			<ImageContainer onClick={() => onHandleSwapItems(itemLocation)}>
				<div className="inner">
					<img src={src} alt={alt} />
				</div>
			</ImageContainer>

			{/* <div className="card example-1">
				<div className="inner">
	 
				</div>
			</div> */}
		</StyledPrintPhoto>
	);
}
