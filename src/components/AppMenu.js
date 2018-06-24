import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: solid 3px #ececec;
`;

const StyledItem = styled.li`
  display: inline-block;
  width: 100px;
  padding: 13px;
  border-bottom: solid 5px ${props => (props.active ? "white" : " #0b5f91")};
  text-align: center;
  a {
    color: white;
    text-decoration: none;
    cursor: pointer;
  }

  a.active {
    color: red;
  }
`;

const AppMenu = props => (
  <StyledList>
    <StyledItem active={props.location.pathname === "/"}>
      <Link to="/">Groups</Link>
    </StyledItem>
    <StyledItem active={props.location.pathname === "/matches"}>
      <Link to="/matches">Matches</Link>
    </StyledItem>
  </StyledList>
);

export default withRouter(AppMenu);
