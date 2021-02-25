import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Spinner = (props) => {
  return <CircularProgress size={50} {...props} />;
};

export default Spinner;
