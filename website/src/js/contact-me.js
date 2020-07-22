import React, {useState} from 'react';
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

export default function ContactMe() {

  const [name, setName] = useState(" ")

  const [email, setEmail] = useState(" ")

  const [message, setMessage] = useState(" ")

  const onSubmit = data => console.log(data);

  const classes = useStyles();

  function checkEmail(e) {
    console.log(e)
    return false;
  } 

  function checkError() {
    console.log(name)
    return (name === 'hi');
    
  } 

  function getErrorText(label) {
    console.log(email)
    switch(label) {
      case 'name':
        if (!name) {
          return ("Name must not be empty");
        }
        break;
      case 'email': 
        if (email.length <= 1 ) {
          return ("Email must be valid");
        }
        break;
      case 'message':
        if (!message)
        return ("Message must not be empty");
        break;
      }
  }

  function handleSubmit(e) {
    
  }

  return (
    <div className="ContactMe">
      <Card className={classes.card}>
        <CardContent>
            <form className={classes.root} autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
              <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <AccountCircle />
                  </Grid>
                  <Grid item>
                    <TextField
                      error={ !name }
                      helperText={ getErrorText('name')}
                      id="input-with-icon-grid"
                      label="Name"
                      name="name"
                      required
                      variant="outlined"
                      margin="dense"
                      onChange={e => setName(e.target.value)}
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
                      error={ !email }
                      helperText={ getErrorText('email')}
                      id="input-with-icon-grid"
                      label="Email"
                      type="email"
                      required
                      variant="outlined"
                      margin="dense"
                      onChange={e => setEmail(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </div>
              <div>
                <TextField
                  error={ !message }
                  helperText={ getErrorText('message')}
                  id="outlined-multiline-static"
                  label="Message"
                  name="message"
                  required
                  multiline
                  rows={10}
                  rowsMax={10}
                  variant="outlined"
                  margin="dense"
                  onChange={e => setMessage(e.target.value)}
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