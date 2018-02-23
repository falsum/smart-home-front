import 'typeface-roboto';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import {
  Reboot,
} from 'material-ui';
import { withStyles } from 'material-ui/styles';

import MainBar from './components/MainBar';
import PageHome from './components/PageHome';

const styles = theme => ({
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
        <div>
          <Reboot />
          <MainBar />
          <main className={classes.main}>
            <Switch>
              <Route exact path="/" component={PageHome} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </Router>
    </Provider>
  );
};

export default withStyles(styles)(App);
