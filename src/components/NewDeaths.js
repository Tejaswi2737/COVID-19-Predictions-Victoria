import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import conf from "./data/conf.json"
import deaths from "./data/deaths.json"
import newconf from "./data/newconf.json"
import newDeaths from "./data/newDeaths.json"


// Generate Order Data
function createData( Date, Victoria) {
  return { Date, Victoria };
}

const rows = [
  newDeaths.slice().reverse().map(item=>(
    createData(item.Date,item.Victoria)
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

export default function NewDeaths() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>New Deaths Recorded</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell className="text-center">Date</TableCell>
            <TableCell className="text-center">New Deaths</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows[0].map((row) => (
            <TableRow >
              <TableCell className="text-center">{row.Date}</TableCell>
              <TableCell className="text-center">{row.Victoria}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
