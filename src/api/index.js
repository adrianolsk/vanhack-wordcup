import axios from "axios";

const fetchMatches = () =>
  axios("https://worldcup.sfg.io/matches/").then(response => response.data);

const fetchGroups = () =>
  axios("https://worldcup.sfg.io/teams/group_results").then(
    response => response.data
  );

export { fetchMatches, fetchGroups };
