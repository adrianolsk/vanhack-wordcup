import React from "react";
import MatchList from "../MatchList";

import { render, Simulate, wait } from "react-testing-library";
// import "dom-testing-library/extend-expect";

describe(" <MatchList/>", () => {
  const list = [
    {
      fifa_id: "1",
      venue: "Moscow",
      location: "Luzhniki Stadium",
      status: "completed",
      home_team: {
        country: "Russia",
        code: "RUS",
        goals: 5
      },
      away_team: {
        country: "Saudi Arabia",
        code: "KSA",
        goals: 0
      }
    }
  ];
  const onChangeSpy = jest.fn();
  const { getByText, getByTestId, container, queryByText } = render(
    <MatchList matches={list} />
  );

  it("render correct number of matches", () => {
    expect(getByTestId("match-grid").children.length).toBe(1);
  });

  // it("display the country name", () => {

  // });
});
