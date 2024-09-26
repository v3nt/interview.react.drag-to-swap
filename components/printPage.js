import styled from "styled-components";
import Actions from "./actions";
import Dropper from "./Dropper";
import PrintPhoto from "./PrintPhoto";
import { useState } from "react";
import useSwapImage from "../hooks/useSwapItems";

const Wrapper = styled.div`
	width: 600px;
	margin: auto;
	color: #585858;
`;

const PrintWrapper = styled.div``;

const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Title = styled.div`
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 20px;
`;

const PageLayout = styled.div`
	display: flex;
	flex-wrap: wrap;
	background: var(--color-blue);
	border-radius: 8px;
	padding: 20px;
	margin: 17px 0 42px;
	justify-content: space-between;
	gap: 20px;
`;

export default function PrintPage({ data }) {
	const { swapItems, pagesAndImages, isDropperVisible } = useSwapImage(data);

	const [position, setPosition] = useState([0, 0]); // State to save the position where you clicked

	const handleClick = (event) => {
		setPosition([event.pageX, event.pageY]); // Save the pos where you clicked
	};

	return (
		<>
			<Wrapper
				onMouseDown={(e) => handleClick(e)}
				onMouseUp={(e) => handleClick(e)}
				onMouseMove={(e) => handleClick(e)}
				onDrag={(e) => handleClick(e)}
			>
				<Dropper />
				{isDropperVisible}
				<ul
					className="menu"
					style={{
						display: isDropperVisible ? "block" : "none",
						position: "absolute",
						zIndex: 101,
						left: position[0],
						top: position[1],
						transformX: "translateX(-50%)",
						transformY: "translateY(-50%)",
					}}
				>
					<li className="menu-item">Waldo</li>
				</ul>
				{Object.values(pagesAndImages).map((entry, indexPage) => {
					return (
						<PrintWrapper key={indexPage}>
							<Header>
								<Title>{entry.title}</Title>
								<Actions />
							</Header>
							<PageLayout>
								{entry.images?.map((image, indexPhoto) => {
									return (
										<PrintPhoto
											key={`${image}-${indexPhoto}`}
											src={image}
											alt={`${entry.title} - random or custom title here`}
											onHandleSwapItems={swapItems}
											itemLocation={[indexPage, indexPhoto]}
										/>
									);
								})}
							</PageLayout>
						</PrintWrapper>
					);
				})}
			</Wrapper>
		</>
	);
}
