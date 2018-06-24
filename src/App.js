import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import GroupsPage from "./pages/GroupsPage";
import styled from "styled-components";
import AppHeader from "./components/AppHeader";
import AppMenu from "./components/AppMenu";
import MatchesPage from "./pages/MatchesPage";

const Container = styled.div`
  padding: 50px;
`;
class App extends Component {
  render() {
    return (
      <div>
        <AppHeader title="Word Cup 2018">
          <AppMenu />
        </AppHeader>
        <Container>
          <Switch>
            <Route exact path="/" component={GroupsPage} />
            <Route exact path="/matches" component={MatchesPage} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
