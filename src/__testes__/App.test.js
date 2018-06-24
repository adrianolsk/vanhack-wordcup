import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import axios from "axios";
const MockAdapter = require("axios-mock-adapter");

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);
mock.onAny().reply(200);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
