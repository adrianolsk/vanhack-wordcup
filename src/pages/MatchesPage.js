import React, { Component } from "react";
import MatchList from "../components/MatchList";
import { getMatchesAsync } from "../actions";
import { connect } from "react-redux";

class MatchesPage extends Component {
  componentDidMount() {
    const { matches, getMatches } = this.props;
    if (matches.length === 0) {
      getMatches();
    }
  }

  render() {
    const { matches } = this.props;
    return <MatchList matches={matches} />;
  }
}

const mapStateToProps = (state, props) => ({
  matches: state.matches
});

const mapDispatchToProps = dispatch => ({
  getMatches: () => dispatch(getMatchesAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchesPage);
