import React from "react";
import AppHeader from "../AppHeader";

import { render, Simulate, wait } from "react-testing-library";
// import "dom-testing-library/extend-expect";

describe(" <AppHeader/>", () => {
  const title = "Test";

  const onChangeSpy = jest.fn();
  const { getByText, getByTestId, container, queryByText } = render(
    <AppHeader title={title} />
  );

  it("renders", () => {
    const titleOfTheHeader = queryByText("Test");
    expect(titleOfTheHeader).toBeTruthy(); // it exist
  });

  it("match snapshot", () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
