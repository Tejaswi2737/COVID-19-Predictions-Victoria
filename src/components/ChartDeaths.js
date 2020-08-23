import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, Tooltip } from 'recharts';
import Title from './Title';
import deaths from "./data/deaths.json"
// Generate Sales Data
function createData(date, totalDeaths) {
  return { date, totalDeaths };
}

const data = [
    deaths.map(item=>(
        createData(item.Date,item.Victoria)
    ))
];
export default function ChartDeaths() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Total Deaths Reported</Title>
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
          <XAxis dataKey="date" stroke={theme.palette.text.secondary} >
          </XAxis>
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Total Deaths Reported
            </Label>
          </YAxis>
          <Tooltip/>
          <Line type="monotone" dataKey="totalDeaths" stroke={theme.palette.secondary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}