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

  const [name, setName] = useState("")

  const [email, setEmail] = useState("")

  const [message, setMessage] = useState("")

  const onSubmit = data => console.log(data);

  const classes = useStyles();

  function handleChange (e, label) {
    switch(label) {
      case 'name':
        break;
        case 'email': 
        break;
        case 'message': 
        break;
    }
    console.log(e.target.value);
  }

  function checkEmail(e) {
    console.log(e)
    return false;
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
                      
                      id="input-with-icon-grid"
                      label="Name"
                      name="name"
                      variant="outlined"
                      margin="dense"
                    //  onChange={e => handleChange(e, 'name')}
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
                      error={e => checkEmail(e)}
                      id="input-with-icon-grid"
                      label="Email"
                      type="email"
                      variant="outlined"
                      margin="dense"
                      onChange={e => handleChange(e, 'email')}
                    />
                  </Grid>
                </Grid>
              </div>
              <div>
                <TextField
               //   error={checkEmpty}
                  id="outlined-multiline-static"
                  label="Message"
                  name="message"
                  multiline
                  rows={10}
                  rowsMax={10}
                  variant="outlined"
                  margin="dense"
                  onChange={e => handleChange(e, 'message')}
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