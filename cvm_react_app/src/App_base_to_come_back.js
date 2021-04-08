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
import Avatar from './images/DefaultAvatar.jpg'

const inputStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'block',
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

const loginButtonStyle = theme => ({
  root: {
    position: 'absolute',
    top: '20px',
    right: '10px',
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

const loginButtonStyle = theme => ({
  root: {
    position: 'absolute',
    top: '20px',
    right: '10px',
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

function CvRecordItem (props) {

  return (
  <div className="holderFrame">
  <div className="cvRecordFrame">
    <div className="cvRecordItemContent">
      <div className="cvRecordItemContent_title">
      {props.title}
      </div>
      <div className="cvRecordItemContent_company">
      {props.company}
      </div>
      <div className="cvRecordItemContent_date">
      {props.date}
      </div>
  
  </div>
  
    <div className="cvRecordItemIndicator">

    </div>
    <div className="cvRecordItemX">
      x
    </div>
    <div className="cvRecordItemC">
      c
    </div>
  </div>
  
  </div> 
  )
}
function LeftMenu (props) {
  const cvListDataPack = [
    {
    title: "A", 
    company: "comp1",
    date: "20.02.2020"
    },
    {
    title: "B", 
    company: "comp2",
    date: "20.02.2020"
    },
    {
    title: "C", 
    company: "comp3",
    date: "20.02.2020"
    },
  ]
  const cvItem = 
    cvListDataPack.map((item) => {
      
      return (
      <CvRecordItem 
        title={item.title}
        company={item.company}
        date={item.date}
      />
      )
    })
  
  const leftMenuVisibility = 1;

  if (leftMenuVisibility) {
    
    return (
      <div className="leftMenuHolder">
        
          <div className="closeBar" onClick={function ele () {alert("hej")}}>o</div>
          <div className="leftMenu">
            <div className="titleBox">
              CV list
            </div>
              <div className="cvRecordsList">
                {cvItem}
                
              </div>
          </div>
          
        
      
      </div>
      )
  } else {
    return (
      <div></div>
    )
  }

}
function Positions (props) {
  const positionsFeed = {
    1: {id: 1, 
        title: "Project manager", 
        date: "03/20 - 04/20",
        desc: "The task of the foundation was..."
      }
  }

  return (
    <div className="positionMainDiv">
      <div className="positionsTitleDiv">

      </div>
    </div>
  )
}

function WelcomeBox (props) {
  return (
    <div className="welcomeBoxFrame">
      <div className="welcomeName">{props.welcomeName}</div>
      <div className="welcomeSurname">{props.welcomeSurname}</div>
      <div className="avatar">
      <img 
        src={Avatar} 
        alt="user avatar" 
        width="50px"
        height="50px" 
      
        />
      </div>
      
    </div>
  )
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

  if (option === 1) {
  return (
  <div>
    <div className="login_password_group">
      <TextField
        id="login"
        className={classes.textField}
        variant="filled"
        label="Please enter your login"
        margin="dense"
        onChange={props.onChangeTextAreasSigninHandler}
        
      />
      <TextField
        id="password"
        className={classes.textField}
        variant="filled"
        margin="dense"
        label="Please enter your password"
        type="password" 
        onChange={props.onChangeTextAreasSigninHandler}  
      />    
          
    </div>

      <ThemeProvider theme={theme}>
      <Button 
        variant="contained"
        color="secondary"
        className="sign_in_button_signin"
        onClick = {props.onClickLetStartButton}
        >Let's start!
      </Button>
      </ThemeProvider>
  </div>
  
)} else if (option === 0) {
  return (
    <div>
      <div className="login_password_register_group">
      
        <TextField
          id="name"
          variant="filled"
          label="Name"
          margin="dense"
          className={classes.textField}
          onChange = {props.onChangeTextAreasRegisterHandler}
          helperText={props.nameError}
          error={props.nameShowError}
          
        />
        <TextField
          id="surname"
          variant="filled"
          label="Surname"
          margin="dense"
          className={classes.textField}
          onChange = {props.onChangeTextAreasRegisterHandler}
          helperText={props.surnameError}
          error={props.surnameShowError}
        />
      
      <TextField
          id="email"
          className={classes.textField}
          variant="filled"
          label="Email"
          margin="dense"
          onChange = {props.onChangeTextAreasRegisterHandler}
          helperText={props.emailError}
          error={props.emailShowError}
          
         
        />

        <TextField
          id="password"
          className={classes.textField}
          variant="filled"
          margin="dense"
          label="Password"
          type="password"
          onChange = {props.onChangeTextAreasRegisterHandler}
          helperText={props.passwordError}
          error={props.passwordShowError}
        />   
        <TextField
          id="repeat_password"
          className={classes.textField}
          variant="filled"
          margin="dense"
          label="Repeat password"
          type="password"
          onChange = {props.onChangeTextAreasRegisterHandler}
          helperText={props.passwordDBCheckError}
          error={props.passwordDBCheckShowError}
          
        />     
            
      </div>
  
        <ThemeProvider theme={theme}>
        <Button 
          variant="contained"
          color="secondary"
          className="sign_in_button_register"
          onClick = {props.onClickLetStartButton}
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
      register: ['', '', '', '', ''], 
      signedin: 0,
      recognisedUser: 0, 
      namePrompt: 'max 10 characters, no numbers', 
      nameError: true,
      surnamePrompt: 'max 10 characters, no numbers', 
      surnameError: true,
      emailPrompt: 'please provide correct email',
      emailError: true,
      passwordPrompt: 'please provide password using maximum 10 characters', 
      passwordError: true, 
      passwordDBCheckPrompt: 'provided passwords are not equal or password not provided', 
      passwordDBCheckError: true, 
      welcomeName: "Piotr", 
      welcomeSurname: "Sendor"

      
      
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

  handleRegisterInput = (e) => {
    const register_copy = this.state.register; 

{/*validator input*/}
    let validator = () => {
      let letterFormat = /^[a-zA-Z]+$/; 
      let emailFormat = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;


      if (
        this.state.register[0].match(letterFormat) 
        && this.state.register[0].length < 10) 
          {
            this.setState({
            namePrompt: "done", 
            nameError: false
        })
        
      } else if (
        !this.state.register[0].match(letterFormat) 
        && this.state.register[0].length < 10 ){
          this.setState({
            namePrompt: "Please delete any numbers and special characters"
        })
      } else if (
        this.state.register[0].match(letterFormat) 
        && this.state.register[0].length > 10 ) {
        this.setState({
          namePrompt: "Please provide maximum 10 characters"
        })
      }

            if (
              this.state.register[1].match(letterFormat) 
              && this.state.register[1].length < 10) 
                {
                  this.setState({
                  surnamePrompt: "done", 
                  surnameError: false
              })
              
                } else if (
                  !this.state.register[1].match(letterFormat) 
                  && this.state.register[1].length < 10 ){
                
                    this.setState({
                      surnamePrompt: "Please delete any numbers and special characters"
                  })
                
                } else if (
                  this.state.register[1].match(letterFormat) 
                  && this.state.register[1].length > 10 ) {
              
                    this.setState({
                      surnamePrompt: "Please provide maximum 10 characters"
                    })
                }


            if (
              this.state.register[2].match(emailFormat) 
              ) 
                {
                  this.setState({
                  emailPrompt: "done", 
                  emailError: false
              })
              
            } 
            

            if (
              !this.state.register[2].match(emailFormat) 
            )

                {
                  this.setState({
                  emailPrompt: "Please provide correct email", 
                  emailError: true
              })
              
            } 

            if (
              this.state.register[3].length <= 12 
              && this.state.register[3].length > 6) 
                {
                  this.setState({
                  passwordPrompt: "done", 
                  passwordError: false
              })
              
            } else if (
              this.state.register[3].length > 12 
              || this.state.register[3].length < 6) {
                this.setState({
                  passwordPrompt: "Please provide password contains at least of 6 characters and no more then 12", 
                  passwordError: true
              })
            } 

            if (this.state.register[3] !== this.state.register[4]) {
              this.setState({
                passwordDBCheckPrompt: 'passwords are not equal', 
                passwordDBCheckError: true
              })
            }

            if (this.state.register[3] === this.state.register[4]) {
              this.setState({
                passwordDBCheckPrompt: 'done', 
                passwordDBCheckError: false
              })
            }
         
    }
{/*validator end*/}


    if (e.target.id === "name" ) {
      register_copy[0] = e.target.value; 

      this.setState({
        register: register_copy
      })
     } else if (e.target.id === "surname" ) {
      register_copy[1] = e.target.value; 

      this.setState({
        register: register_copy
      })
     } else if (e.target.id === "email" ) {
      register_copy[2] = e.target.value; 

      this.setState({
        register: register_copy
      })
     } else if (e.target.id === "password" ) {
      register_copy[3] = e.target.value; 

      this.setState({
        register: register_copy
      })

     } else if (e.target.id === "repeat_password" ) {
      register_copy[4] = e.target.value; 

      this.setState({
        register: register_copy
      })
     }

     validator();
  }
   handleSigninInput = (e) => {
    const signin_copy = this.state.signin; 

    if (e.target.id === "login" ) {
      signin_copy[0] = e.target.value; 

      this.setState({
        register: signin_copy
      })
     } else if (e.target.id === "password" ) {
      signin_copy[1] = e.target.value; 

      this.setState({
        register: signin_copy
      })
     } 
  }

  handleLetsStartButton = () => {
    const userDataPack = 
      this.state.register.slice(0,4);

    let checkAllFormErrors = () => {
      if (this.state.nameError
        || this.state.surnameError
        || this.state.emailError
        || this.state.passwordError
        || this.state.passwordDBCheckError) {
          
          return false

        } else {
          
          return true
        }
    }
    checkAllFormErrors()

      
  let fillWelcomeNames = (name, surname) => {
    this.setState({
      welcomeName: name,
      welcomeSurname: surname, 
      recognisedUser: 1, 
      loginBox: 1
    })
  }

    {/* when in login mode*/}
    if (this.state.loginButton === 1) {

      let loginPack = {
        login: this.state.signin[0],
         password: this.state.signin[1]
     }
      
      function checkAllLoginForms (userLoginPack) {
        const that = this; 
        {/* if login anf password are present - send POST*/}

        if (loginPack.login !== null && loginPack.password !== null) {
          
          console.log("wysylka: " + loginPack.login)


          const requestOptions = {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json', 
              'Accept': 'application/json'}, 
              body: JSON.stringify(loginPack)
            }

          fetch('http://localhost:4000/login', requestOptions)
          .then(response => response.json())
          .then((body) => {
            if (body.info) {
              alert(body.info)
            } else {
              fillWelcomeNames(body.name, body.surname)
              console.log(body)
            }
            
            
          });

        } else {
          alert("Please provide correct login/password")
        }
      }

     checkAllLoginForms(); 


    } else if (this.state.loginButton === 0) 
    {
      

      if (checkAllFormErrors()) {

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        'Accept': 'application/json' },
        body: JSON.stringify({userDataPack})
      };

        fetch('http://localhost:4000/register_new_user', requestOptions)
        .then(response => response.json())
        .then((body) => {
            alert(body.info)
             console.log(body);
        });  
    } else {
      alert("Please fix errors in register form")
    }
  
  }} 

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
        maxWidth="sm">

        <div className="titleLabel">
          <p 
            className="titleP"
          >CVManager v 1.0
          </p>
        </div>
        
        
        { this.state.loginBox === 1 ? null : 
          <div className="signin_up_button_frame">
            <div>
            <LoginBox 
              buttonSelector = {this.state.loginButton}
              onclickButton1 = {this.handleSigninButton}
              onclickButton2 = {this.handleRegisterButton}
            /> 
            <LoginTextAreas 
              textAreasSelector = {this.state.loginButton}
              onChangeTextAreasRegisterHandler = {this.handleRegisterInput}
              onChangeTextAreasSigninHandler = {this.handleSigninInput}
              onClickLetStartButton = {this.handleLetsStartButton}
              nameError = {this.state.namePrompt}
              nameShowError = {this.state.nameError}
              surnameError = {this.state.surnamePrompt}
              surnameShowError = {this.state.surnameError}
              emailError = {this.state.emailPrompt}
              emailShowError = {this.state.emailError}
              passwordError = {this.state.passwordPrompt}
              passwordShowError = {this.state.passwordError}
              passwordDBCheckError = {this.state.passwordDBCheckPrompt}
              passwordDBCheckShowError = {this.state.passwordDBCheckError}
            
            />
            </div>
          </div>
        }
        
        <ThemeProvider theme={theme}>
          {this.state.recognisedUser === 1 ? 
          
            <WelcomeBox
              welcomeName = {this.state.welcomeName}
              welcomeSurname = {this.state.welcomeSurname}
            ></WelcomeBox>
          : 
          <Button 
            variant="contained" 
            color="primary"
            className={classes.root}
            onClick={this.handleLoginButton}
          > 
          Sign in/Sign up
            
          </Button>
          }

          <ul className="mainHolder">
            <li>
              <LeftMenu></LeftMenu>
              </li>
            <li>
            <Positions></Positions>
            </li>
              
            </ul>
            
          

          
        </ThemeProvider>
        
        

      </Container> 

    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(loginButtonStyle)(App);