import HomePage from "../pages/index";
import { render, screen } from "@testing-library/react";

describe("Home page", () => {
  it("should render without crashing", () => {
    render(<HomePage />);
    expect(screen.getByText(/current lights/i)).toBeVisible();
  });
});
