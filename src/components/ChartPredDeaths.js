import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, Tooltip } from 'recharts';
import Title from './Title';
import deathsPred from "./data/deathsPred.json"
// Generate Sales Data
function createData(date,predictedDeaths, totalDeaths) {
  return { date,predictedDeaths, totalDeaths };
}

const data = [
    deathsPred.map(item=>(
        createData(item.Date,item.Victoria,item.Deaths)
    ))
];
export default function ChartPredDeaths() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Total Deaths Reported Vs Predictions</Title>
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
          <Line type="monotone" strokeWidth={3} dataKey="totalDeaths" stroke={theme.palette.secondary.main} dot={false} />
          <Line type="monotone" dataKey="predictedDeaths" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}