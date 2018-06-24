import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { getMatchesAsync, getGroupsAsync } from "./actions";
import GroupList from "./components/GroupList";
import { Switch, Route } from "react-router-dom";
import GroupsPage from "./pages/GroupsPage";
import styled from "styled-components";
import AppHeader from "./components/AppHeader";
import AppMenu from "./components/AppMenu";

const Container = styled.div`
  padding: 50px;
`;
class App extends Component {
  render() {
    const { groups } = this.props;

    return (
      <div className="App">
        <AppHeader title="Word Cup 2018">
          <AppMenu />
        </AppHeader>
        <Container>
          <Switch>
            <Route exact path="/" component={GroupsPage} />
            <Route
              exact
              path="/matches"
              component={() => <label>Matches</label>}
            />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
