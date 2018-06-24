import axios from "axios";

const fetchMatches = () =>
  axios("https://worldcup.sfg.io/matches/").then(response => response.data);

export { fetchMatches };
