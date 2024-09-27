import { expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";

import PrintPhoto from "../PrintPhoto";
import { describe } from "vitest";
import { vi } from "vitest";

const props = {
	alt: "Alt text for image",
	image: {
		src: "https://imagedelivery.net/66_qOEcY2UwnECf5ON9PhQ/bde5b129-52ba-4f43-b3f4-97591952ea00/small",
		selected: true,
		target: false,
	},
};

describe("PrintPhoto", () => {
	const onClick = vi.fn();
	render(<PrintPhoto image={props.image} onHandleSwapItems={onClick} />);

	const card = screen.getByTestId("card");

	it("Has a card element", () => {
		expect(card).toBeDefined();
	});
});
