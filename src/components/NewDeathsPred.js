import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import deathsPred from "./data/deathsPred.json";
import deaths from "./data/deaths.json";
import { TableContainer } from '@material-ui/core';


// Generate Order Data
function createData( Date, NewPred,NewCases,TotalPred,actualTotal ) {
  return { Date, NewPred,NewCases,TotalPred,actualTotal };
}

const rows = [
    deathsPred.slice(deaths.length-100,deaths.length).map(item=>(
        createData(item.Date,item.NewDeathsPred,item.NewDeaths,item.Victoria,item.Deaths)
    ))
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function NewDeathsPred() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>New Deaths Predicted Vs Actual New Deaths Reported</Title>
      <TableContainer>
        <Table size="large">
          <TableHead>
            <TableRow>
              <TableCell className="text-center">Date</TableCell>
              <TableCell className="text-center">New Deaths Predicted</TableCell>
              <TableCell className="text-center">New Deaths Confirmed</TableCell>
              <TableCell className="text-center">Total Deaths Predicted</TableCell>
              <TableCell className="text-center">Total Deaths Confirmed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows[0].map((row) => (
              <TableRow >
                <TableCell className="text-center">{row.Date}</TableCell>
                <TableCell className="text-center">{row.NewPred}</TableCell>
                <TableCell className="text-center">{row.NewCases}</TableCell>
                <TableCell className="text-center">{row.TotalPred}</TableCell>
                <TableCell className="text-center">{row.actualTotal}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}
