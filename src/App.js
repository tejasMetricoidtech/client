import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Create from './component/Create';
import Edit from './component/Edit';
import Landing from './component/Landing';
import View from './component/View';
import { createTheme, ThemeProvider } from '@material-ui/core';
import AllUser from './component/AllUser';
import Layout from './components/Layout';
import ManePage from './components/ManePage';


const theme = createTheme({
  palette: {
    primary: {
      main: '#03a9f4'
    },
    secondary: {
      main: '#03a9f4'
    },
    typography: {
      fontFamaly: 'Quicksand',
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBolt: 700
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/create" component={Create} />
            <Route exact path="/edit/:id" component={Edit} />
            <Route exact path="/view/:id" component={View} />
            <Route exact path="/user" component={AllUser} />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
