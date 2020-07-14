import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import { Card, CardContent } from '@material-ui/core';
import '../css/contact-me.css'


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  card: {
    maxWidth: 420,
    marginTop: 50
  },
  submitButton: {
    marginTop: 10,
    float: "right"
  },
}));

const initialValues = {
  name: '',
  email: '',
  message: '',
  errors: {
    name: '',
    email: '',
    message: ''
  }
};


export default function ContactMe() {

  const classes = useStyles();

  function getEmailError() {
    return "You suck"
  }

  function getEmptyError() {
    return "You suck"
  }

  function handleSubmit() {
    return '';
  }
  function handleSubmit() {
    return '';
  }

  function handleChange () {
    return '';
  }

  function handleBlur() {
    return  '';
  }

  return (
    <div className="ContactMe">
      <Card className={classes.card}>
        <CardContent>
            <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
              <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <AccountCircle />
                  </Grid>
                  <Grid item>
                    <TextField
                      error={getEmptyError()}
                      helperText={getEmptyError()}
                      id="input-with-icon-grid"
                      label="Name"
                      name="name"
                      variant="outlined"
                      margin="dense"
                      onChange={handleChange}
                      onBlur={handleBlur}
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
                      error={getEmailError}
                      id="input-with-icon-grid"
                      label="Email"
                      name="email"
                      type="email"
                      variant="outlined"
                      margin="dense"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>
                </Grid>
              </div>
              <div>
                <TextField
                  error={getEmptyError}
                  id="outlined-multiline-static"
                  label="Message"
                  name="message"
                  multiline
                  rows={10}
                  rowsMax={10}
                  variant="outlined"
                  margin="dense"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <Button
                className={classes.submitButton}
                variant="contained"
                color="primary"
                type="submit"> Submit </Button>
            </form>
        </CardContent>
      </Card>
    </div>
  );
}