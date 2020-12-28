import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = theme => ({
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
      main: '#d41574',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginBox: 1
    };
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
  
        <ThemeProvider theme={theme}>
          <Button 
            variant="contained" 
            color="primary"
            className={classes.root}
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

export default withStyles(useStyles)(App);