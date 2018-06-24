import React from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import moment from "moment";
import GameResult from "./GameResult";

// Use CSS grid to display 2 matches per row
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
`;

const StyledRight = styled.div`
  text-align: right;
  color: #888;
  font-size: 12px;
`;

const MatchList = props => (
  <div>
    <StyledGrid>
      {props.matches.map(m => (
        <Card key={m.fifa_id}>
          <CardContent>
            <StyledRight> Location: {m.venue}</StyledRight>

            <GameResult
              status={m.status}
              team={m.home_team}
              winner={m.winner_code === m.home_team.code}
            />
            <GameResult
              status={m.status}
              team={m.away_team}
              winner={m.winner_code === m.away_team.code}
            />
            <StyledRight>{moment(m.datetime).format("ddd, DD/MM")}</StyledRight>
          </CardContent>
        </Card>
      ))}
    </StyledGrid>
  </div>
);

export default MatchList;
