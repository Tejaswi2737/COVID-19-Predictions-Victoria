import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems, secondaryListItems } from './listItems';
import Title from './Title';
import covid from "../components/imgs/Math.PNG";
import MathGif from "../components/imgs/MathGif.gif";
import Data from "../components/imgs/Data.gif";
import VicWave from "../components/imgs/VicWave.gif";
import Stay from "../components/imgs/Stay.jpeg";

function Copyright() {
  return (
    <Typography variant="body2" color="textPrimary" align="center">
      {'Data Source © '}
      <a color="inherit" target="_blank" href="https://github.com/CSSEGISandData/COVID-19">
        CSSEGISandData
      </a>{' '}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Blogs() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" style={{color:"white",textDecoration:"none"}}>
            <Typography button  component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Victoria Covid-19 Predictions
            </Typography>
          </Link>

        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>           
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={fixedHeightPaper} style={{minHeight:"400px"}}  >
                <a component="a" target="_blank" href="https://medium.com/@teja37.kota/understanding-the-math-of-covid-19-a2092849ca33" className={fixedHeightPaper} 
                style={{textDecoration:"none",height:"100%",overflowY:"hidden"}}>
                  <Title >Understanding the Math of COVID-19</Title>
                  <CardMedia image={MathGif} style={{minHeight:"70%"}}/>
                  <CardContent component="h6" variant="h6" color="inherit" noWrap className="text-center">
                    Blog presenting the math used for training the available data and predicting the future data
                  </CardContent>
                </a>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={fixedHeightPaper} style={{minHeight:"400px"}}>
                <a component="a" target="_blank" href="https://medium.com/@teja37.kota/modeling-total-cases-and-deaths-of-covid-19-in-victoria-australia-first-wave-b9976dcb5ca8" className={fixedHeightPaper} 
                style={{textDecoration:"none",height:"100%",overflowY:"hidden"}}>
                  <Title>Training Machine for Total Cases and Deaths of COVID-19 in Victoria, Australia (First Wave)</Title>
                  <CardMedia image={Data} style={{minHeight:"60%"}}/>
                  <CardContent component="h6" variant="h6" color="inherit" noWrap className="text-center">
                    Blog presenting the procedure to model and predict the Total Cases and Deaths of COVID-19 in Victoria, Australia.
                  </CardContent>
                </a>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={fixedHeightPaper} style={{minHeight:"400px"}}>
                <a component="a" target="_blank" href="https://medium.com/@teja37.kota/an-understanding-of-the-relation-between-total-cases-and-deaths-reported-for-victora-australia-e667803c3402" className={fixedHeightPaper} 
                style={{textDecoration:"none",height:"100%",overflowY:"hidden"}}>
                  <Title  style={{minHeight:"20%"}}>An understanding of the relation between total cases and deaths reported for Victora, Australia.</Title>
                  <CardMedia image={Stay}  style={{minHeight:"60%"}}/>
                  <CardContent component="h6" variant="h6" color="inherit" noWrap className="text-center">
                    Blog presenting an understanding of relation between the total cases and deaths reported for Victora, Australia
                </CardContent>
                </a>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={fixedHeightPaper} style={{minHeight:"400px"}}>
                <a component="a" target="_blank" href="https://medium.com/@teja37.kota/analyzing-the-second-wave-cases-in-victoria-australia-3f7ae076fa04" className={fixedHeightPaper} 
                style={{textDecoration:"none",height:"100%",overflowY:"hidden"}}>
                  <Title>Analyzing the second wave cases in Victoria, Australia</Title>
                  <CardMedia image={VicWave} style={{minHeight:"60%"}}/>
                  <CardContent component="h6" variant="h6" color="inherit" noWrap className="text-center">
                    Blog presenting analysis of the second wave cases in Victoria, Australia and predicting the cases and possible deaths from the pandemic
                  </CardContent>
                </a>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}