import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TextField, Button } from '@material-ui/core';

const FullScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
const Login = styled.form`
  color: white;
  box-shadow: 1px rgba(0, 0, 0, 0.9);
`;

export default class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }
  onLogin(evt) {
    evt.preventDefault();
    this.props.onLogin(this.state.username);
  }
  onChangeInput(evt) {
    this.setState({ username: evt.currentTarget.value });
  }
  render() {
    return (
      <FullScreen>
        <Login onSubmit={this.onLogin}>
          <TextField
            placeholder="Insira seu nome aqui..."
            style={{ width: 500 }}
            onChange={this.onChangeInput}
          />
          {this.state.username.length > 0 && (
            <Button
              variant="outlined"
              color="primary"
              style={{ marginLeft: 5 }}
              onClick={this.onLogin}
            >
              Go
            </Button>
          )}
        </Login>
      </FullScreen>
    );
  }
}
