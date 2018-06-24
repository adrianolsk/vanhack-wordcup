import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import GroupsPage from "./pages/GroupsPage";
import styled from "styled-components";
import AppHeader from "./components/AppHeader";
import AppMenu from "./components/AppMenu";
import MatchesPage from "./pages/MatchesPage";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer from "./reducers";
import { BrowserRouter } from "react-router-dom";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
const Container = styled.div`
  padding: 50px;
`;
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
            <AppHeader title="Word Cup 2018">
              <AppMenu />
            </AppHeader>
            <Container>
              <Switch>
                <Route exact path="/" component={GroupsPage} />
                <Route exact path="/matches" component={MatchesPage} />
              </Switch>
            </Container>
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
