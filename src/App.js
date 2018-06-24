import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { getMatchesAsync, getGroupsAsync } from "./actions";
import GroupList from "./components/GroupList";

class App extends Component {
  componentDidMount() {
    this.props.getGroups();
  }
  render() {
    const { groups } = this.props;

    return (
      <div className="App">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Title
            </Typography>
          </Toolbar>
        </AppBar>
        <GroupList groups={groups} />
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  matches: state.all,
  groups: state.groups
});

const mapDispatchToProps = dispatch => ({
  getMatches: () => dispatch(getMatchesAsync()),
  getGroups: () => dispatch(getGroupsAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
