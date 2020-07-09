import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));


export default function ContactMe() {

  const classes = useStyles();

  function getErrorMessage() {

  }

  return (
    <div className="ContactMe">
      <form className={classes.root} noValidate autoComplete="off">
        <div className={classes.margin}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item>
              <TextField
                id="input-with-icon-grid"
                label="Name"
                name= "name"
              />
            </Grid>
          </Grid>
        </div>
        <div className={classes.margin}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item>
              <TextField
                error = { getErrorMessage() }
                id="input-with-icon-grid"
                label="Email"
                name="email"
              />
            </Grid>
          </Grid>
        </div>
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={6}
            variant="outlined"
            name="message"
          />
        </div>
        <Button
         variant="contained" 
         color="primary"
         type="submit"> Submit </Button>
      </form>
    </div>
  );
}