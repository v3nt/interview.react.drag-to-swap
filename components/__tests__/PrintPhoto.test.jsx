import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

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
	const component = render(
		<PrintPhoto image={props.image} onHandleSwapItems={onClick} />
	);

	it("Has a card element", () => {
		expect(screen.getByTestId("card")).toBeDefined();
	});

	// test for events here
});
