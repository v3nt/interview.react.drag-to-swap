import styled from "styled-components";
import { useState } from "react";

const StyledDropper = styled.div`
	outline: solid 1px red;
`;

// const Dropper = () => {
// 	// const [{ opacity }, dragRef] = useDrag(
// 	//   () => ({
// 	//     type: ItemTypes.CARD,
// 	//     item: { text },
// 	//     collect: (monitor) => ({
// 	//       opacity: monitor.isDragging() ? 0.5 : 1
// 	//     })
// 	//   }),
// 	//   []
// 	// )

// 	return (
// 		<StyledDropper>TODO:will hold first selected image thumb </StyledDropper>
// 	);
// };

const Dropper = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [position, setPosition] = useState([0, 0]); // State to save the position where you clicked

	const handleClick = (event) => {
		setIsVisible((current) => !current);
		setPosition([event.pageX, event.pageY]); // Save the pos where you clicked
	};

	return (
		<div className="gamepage" onClick={handleClick}>
			{isVisible && (
				<ul
					className="menu"
					style={{
						position: "absolute",
						zIndex: 101,
						left: position[0],
						top: position[1],
						transform: "translateX(-50%)",
						transform: "translateY(-50%)",
					}}
				>
					<li className="menu-item">Waldo</li>
				</ul>
			)}
			Dropper preview here
		</div>
	);
};

export default Dropper;
