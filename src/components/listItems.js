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
    <ListItem component="a" href="/" button >
        <ListItemIcon>
          <ShowChartOutlined />
        </ListItemIcon>
        <ListItemText primary="Predictions" />
    </ListItem>
    <ListItem component="a" href="/Statistics" button >
      <ListItemIcon>
        <InsertChartOutlinedRounded />
      </ListItemIcon>
      <ListItemText primary="Daily Statistics" />
    </ListItem>
    <ListItem component="a" href="/Blogs" button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Blogs" />
    </ListItem>
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
