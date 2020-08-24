import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InsertChartOutlinedRounded from '@material-ui/icons/InsertChartOutlinedRounded';
import ShowChartOutlined from '@material-ui/icons/ShowChartOutlined';
import LayersIcon from '@material-ui/icons/Layers';
import {Link } from 'react-router-dom';
export const mainListItems = (
  <div>
    <Link to="/">
      <ListItem component="a"  button >
          <ListItemIcon>
            <ShowChartOutlined />
          </ListItemIcon>
          <ListItemText primary="Predictions" />
      </ListItem>
    </Link>

    <Link to="/Statistics">
      <ListItem component="a"  button >
        <ListItemIcon>
          <InsertChartOutlinedRounded />
        </ListItemIcon>
        <ListItemText primary="Daily Statistics" />
      </ListItem>
    </Link>
    <Link to="/Blogs">
      <ListItem component="a" href="/COVID-19-Predictions-Victoria/Blogs" button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Blogs" />
      </ListItem>
    </Link>


  </div>
);

export const secondaryListItems = (
  <div>
    {/* <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem> */}
  </div>
);
