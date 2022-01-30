import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import App from "../App";

describe("Test Initial Page", () => {
  it("should match with snapshot", () => {
    expect(
      render(
        <Router>
          <App />
        </Router>
      ).container
    ).toMatchSnapshot();
  });
});
