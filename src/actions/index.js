import axios from "axios";
import { SET_ALL_MATCHES, SET_GROUPS } from "./constants";
import { fetchMatches } from "../api";

export const setMatches = matches => ({
  type: SET_ALL_MATCHES,
  payload: matches
});

export const getMatchesAsync = () => {
  return dispatch => fetchMatches().then(data => dispatch(setMatches(data)));
};

export const setGroups = matches => ({
  type: SET_GROUPS,
  payload: matches
});

export const getGroupsAsync = () => {
  return dispatch => {
    return axios("https://worldcup.sfg.io/teams/group_results").then(
      response => {
        return dispatch(setGroups(response.data));
      }
    );
  };
};
