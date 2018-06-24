import { SET_ALL_MATCHES, SET_GROUPS } from "./constants";
import { fetchMatches, fetchGroups } from "../api";

export const setMatches = matches => ({
  type: SET_ALL_MATCHES,
  payload: matches
});

// Async call to the api
export const getMatchesAsync = () => dispatch =>
  fetchMatches().then(data => dispatch(setMatches(data)));

export const setGroups = matches => ({
  type: SET_GROUPS,
  payload: matches
});

// Async call to the api
export const getGroupsAsync = () => dispatch =>
  fetchGroups().then(data => dispatch(setGroups(data)));
