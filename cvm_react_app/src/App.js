import React, { Component } from 'react';
import { Button, ButtonGroup, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


const inputStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      color: '#d41274', 
      
    },
    textField: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(0),
      marginTop: theme.spacing(1),
      width: '35ch', 
      background: '#fff', 
      borderRadius: 6,
      
    },
  }),
);
const inputStyles_name_surname = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      color: '#d41274', 
      
    },
    textField: {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(1.5),
      marginTop: theme.spacing(1),
      width: '35ch', 
      background: '#fff', 
      borderRadius: 6,
      
    },
  }),
);
const loginButtonStyle = theme => ({
  root: {
    position: 'absolute',
    top: '20px',
    left: '1050px',
    borderRadius: 6,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
});
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#d41274',
      contrastText: '#fff',
    },
    secondary: {
      main: '#d41274',
      contrastText: '#fff',
    },
  },
    contrastThreshold: 3,
    tonalOffset: 0.2,
});
theme.overrides = {
  ...theme.overrides,
  MuiButton: {
      label: {
        ...theme.label,
        color:theme.palette.primary.contrastText,
      }
  },
}

function LoginBox (props) {
  const loginButtonsStyle = {}; 
  const classes = inputStyles();
  const loginBoxStyle = {
    1: "loginBox_signin", 
    0: "loginBox_register"
  };

  if (props.buttonSelector === 1) {

    loginButtonsStyle.button1 = "contained"; 
    loginButtonsStyle.button2 = null;
    loginButtonsStyle.colorButton1 = "primary";  
    loginButtonsStyle.colorButton2 = "secondary"; 
    
  } else if (props.buttonSelector === 0 ) {

    loginButtonsStyle.button1 = null; 
    loginButtonsStyle.button2 = "contained";
    loginButtonsStyle.colorButton1 = "secondary";  
    loginButtonsStyle.colorButton2 = "primary";  

  }

  return (
    <div 
      className={loginBoxStyle[props.buttonSelector]}>
      
      <ButtonGroup 
        aria-label="outlined primary button group"
        className="activeLoginButton"
        >
      <ThemeProvider theme={theme}>
     
        <Button
          variant={loginButtonsStyle.button1}
          color={loginButtonsStyle.colorButton1}
          className="loginButtonCustomisation"
          onClick = {props.onclickButton1}
          
        >Sign in</Button>
      
        <Button 
          variant={loginButtonsStyle.button2}
          color={loginButtonsStyle.colorButton2}
          className="loginButtonCustomisation"
          onClick = {props.onclickButton2}
          >Register
        </Button>

      </ThemeProvider>
      </ButtonGroup>

      
    </div>
  )
}
function LoginTextAreas (props) {
  const classes = inputStyles();
  const option = props.textAreasSelector; 
  const classes2 = inputStyles_name_surname();

  if (option === 1) {
  return (
  <div>
    <div className="login_password_group">
      <TextField
        id="loginTextArea"
        className={classes.textField}
        variant="filled"
        label="Please enter your login"
        margin="dense"
      />
      <TextField
        id="passwordTextArea"
        className={classes.textField}
        variant="filled"
        margin="dense"
        label="Please enter your password"
        type="password"   
      />    
          
    </div>

      <ThemeProvider theme={theme}>
      <Button 
        variant="contained"
        color="secondary"
        className="sign_in_button_signin"
        >Let's start!
      </Button>
      </ThemeProvider>
  </div>
  
)} else if (option === 0) {
  return (
    <div>
      <div className="login_password_register_group">
      <div className="name_surname_group">
        <TextField
          id="name"
          variant="filled"
          label="Name"
          margin="dense"
          className={classes2.textField}
          style={{width: 170}}
        />
        <TextField
          id="surname"
          variant="filled"
          label="Surname"
          margin="dense"
          className={classes2.textField}
          style={{width: 170}}
        />
      </div>
      
        <TextField
          id="newloginTextArea"
          className={classes.textField}
          variant="filled"
          label="write your new login"
          margin="dense"
         
        />
        <TextField
          id="newPasswordTextArea"
          className={classes.textField}
          variant="filled"
          margin="dense"
          label="write your password"
          type="password"
        />   
        <TextField
          id="newPasswordTextArea"
          className={classes.textField}
          variant="filled"
          margin="dense"
          label="repeat your password"
          type="password"
        />     
            
      </div>
  
        <ThemeProvider theme={theme}>
        <Button 
          variant="contained"
          color="secondary"
          className="sign_in_button_register"
          >Let's start!
        </Button>
        </ThemeProvider>
    </div>
    
  )
}

}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginBox: 1, 
      loginButton: 1, 
      signin: [null, null],
      register: [null, null, null, null], 
      signedin: 0
      
    };
  }

  callApi = () => {
    fetch("http://localhost:4000")
      .then(res => res.json())
      .then(res => {
        console.log(res.data.length)
        
      })
      
  }

  componentDidMount() {
    this.callApi(); 
  }

  signinInputHandle = (e) => {
    if (e.target.value === 'signin' ) {
      alert("hello")
    }
  }

  handleSigninButton = () => {
    this.setState({
      loginButton: 1
    })
  }
  handleRegisterButton = () => {
    this.setState({
      loginButton: 0
    })
  }
  handleLoginButton = () => {
    
    this.setState({
      loginBox: -this.state.loginBox
    })
  }
  render () {
    const { classes } = this.props;
    return  (

      <Container 
        maxWidth="sm"
      >
        <div className="titleLabel">
          <p 
            className="titleP"
          >CVManager v 1.0
          </p>
        </div>

        { this.state.loginBox === 1 ? null : 
        <div><LoginBox 
          buttonSelector = {this.state.loginButton}
          onclickButton1 = {this.handleSigninButton}
          onclickButton2 = {this.handleRegisterButton}
        /> 
        <LoginTextAreas 
          textAreasSelector = {this.state.loginButton}
        />
        </div>
        }

        <ThemeProvider theme={theme}>
          <Button 
            variant="contained" 
            color="primary"
            className={classes.root}
            onClick={this.handleLoginButton}
          >
          Sign in/Sign up
            
          </Button>
        </ThemeProvider>
        
      </Container> 

    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(loginButtonStyle)(App);