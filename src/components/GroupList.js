import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Toolbar from "@material-ui/core/Toolbar";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  small: {
    width: 50
  },
  country: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center"
  },
  points: {
    fontWeight: "bold",
    fontSize: 18
  }
});

const GroupList = ({ classes, groups }) => (
  <Paper className={classes.root}>
    {groups.map(g => (
      <div key={g.id}>
        <Toolbar className={classes.root}>
          <div className={classes.title}>
            <Typography variant="title" id="tableTitle">
              Group {g.letter}
            </Typography>
          </div>
        </Toolbar>

        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell numeric>Position</TableCell>
              <TableCell>Team</TableCell>
              <TableCell numeric>M</TableCell>
              <TableCell numeric>W</TableCell>
              <TableCell numeric>D</TableCell>
              <TableCell numeric>L</TableCell>
              <TableCell numeric>GF</TableCell>
              <TableCell numeric>GA</TableCell>
              <TableCell numeric>GD</TableCell>
              <TableCell numeric>Pts</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {g.ordered_teams.map((t, index) => {
              return (
                <TableRow key={t.id}>
                  <TableCell numeric className={classes.small}>
                    {index + 1}
                  </TableCell>
                  <TableCell className={classes.country}>
                    <img
                      src={`/images/flags/${t.fifa_code}.png`}
                      alt={t.country}
                    />
                    {t.country}
                  </TableCell>
                  <TableCell numeric>{t.games_played}</TableCell>
                  <TableCell numeric>{t.wins}</TableCell>
                  <TableCell numeric>{t.draws}</TableCell>
                  <TableCell numeric>{t.losses}</TableCell>
                  <TableCell numeric>{t.goals_for}</TableCell>
                  <TableCell numeric>{t.goals_against}</TableCell>
                  <TableCell numeric>{t.goal_differential}</TableCell>
                  <TableCell numeric className={classes.points}>
                    {t.points}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    ))}
  </Paper>
);

export default withStyles(styles)(GroupList);
