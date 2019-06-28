import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import TableContext from './Provider';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

export default React.memo(() => {
  const {
    layout: { qHyperCube: cube },
  } = React.useContext(TableContext);
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {cube.qDimensionInfo.map(qDim => (
              <TableCell>{qDim.qFallbackTitle}</TableCell>
            ))}
            {cube.qMeasureInfo.map(qMeasure => (
              <TableCell>{qMeasure.qFallbackTitle}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {cube.qDataPages[0].qMatrix.map(row => (
            <TableRow key={row[0].qText}>
              {row.map(cell => (
                <TableCell>{cell.qText}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
});
