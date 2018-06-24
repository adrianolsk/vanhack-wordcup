import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledAppHeader = styled.div`
  background-color: #0b5f91;
  width: 100%;
  h1 {
    margin: 0;
    padding: 20px;
    color: #fff;
  }
`;

const AppHeader = ({ title, children }) => (
  <StyledAppHeader>
    <h1>{title}</h1>
    {children}
  </StyledAppHeader>
);

AppHeader.propTypes = {
  title: PropTypes.string.isRequired
};
export default AppHeader;
