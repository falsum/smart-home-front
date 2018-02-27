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

import { intermediateFlex } from './styles';

const styles = () => ({
  '@global': {
    body: {
      display: 'flex',
      minHeight: '100vh',
      flexDirection: 'column',
    },
    '#root': intermediateFlex,
  },
  container: intermediateFlex,
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
            <Switch>
              <Route exact path="/" component={PageHome} />
              <Route exact path="/profile" component={PageProfile} />
              <Route component={NotFound} />
            </Switch>
          </LoginContainer>
        </div>
      </Router>
    </Provider>
  );
};

export default withStyles(styles)(App);
