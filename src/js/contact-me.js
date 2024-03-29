import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Card, CardContent } from '@material-ui/core';
import * as EmailValidator from 'email-validator';
import '../css/contact-me.css'
import { Container, Row, Col, Alert, Spinner } from 'react-bootstrap';


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  textLength: {
    width: "95%",
    marginLeft: 15
  },
  card: {
    width: "85%",
    marginTop: 30,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 30,
    backgroundColor: "#e2d9dc"
  },
  submitButton: {
    marginTop: 15,
    float: "right",
    marginRight: "8%",
    marginBottom: 15,
    opacity: 0.75,
    backgroundColor: "#945c74",
    '&:hover': {
      backgroundColor: "#945c74",
      color: '#2b262d',
      opacity: 1
  }
  },
  clearButton: {
    marginTop: 10,
    float: "left",
    marginLeft: 23,
    marginBottom: 20
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
    switch (label) { // Switch statement looks to see if the textbox was touched and depending on what the user inputs (or doesn't), returns the error message
      case 'name':
        if (!name && touched.includes('name')) {
          return ("Name can't be empty");
        }
        break;
      case 'email':
        if (email.length < 1 && touched.includes('email')) { // Email is empty and was touched
          return ("Email can't be empty");
        }
        else if (touched.includes('email') && !EmailValidator.validate(email)) { // Email was touched and does not match regex
          return ('Invalid Email');
        }
        break;
      case 'message':
        if (!message && touched.includes('message')) { 
          return ("Message can't be empty");
        }
        else if (touched.includes('message') && message.length <= 5) { // Message has to be more than 5 characters
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
    if (!touched.includes(event.target.name)) { // Touched is an array that holds the values that were touched. Adds the value only once
      setTouched([
        ...touched,
        event.target.name
      ])
    }
  }

  function handleSubmit(e) { // Function sets progress bar, sends email, and returns the alert
    e.preventDefault();
    if (name && email && message && message.length > 5) {
      setProgress(true);
      window.emailjs.send(
        'gmail', 'OnlineResume', { message: message, user_name: name, user_email: email }
      ).then(res => { setSuccessShow(true); setProgress(false); resetForm(); })
        .catch(err => { setFailShow(true); setProgress(false) })
    }
  }

  return (
    <div className="lightBackground" id="contact-me" ref={ forwardedRef } >
        <Container className="containerStyle, ContactMe">
          <Row className="justify-content-md-center">
            <Col md="12">
              <h1 className="sectionTitle">Contact Me</h1>
              <div className="sectionSubTitle"> I'd love to hear from you!  </div>
              <hr className='horizontalLine' />
            </Col>
          </Row>
          <div className="d-flex justify-content-center">
            {progress && <Spinner animation="border" variant="primary" className={classes.spinner} size="lg" />}
          </div>
          <Alert show={successShow} variant="success" className={classes.alert}>
            <Alert.Heading>Message Sent!</Alert.Heading>
            <p>
              Thanks for the message! Please give me a day or two to respond.
        </p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => setSuccessShow(false)} variant="outline-success">
                Click here to close
          </Button>
            </div>
          </Alert>
          <Alert show={failShow} variant="danger" className={classes.alert}>
            <Alert.Heading> Message Failed to Send </Alert.Heading>
            <p>
              Uh-Oh... Something went wrong. Please try again. If the problem persists, please reach out to me on LinkedIn or send me an email (click on the icon in the header/footer),
              and let me know.
        </p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => setFailShow(false)} variant="outline-danger">
                Click here to close
          </Button>
            </div>
          </Alert>
          <Card className={classes.card}>
            <CardContent>
              <form id="contactForm" className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
                <div className={classes.margin}>
                    <TextField
                      error={!name && touched.includes("name")} // Check if array has name, if so then it was touched
                      helperText={getErrorText('name')} // Only show helper text on error
                      id="filled-required"
                      label="Name"
                      name="name"
                      value={name}
                      onBlur={(e) => handleBlur(e)} // When the user clicks on the text box, this method is called
                      required
                      variant="outlined"
                      margin="dense"
                      className={classes.textLength}
                      onChange={e => setName(e.target.value)} // Set state hook to new value every time it changes
                    />
                </div>
                <div className={classes.margin}>
                    <TextField
                      error={(!email && touched.includes("email")) || (touched.includes("email") && !EmailValidator.validate(email))}
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
                </div>
                <div className={classes.margin}>
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
                        className={classes.textLength}
                        variant="outlined"
                        margin="dense"
                        onChange={e => setMessage(e.target.value)}
                      />
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
