import 'typeface-roboto';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import Reboot from 'material-ui/Reboot';
import { withStyles } from 'material-ui/styles';

import MainBar from './components/MainBar';
import PageHome from './components/PageHome';
import PageProfile from './components/PageProfile';
import LoginContainer from './components/LoginContainer';

const styles = theme => ({
  '@global': {
    body: {
      display: 'flex',
      minHeight: '100vh',
      flexDirection: 'column',
    },
    '#root': {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    },
  },
  container: {
    flex: 1,
  },
  main: {
    padding: theme.spacing.unit,
    [theme.breakpoints.up('lg')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: theme.breakpoints.width('lg'),
    },
  },
});

const NotFound = () => <div>Page Not Found</div>;

const App = props => {
  const { classes, store } = props;
  return (
    <Provider store={store}>
      <Router>
        <div className={classes.container}>
          <Reboot />
          <LoginContainer>
            <MainBar />
            <main className={classes.main}>
              <Switch>
                <Route exact path="/" component={PageHome} />
                <Route exact path="/profile" component={PageProfile} />
                <Route component={NotFound} />
              </Switch>
            </main>
          </LoginContainer>
        </div>
      </Router>
    </Provider>
  );
};

export default withStyles(styles)(App);
