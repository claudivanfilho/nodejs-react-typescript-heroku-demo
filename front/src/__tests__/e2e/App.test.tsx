import { mount } from "@cypress/react";

import App from "../../App";

it("renders selected digits when some digits are selected", () => {
  mount(<App />);
  cy.contains("Select your number sequence");
  cy.contains("Phonewords combinations");
  cy.get('[data-testid="digit-button-2"]').click();
  cy.get('[data-testid="digit-button-3"]').click();
  cy.get('[data-testid="digit-button-4"]').click();
  cy.contains("234");
});
