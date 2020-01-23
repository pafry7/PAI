import { fireEvent, render } from "@testing-library/react";

import React from "react";
import { UnauthenticatedApp } from "UnauthenticatedApp";

describe("UnauthenticatedApp", () => {
  it("Renders header and content", () => {
    const { getByText, getByLabelText } = render(<UnauthenticatedApp />);

    // check if Header renders
    expect(getByLabelText("Header"));
    expect(getByText(/Budgetology/));
    expect(getByText(/Login/));
    expect(getByText(/Sign up/));
  });

  it("Pressing login button opens login dialog", () => {
    const { getByText, findByLabelText, queryByLabelText } = render(
      <UnauthenticatedApp />
    );
    // Click login Button
    fireEvent.click(getByText(/Login/));

    // Check id dialog opens
    expect(findByLabelText("form-dialog-title-Login", { exact: false }));

    // Press esc to close the dialog
    fireEvent.keyDown(getByText(/Password/i), {
      key: "Escape",
      code: "Escape",
      keyCode: 27,
      charCode: 27
    });

    // Make sure there is no dialog component
    expect(queryByLabelText("form-dialog-title-Login")).toBeNull();
  });
  it("Pressing sign up button opens sign up dialog", () => {
    const { getByText, findByLabelText, queryByLabelText } = render(
      <UnauthenticatedApp />
    );
    // Click login Button
    fireEvent.click(getByText(/Sign up/));

    // Check id dialog opens
    expect(findByLabelText("form-dialog-title-Sign up"));

    // Press esc to close the dialog
    fireEvent.keyDown(getByText(/Cancel/i), {
      key: "Escape",
      code: "Escape",
      keyCode: 27,
      charCode: 27
    });

    // Make sure there is no dialog component
    expect(queryByLabelText("form-dialog-title-Sign up")).toBeNull();
  });
});
