import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default function Title(props) {
  return (
    <Typography component="h4" variant="h6" color="primary" gutterBottom className="text-center">
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};
