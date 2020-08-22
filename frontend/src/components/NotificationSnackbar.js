import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const NotificationSnackbar = ({ showNotification, setShowNotification, message, type }) => {
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowNotification(false);
  };

  if (type === 'success') {
    return (
      <div className={classes.root}>
        <Snackbar open={showNotification} autoHideDuration={6000} onClose={() => setShowNotification(false)}>
          <Alert onClose={handleClose} severity="success">
            {message}
          </Alert>
        </Snackbar>
      </div>
    );
  }

  if (type === 'error') {
    return (
      <div className={classes.root}>
        <Snackbar open={showNotification} autoHideDuration={6000} onClose={() => setShowNotification(false)}>
          <Alert onClose={handleClose} severity="error">
            {message}
          </Alert>
        </Snackbar>
      </div>
    );
  }
}

export default NotificationSnackbar