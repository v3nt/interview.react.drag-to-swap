import styled, { keyframes } from "styled-components";

export const StyledPrintPhoto = styled.div`
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

export const ImageContainer = styled.div``;

export const Card = styled.div`
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

export const ImageNew = styled.img`
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
`;

export const ImageOriginal = styled.img`
	opacity: 1;
`;
