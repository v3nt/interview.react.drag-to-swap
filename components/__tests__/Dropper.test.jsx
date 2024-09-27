import { expect, test } from "vitest";
import { render } from "@testing-library/react";

import Dropper from "../Dropper";

test("Dropper", () => {
	const props = {
		isVisible: true,
		top: 100,
		left: 150,
		image: {
			src: "https://imagedelivery.net/66_qOEcY2UwnECf5ON9PhQ/bde5b129-52ba-4f43-b3f4-97591952ea00/small",
		},
	};

	render(
		<Dropper
			imageSrc={props.image.src}
			isVisible={props.isVisible}
			left={props.left}
			top={props.top}
		/>
	);

	const displayedImage = document.querySelectorAll("img");
	expect(displayedImage[0].src).toContain("imagedelivery");
});
