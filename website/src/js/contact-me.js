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

export default function ContactMe(props) {

  const [name, setName] = useState(" "); // Set initial state, space used so no error displayed on page load

  const [email, setEmail] = useState(" ");

  const [message, setMessage] = useState(" ");

  const [errors, setError] = useState({});

  const classes = useStyles();

  let errorValues = {};

  function getErrorText(label) {
    switch(label) {
      case 'name':
        if (!name) {
          errorValues.name = "Name can't be empty";
          return("Name can't be empty");
        }
        break;
      case 'email': 
        if (email.length < 1) {
          errorValues.email =  "Email can't be empty";
          return ("Email can't be empty");
        }
        else if (email !== ' ' && email.length > 1 && !email.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)) {
          errorValues.email = "Invalid email";
          return ('Invalid Email');
        }
        break;
      case 'message':
        if (!message) {
          errorValues.message = "Message can't be empty";
          return ("Message can't be empty");
        }
        else if (message !== " " && message.length <= 5) {
          errorValues.message = "Message is too short";
          return ('Message is too short')
        }
        break;
      }
      console.log(props);
      // if (errorValues) {
      //     setError(errorValues);
      // }
  }

  function handleBlur() {
    return;
  }


  function handleSubmit(e) {
      e.preventDefault();
      console.log(errors);
      if (name.length <= 1 && name !== ' ') {
          getErrorText('name');
      }
      console.log(name);
  }


  return (
    <div className="ContactMe">
      <Card className={classes.card}>
        <CardContent>
            <form className={classes.root} autoComplete="off"  onSubmit={handleSubmit}>
              <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <AccountCircle />
                  </Grid>
                  <Grid item>
                    <TextField
                      error={ !name  } // Empty name, initialized to be a space so this is not triggered
                      helperText={ getErrorText('name')} // Only show helper text on error
                      id="input-with-icon-grid"
                      label="Name"
                      name="name"
                      required
                      variant="outlined"
                      margin="dense"
                      onBlur = { handleBlur }
                      onChange={e => setName(e.target.value)} // Set state hook to new value everytime it changes
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
                      error={ !email || (email !== " " && email.length > 1 && !email.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)) }
                      helperText={ getErrorText('email')}
                      id="input-with-icon-grid"
                      label="Email"
                      required
                      variant="outlined"
                      margin="dense"
                      onBlur = { handleBlur }
                      onChange={e => setEmail(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </div>
              <div>
                <TextField
                  error={ !message || (message != ' ' && message.length <= 5) }
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
                  onBlur = { handleBlur }
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