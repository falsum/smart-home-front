import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from 'material-ui/Typography';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import FormTextField from './../shared/FormTextField';
import FormText from './../shared/FormText';
import { loginApi } from 'smart-home-store';

class ProfileForm extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <form>
        <Card>
          <CardContent>
            <Typography variant="title">Profile</Typography>
            {/* <FormTextField
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
            /> */}
          </CardContent>
        </Card>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
