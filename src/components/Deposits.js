import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import conf from "./data/conf.json"
import deaths from "./data/deaths.json"
import newconf from "./data/newconf.json"
import newDeaths from "./data/newDeaths.json"

import confPred from "./data/confPred.json"
import deathsPred from "./data/deathsPred.json"


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
    textAlign:"center"
  },
});

export default function Deposits(props) {
  const classes = useStyles();
  const cases=()=>{
    if(props.des==="Total Cases Confirmed"){
        return  conf[conf.length-1].Victoria
    }
    if(props.des==="Total Deaths Reported"){
      return deaths[deaths.length-1].Victoria
    }
    if(props.des==="New Cases Confirmed"){
      return newconf[newconf.length-1].Victoria
    }
    if(props.des==="New Deaths Reported"){
      return newDeaths[newDeaths.length-1].Victoria
    }

    if(props.des==="Total Cases Predicted and Actual"){
      return  `${confPred[conf.length-92].Victoria}(predicted)   ${confPred[conf.length-92].Conf}(confirmed)`
    }
    if(props.des==="Total Deaths Reported and Actual"){
      return  `${deathsPred[deaths.length-99].Victoria}(predicted)    ${deathsPred[deaths.length-99].Deaths}(confirmed)`
    }
   
    if(props.des==="New Cases Predicted and Actual"){
      return  `${confPred[conf.length-92].NewPred}(predicted)     ${confPred[conf.length-92].NewConf}(confirmed)`
    }
    if(props.des==="New Deaths Reported and Actual"){
      return  `${deathsPred[deaths.length-99].NewDeathsPred}(predicted)      ${deathsPred[deaths.length-99].NewDeaths}(confirmed)`
    }
  }
  const dates=()=>{
    if(props.des==="Total Cases Confirmed"){
        return conf[conf.length-1].Date
    }
    if(props.des==="Total Deaths Reported"){
      return deaths[deaths.length-1].Date
    }
    if(props.des==="New Cases Confirmed"){
      return newconf[newconf.length-1].Date
    }
    if(props.des==="New Deaths Reported"){
      return newDeaths[newDeaths.length-1].Date
    }
    if(props.des==="Total Cases Predicted and Actual"){
      return confPred[conf.length-92].Date
    }
    if(props.des==="Total Deaths Reported and Actual"){
      return deathsPred[deaths.length-99].Date
    }
   
    if(props.des==="New Cases Predicted and Actual"){
      return confPred[conf.length-92].Date
    }
    if(props.des==="New Deaths Reported and Actual"){
      return deathsPred[deaths.length-99].Date
    }
  }
  return (
    <React.Fragment>
      <Title>{props.des}</Title>
      <Typography component="p" variant="h5" className="text-center" style={{   display: "flex", flex:1, flexDirection: "column",
    justifyContent: "center"}}>
        {cases()}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext} >
        on {dates()}
      </Typography>
      <div className="text-center">
        <Link  color="primary" target="_blank" href="https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert/coronavirus-covid-19-current-situation-and-case-numbers" >
          View details
        </Link>
      </div>
    </React.Fragment>
  );
}
