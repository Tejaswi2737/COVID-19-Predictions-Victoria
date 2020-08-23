import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, BarChart, Bar, Tooltip } from 'recharts';
import Title from './Title';
import confPred from "./data/confPred.json"
// Generate Sales Data
function createData(Date, newCasesPredictions,newCasesActual) {
  return { Date, newCasesPredictions ,newCasesActual};
}

export default function ChartNewConf() {
  const theme = useTheme();
  const data = [
    confPred.map(item=>(
        createData(item.Date,item.NewPred,item.NewConf)
        ))
    ];
  return (
    <React.Fragment>
      <Title>New Cases Confirmed Vs Predictions</Title>
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
              New Cases Confirmed
            </Label>
          </YAxis>
          <Tooltip/>
          <Line type="monotone" strokeWidth={3} dataKey="newCasesActual" stroke={theme.palette.secondary.main} dot={false} />
          <Line type="monotone" dataKey="newCasesPredictions" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}