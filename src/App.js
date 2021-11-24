import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import Employee from './Pages/Employee';
import { makeStyles } from '@material-ui/core';

function App() {

  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh"
    }
  }))

  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Route path='/' component={Homepage} exact />
        <Route path='/employee/:id' component={Employee} />

      </div>
    </BrowserRouter>
  );
}

export default App;
