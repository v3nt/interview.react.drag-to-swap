import styled from "styled-components";

const StyledDropper = styled.div`
	position: absolute;
	z-index: 1001;
`;

const DropperPreview = styled.div`
	outline: solid 8px white;
	border-radius: 100%;
	background-color: #cecece;
	width: 90px;
	height: 90px;
	overflow: hidden;
	transform: translateX(-50%) translateY(-110%);
	box-shadow: 10px 10px 10px #333;

	img {
		width: auto;
		height: 110%;
	}
`;

const Dropper = ({ left, top, isVisible, imageSrc }) => {
	return (
		<StyledDropper
			data-test-id="styled-dropper"
			style={{
				display: isVisible ? "inherit" : "none",
				left: left + 10,
				top: top - 10,
			}}
		>
			<DropperPreview>
				{imageSrc && (
					// NB. Next/Image can't accept changing src
					<img src={imageSrc} alt="Preview of image you are moving" />
				)}
			</DropperPreview>
		</StyledDropper>
	);
};

export default Dropper;
