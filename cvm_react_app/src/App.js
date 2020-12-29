import React, { Component } from 'react';
import { Button, ButtonGroup, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


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
    Typography: {
      button: {
        color: '#d41574'
      }
    ,
    contrastThreshold: 3,
    tonalOffset: 0.2,
   
  },
});

function LoginBox (props) {
  const loginButtonsStyle = {}; 

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
      className="loginBox">
      
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginBox: 1, 
      loginButton: 1
    };
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

        { this.state.loginBox === 1 ? null : <LoginBox 
          buttonSelector = {this.state.loginButton}
          onclickButton1 = {this.handleSigninButton}
          onclickButton2 = {this.handleRegisterButton}
        /> }
        
  
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