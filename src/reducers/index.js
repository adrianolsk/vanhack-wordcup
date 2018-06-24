import { SET_ALL_MATCHES, SET_GROUPS } from "../actions/constants";

function games(
  state = {
    matches: [],
    groups: []
  },
  action
) {
  switch (action.type) {
    case SET_ALL_MATCHES:
      return {
        ...state,
        matches: action.payload
      };

    case SET_GROUPS:
      return {
        ...state,
        groups: action.payload
      };

    default:
      return state;
  }
}

export default games;
