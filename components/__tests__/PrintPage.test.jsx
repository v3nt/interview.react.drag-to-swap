import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import PrintPage from "../PrintPage";
import { originalPagesAndImages } from "../../content/appDefaultContent";

test("PrintPage", () => {
	render(<PrintPage data={originalPagesAndImages} />);

	expect(screen.getByTestId("print-wrapper-item-0")).toBeDefined();
});
