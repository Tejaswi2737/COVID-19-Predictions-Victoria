import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';

import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import newconfPred from "./data/confPred.json";
import conf from "./data/conf.json";


// Generate Order Data
function createData( Date, NewPred,NewCases,TotalPred,actualTotal ) {
  return { Date, NewPred,NewCases,TotalPred,actualTotal };
}

const rows = [
    newconfPred.slice(conf.length-100,conf.length).map(item=>(
        createData(item.Date,item.NewPred,item.NewConf,item.Victoria,item.Conf)
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

export default function NewCasesPred() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>New Cases Predicted Vs Actual New Cases Confirmed</Title>
      <TableContainer>
        <Table size="large" stickyHeader aria-label="sticky table" >
          <TableHead>
            <TableRow>
              <TableCell className="text-center">Date</TableCell>
              <TableCell className="text-center">New Cases Predicted</TableCell>
              <TableCell className="text-center">New Cases Confirmed</TableCell>
              <TableCell className="text-center">Total Cases Predicted</TableCell>
              <TableCell className="text-center">Total Cases Confirmed</TableCell>
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
