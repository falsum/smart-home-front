import React, { Component } from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      loading: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { email, password } = this.state;

    return (
      <form noValidate onSubmit={this.onSubmit}>
        <Card>
          <CardContent>
            <Typography variant="headline">Hello!</Typography>
            <TextField
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
              inputProps={{ maxLength: 100 }}
            />
            <TextField
              id="loginFromPassword"
              name="password"
              label="Password"
              value={password}
              onChange={this.onInputChange}
              fullWidth
              margin="normal"
              required
              type="password"
              inputProps={{ maxLength: 100 }}
            />
          </CardContent>
          <CardActions>
            <Button color="primary" variant="raised" fullWidth type="submit">Loign</Button>
          </CardActions>
        </Card>
      </form>
    );
  }
}

export default LoginForm;
