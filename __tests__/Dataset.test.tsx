import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../app/dataset/page";

describe("Home page", () => {
  it("should have test 'home page'", () => {
    render(<Home />);

    const elem = screen.getByText("home page");

    expect(elem).toBeInTheDocument();
  });
});
