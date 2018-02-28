import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class FormTextField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      handled: false,
    };

    this.handleInvalid = this.handleInvalid.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    if (!this.inputRef) {
      return;
    }
    this.inputRef.addEventListener('invalid', this.handleInvalid);
  }

  componentWillUnmount() {
    if (!this.inputRef) {
      return;
    }
    this.inputRef.removeEventListener('invalid', this.handleInvalid);
  }

  onChange(event) {
    const { onChange } = this.props;
    const { handled } = this.state;
    const { target } = event;

    if (!handled) {
      onChange(event);
      return;
    }

    this.setState({
      error: target.validity.valid ? null : target.validationMessage,
    });

    onChange(event);
  }

  handleInvalid(event) {
    event.preventDefault();
    const { target } = event;
    this.setState({ error: target.validationMessage, handled: true });
  }

  render() {
    const {
      id,
      name,
      label,
      value,
      autoFocus,
      fullWidth,
      required,
      type,
      maxLength,
      helperText,
    } = this.props;
    const { error } = this.state;

    const subText = !error ? helperText : error;
    const inputProps = {
      maxLength: maxLength || 100,
    };

    return (
      <TextField
        id={id}
        name={name}
        label={label}
        value={value}
        onChange={this.onChange}
        autoFocus={autoFocus}
        fullWidth={fullWidth}
        margin="dense"
        required={required}
        type={type}
        inputProps={inputProps}
        inputRef={ref => { this.inputRef = ref; }}
        error={!!error}
        helperText={subText || ' '}
      />
    );
  }
}

export default FormTextField;
