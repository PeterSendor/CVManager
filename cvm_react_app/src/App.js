import { Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import './App.css';

const theme2 = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};

const backgroundTheme = createMuiTheme({
  palette: {
    background: {
      default: "linear-gradient(#e66465, #9198e5)"
    }
  }
});

function App() {

  return  (
   
  <MuiThemeProvider 
    theme={backgroundTheme}
  >
  <CssBaseline />
    
    <Container 
      maxWidth="sm"
      
    >
      <Button 
        color="primary">Hello World
      </Button>;

    </Container> 
    </MuiThemeProvider>
  
  )
  
}

export default App;