import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledRow = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr 20px;
  align-items: center;
`;

const StyledCountry = styled.span`
  font-weight: bold;
  color: ${props => (props.winner ? "green" : "#000")};
`;

const GameResult = ({ team, status, winner }) => {
  const { goals, code, country } = team;
  return (
    <StyledRow>
      <img
        style={{ width: 37 }}
        src={`/images/flags/${code}.png`}
        alt={country}
      />

      <StyledCountry winner={winner}>{country}</StyledCountry>

      {status === "completed" && <span>{goals}</span>}
    </StyledRow>
  );
};

GameResult.propTypes = {
  team: PropTypes.object.isRequired,
  status: PropTypes.string,
  winner: PropTypes.bool
};

export default GameResult;
