import React from 'react';
import { FormControl, FormHelperText } from 'material-ui/Form';

const FormTextValid = props => {
  const { error, children } = props;

  return (
    <FormControl fullWidth margin="dense" error={!!error}>
      <FormHelperText>
        {!error && children}
        {!!error && error}
        {' '}
      </FormHelperText>
    </FormControl>
  );
};

export default FormTextValid;
