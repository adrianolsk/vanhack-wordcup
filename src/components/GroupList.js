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
    // width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    // minWidth: 700
  },
  small: {
    width: 50
  }
});

const GroupList = ({ classes, groups }) => (
  <Paper className={classes.root}>
    {groups.map(g => (
      <div key={g.group.id}>
        <Toolbar className={classes.root}>
          <div className={classes.title}>
            <Typography variant="title" id="tableTitle">
              Group {g.group.letter}
            </Typography>
          </div>
        </Toolbar>

        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.small} colSpan={2}>
                Team
              </TableCell>
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
            {g.group.teams.map((t, index) => {
              return (
                <TableRow key={t.team.id}>
                  <TableCell className={classes.small}>{index + 1}</TableCell>
                  <TableCell>
                    <img
                      src={`/images/flags/${t.team.id}.png`}
                      alt={t.team.country}
                    />
                    {t.team.country}
                  </TableCell>
                  <TableCell numeric>{t.team.games_played}</TableCell>
                  <TableCell numeric>{t.team.wins}</TableCell>
                  <TableCell numeric>{t.team.draws}</TableCell>
                  <TableCell numeric>{t.team.losses}</TableCell>
                  <TableCell numeric>{t.team.goals_for}</TableCell>
                  <TableCell numeric>{t.team.goals_against}</TableCell>
                  <TableCell numeric>{t.team.goal_differential}</TableCell>
                  <TableCell numeric>{t.team.points}</TableCell>
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
