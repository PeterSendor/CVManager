import { Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});
  

function App() {

  return  (

    <Container 
      maxWidth="sm"
    >
      <div className="titleLabel">
        <p 
          className="titleP">CVManager v 1.0
        </p>
      </div>

      <ThemeProvider theme={theme}>
        
      </ThemeProvider>

    </Container> 
    
  
  )
  
}

export default App;