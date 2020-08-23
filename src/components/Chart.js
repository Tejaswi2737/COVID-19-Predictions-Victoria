import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer,Tooltip } from 'recharts';
import Title from './Title';
import conf from "./data/conf.json"
// Generate Sales Data
function createData(date, totalCases) {
  return {date, totalCases};
}


export default function Chart(props) {
  const theme = useTheme();
  const data = [
    conf.map(item=>(
        createData(item.Date,item.Victoria)
        ))
    ];
    
  return (
    <React.Fragment>
      <Title>Total Cases Confirmed</Title>
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
              Total Cases Confirmed
            </Label>
          </YAxis>
          <Tooltip/>
          <Line type="monotone" dataKey="totalCases" stroke={theme.palette.primary.main} dot={false} />
          
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}