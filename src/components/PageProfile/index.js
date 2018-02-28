import React from 'react';
import Grid from 'material-ui/Grid';

import Container from './../shared/Container';
import ProfileForm from './ProfileForm';

const PageProfile = () => (
  <Container>
    <Grid container justify="center">
      <Grid item lg={4} md={6} sm={8} xs={12}>
        <ProfileForm />
      </Grid>
    </Grid>
  </Container>
);

export default PageProfile;
