import { SET_ALL_MATCHES, SET_GROUPS } from "../actions/constants";

function games(
  state = {
    all: [],
    current: [],
    groups: []
  },
  action
) {
  switch (action.type) {
    case SET_ALL_MATCHES:
      console.log(action);
      return {
        ...state,
        all: action.payload
      };

    case SET_GROUPS:
      console.log(action);
      return {
        ...state,
        groups: action.payload
      };

    default:
      return state;
  }
}

export default games;
