import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import App from "../App";
import * as ApiService from "../services/api.service";

/**
 * All the tests are driven by the user behavior, testing each isolated component infers in a test tightly coupled with code implementation.
 * This can make a process like refactor or code change more time-consuming and risky.
 */
describe("Test Initial Page", () => {
  function setup() {
    return render(<App />);
  }

  it("should match with snapshot when rendered", () => {
    expect(setup().container).toMatchSnapshot();
  });

  it("should call api and show combinations when a digit button is clicked", async () => {
    setup();
    const spy = jest.spyOn(ApiService, "fetchPhonewords").mockResolvedValueOnce([]);
    fireEvent.click(screen.getByTestId("digit-button-2"));
    expect(spy).toHaveBeenCalledWith("2");
    await waitFor(() => null);
  });

  it("should typed number appear when a digit is clicked", async () => {
    setup();
    expect(screen.queryByTestId("typed-number-section")).not.toBeInTheDocument();
    jest.spyOn(ApiService, "fetchPhonewords").mockResolvedValueOnce([]);
    fireEvent.click(screen.getByTestId("digit-button-2"));
    expect(screen.getByTestId("typed-number-section")).toBeInTheDocument();
    await waitFor(() => null);
  });

  it("should the results from the api appear when a digit is clicked", async () => {
    setup();
    jest.spyOn(ApiService, "fetchPhonewords").mockResolvedValueOnce(["test phone word 1"]);
    fireEvent.click(screen.getByTestId("digit-button-2"));
    await screen.findByText("test phone word 1");
  });

  it("should remove last digit when the backspace button is clicked", async () => {
    setup();
    jest.spyOn(ApiService, "fetchPhonewords").mockResolvedValue([]);
    fireEvent.click(screen.getByTestId("digit-button-2"));
    fireEvent.click(screen.getByTestId("digit-button-3"));
    fireEvent.click(screen.getByTestId("digit-button-4"));
    fireEvent.click(screen.getByTestId("digit-button-5"));
    expect(await screen.findByText("2345")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("backspace-button"));
    expect(await screen.findByText("234")).toBeInTheDocument();
  });
});
