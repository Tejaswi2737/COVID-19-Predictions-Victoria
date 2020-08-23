import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, BarChart, Bar, Tooltip } from 'recharts';
import Title from './Title';
import newDeaths from "./data/newDeaths.json"
// Generate Sales Data
function createData(Date, newDeaths) {
  return { Date, newDeaths };
}


export default function ChartNewDeaths(props) {
  const theme = useTheme();
  const data = [
    newDeaths.map(item=>(
        createData(item.Date,item.Victoria)
        ))
    ];
  return (
    <React.Fragment>
      <Title>New Deaths Reported</Title>
      <ResponsiveContainer>
        <LineChart
          data={data[0]}
          margin={{
            top: 0,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="Date" stroke={theme.palette.text.secondary} >
          </XAxis>
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
               New Deaths Reported
            </Label>
          </YAxis>
          <Tooltip/>
          <Line type="monotone" dataKey="newDeaths" stroke={theme.palette.secondary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}