import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, BarChart, Bar, Tooltip } from 'recharts';
import Title from './Title';
import deathsPred from "./data/deathsPred.json"
// Generate Sales Data
function createData(Date, newDeathsPrediction,actualNewDeaths) {
  return { Date, newDeathsPrediction,actualNewDeaths };
}


export default function ChartNewDeathsPred(props) {
  const theme = useTheme();
  const data = [
    deathsPred.map(item=>(
        createData(item.Date,item.NewDeathsPred,item.NewDeaths)
        ))
    ];
  return (
    <React.Fragment>
      <Title>New Deaths Reported Vs Predictions</Title>
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
          <Line type="monotone" strokeWidth={3}  dataKey="actualNewDeaths" stroke={theme.palette.secondary.main} dot={false} />
          <Line type="monotone" dataKey="newDeathsPrediction" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}