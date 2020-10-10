import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Card, CardContent } from '@material-ui/core';
import '../css/contact-me.css'
import { Container, Row, Col, Alert, Spinner } from 'react-bootstrap';


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  card: {
    width: "67%",
    marginTop: 50,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 50,
    backgroundColor: "#e2d9dc"
  },
  submitButton: {
    marginTop: 10,
    float: "right",
    marginRight: "17%",
    marginBottom: 20,
    backgroundColor: "#945c74",
    '&:hover': {
      backgroundColor: "#f2ebe5",
      color: '#2b262d'
  }
  },
  clearButton: {
    marginTop: 10,
    float: "left",
    marginLeft: 23,
    marginBottom: 20
  },
  textLength: {
    width: 500,
    marginLeft: 25
  },
  alert: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "80%",
  },
  spinner: {
    marginTop: 10,
    width: "3rem",
    height: "3rem"
  }
}));

export default function ContactMe({forwardedRef}) {

  const [name, setName] = useState(""); // Set initial state, space used so no error displayed on page load

  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  const [touched, setTouched] = useState([]);

  const [successShow, setSuccessShow] = useState(false); // Keeps track of success alert

  const [failShow, setFailShow] = useState(false); // Keeps track of failure alert

  const [progress, setProgress] = useState(false); // Keeps track of spinner

  const classes = useStyles();

  function getErrorText(label) {
    switch (label) {
      case 'name':
        if (!name && touched.includes('name')) {
          return ("Name can't be empty");
        }
        break;
      case 'email':
        if (email.length < 1 && touched.includes('email')) {
          return ("Email can't be empty");
        }
        else if (touched.includes('email') && email.length > 5 && !email.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)) {
          return ('Invalid Email');
        }
        break;
      case 'message':
        if (!message && touched.includes('message')) {
          return ("Message can't be empty");
        }
        else if (touched.includes('message') && message.length <= 5) {
          return ('Message is too short')
        }
        break;
      default:
        return;
    }
  }

  function resetForm() {
    setName("");
    setEmail("");
    setMessage("");
    setTouched([]);
  }

  function handleBlur(event) {
    console.log(event.target.name)
    if (!touched.includes(event.target.name)) {
      setTouched([
        ...touched,
        event.target.name
      ])
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name && email && message) {
      setProgress(true);
      window.emailjs.send(
        'gmail', 'OnlineResume', { message: message, user_name: name, user_email: email }
      ).then(res => { setSuccessShow(true); setProgress(false); resetForm(); })
        .catch(err => { setFailShow(true); setProgress(false) })
    }
  }

  return (
    <div className="lightBackground" id="contact-me" ref={ forwardedRef } >
        <Container className="containerStyle">
          <Row className="justify-content-md-center">
            <Col md="5">
              <h1 className="sectionTitle">Contact Me</h1>
              <div className="sectionSubTitle">I usually respond pretty quickly, technology is great </div>
              <hr className='horizontalLine' />
            </Col>
          </Row>
          <div className="d-flex justify-content-center">
            {progress && <Spinner animation="border" variant="primary" className={classes.spinner} size="lg" />}
          </div>
          <Alert show={successShow} variant="success" className={classes.alert}>
            <Alert.Heading>Message Sent!</Alert.Heading>
            <p>
              Thanks for the message! Please allow a day or two for me to respond.
        </p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => setSuccessShow(false)} variant="outline-success">
                Click here to close
          </Button>
            </div>
          </Alert>
          <Alert show={failShow} variant="danger" className={classes.alert}>
            <Alert.Heading> Oh No, the Message Failed to Send!</Alert.Heading>
            <p>
              Uh-Oh... Something went wrong. Please try again. If the problem persists, please reach out to me in one of the ways specified below, and let me know.
        </p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => setFailShow(false)} variant="outline-danager">
                Click here to close
          </Button>
            </div>
          </Alert>
          <Card className={classes.card}>
            <CardContent>
              <form id="contactForm" className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
                <div className={classes.margin}>
                  <Grid container spacing={1} alignItems="flex-end">
                    <TextField
                      error={!name && touched.includes("name")} // Check if array has name, if so then it was touched
                      helperText={getErrorText('name')} // Only show helper text on error
                      id="filled-required"
                      label="Name"
                      name="name"
                      value={name}
                      onBlur={(e) => handleBlur(e)}
                      required
                      variant="outlined"
                      margin="dense"
                      className={classes.textLength}
                      onChange={e => setName(e.target.value)} // Set state hook to new value everytime it changes
                    />
                  </Grid>
                </div>
                <div className={classes.margin}>
                  <Grid container spacing={1} alignItems="flex-end">
                    <TextField
                      error={(!email && touched.includes("email")) || (touched.includes("email") && email.length > 5 && !email.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/))}
                      helperText={getErrorText('email')}
                      id="filled-required"
                      label="Email"
                      name="email"
                      value={email}
                      onBlur={(e) => handleBlur(e)}
                      required
                      variant="outlined"
                      margin="dense"
                      className={classes.textLength}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </Grid>
                </div>
                <div>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <TextField
                        error={(!message && touched.includes("message")) || (touched.includes("message") && message.length <= 5)}
                        helperText={getErrorText('message')}
                        id="outlined-multiline-static"
                        label="Message"
                        name="message"
                        value={message}
                        onBlur={(e) => handleBlur(e)}
                        required
                        multiline
                        rows={10}
                        rowsMax={10}
                        className={classes.textLength}
                        variant="outlined"
                        margin="dense"
                        onChange={e => setMessage(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                </div>
                <Row>
                  <Col>
                  </Col>
                  <Col>
                    <Button
                      className={classes.submitButton}
                      variant="contained"
                      type="submit"> Send Message </Button>
                  </Col>
                </Row>
              </form>
            </CardContent>
          </Card>
        </Container>
    </div>
  );
}
