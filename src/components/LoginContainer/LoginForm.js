import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { loginApi, profileStorePack } from 'smart-home-store';
import FormTextField from './../shared/FormTextField';
import FormText from './../shared/FormText';

class FormCardLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      loading: false,
      error: null,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onSubmit(event) {
    const { email, password } = this.state;
    const { invalidateProfile } = this.props;
    event.preventDefault();
    this.setState({ loading: true, error: null });
    loginApi.login(email, password).then(() => {
      invalidateProfile();
    }).catch(error => {
      this.setState({ loading: false });
      this.setState({ error: error.message });
    });
  }

  render() {
    const { loading, email, password, error } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <Card>
          <CardContent>
            <Typography variant="headline">Smart Home Login!</Typography>
            <FormTextField
              id="loginFromEmail"
              name="email"
              label="Email"
              value={email}
              onChange={this.onInputChange}
              autoFocus
              fullWidth
              margin="normal"
              required
              type="email"
              disabled={loading}
            />
            <FormTextField
              id="loginFromPassword"
              name="password"
              label="Password"
              value={password}
              onChange={this.onInputChange}
              fullWidth
              margin="normal"
              required
              type="password"
              disabled={loading}
            />
            <FormText error={error} />
          </CardContent>
          <CardActions>
            <Button color="primary" variant="raised" fullWidth type="submit" disabled={loading}>Loign</Button>
          </CardActions>
        </Card>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  invalidateProfile: () => dispatch(profileStorePack.actionInvalidate()),
});

export default connect(null, mapDispatchToProps)(FormCardLogin);
