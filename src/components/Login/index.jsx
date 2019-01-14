import React, { Component } from 'react';
import styled from 'styled-components';
import { TextField, Button, Typography } from '@material-ui/core';
import { appLogin } from '../../actions';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      showPasswordField: false
    };
    this.handleChangeUsernameInput = this.handleChangeUsernameInput.bind(this);
    this.handleShowPasswordInput = this.handleShowPasswordInput.bind(this);
    this.handleChangeInputPassword = this.handleChangeInputPassword.bind(this);
    this.handleGoBack = this.handleGoBack.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }
  handleChangeUsernameInput(evt) {
    this.setState({ username: evt.currentTarget.value });
  }
  handleChangeInputPassword(evt) {
    this.setState({ password: evt.currentTarget.value });
  }
  handleShowPasswordInput(evt) {
    evt.preventDefault();
    if (this.state.username !== '') {
      this.setState({
        showPasswordField: true
      });
    }
  }
  handleGoBack(evt) {
    evt.preventDefault();
    this.setState({
      showPasswordField: false
    });
  }
  onLogin(evt) {
    evt.preventDefault();
    this.props.appLogin(this.state.username, this.state.password);
  }
  render() {
    return (
      <FullScreen>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '85px 50px',
            border: '1px solid lightgray',
            borderRadius: '5px'
          }}
        >
          <Typography variant="headline" style={{ marginBottom: '20px' }}>
            {this.state.username && this.state.showPasswordField
              ? 'Bem-vindo(a) '
              : 'Login'}
          </Typography>
          <Typography style={{ marginBottom: '40px' }} variant="h5">
            {this.state.username && this.state.showPasswordField && (
              <span style={{ marginLeft: '-35px' }}>
                <Button onClick={this.handleGoBack} style={{ minWidth: 10 }}>
                  <CloseIcon style={{ color: 'gray', fontSize: 20 }} />
                </Button>
                {this.state.username}
              </span>
            )}
          </Typography>
          {!this.state.showPasswordField && (
            <div>
              <Login
                style={{
                  display: 'flex'
                }}
                onSubmit={this.handleShowPasswordInput}
              >
                <TextField
                  variant="outlined"
                  label="Usuário ou telefone"
                  autoFocus={true}
                  style={{ width: 300 }}
                  onChange={this.handleChangeUsernameInput}
                />
              </Login>
              <div>
                {this.state.username.length > 0 && (
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    style={{ float: 'right', margin: '12px 5px' }}
                    onClick={this.handleShowPasswordInput}
                  >
                    Próximo
                  </Button>
                )}
              </div>
              <div style={{ marginTop: '10px' }}>
                <Button style={{ textTransform: 'none' }} color="primary">
                  Esqueceu seu usuário?
                </Button>
              </div>
              <div style={{ marginTop: '30px' }}>
                <Button
                  style={{
                    color: '#3dafd4',
                    letterSpacing: '1px',
                    textTransform: 'none'
                  }}
                >
                  Criar conta
                </Button>
              </div>
            </div>
          )}
          {this.state.showPasswordField && (
            <div>
              <Login style={{ display: 'flex' }} onSubmit={this.onLogin}>
                <TextField
                  type="password"
                  variant="outlined"
                  label="Digite sua senha"
                  autoFocus={true}
                  style={{ width: 300 }}
                  onChange={this.handleChangeInputPassword}
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
              <div style={{ marginTop: '10px' }}>
                <Button style={{ textTransform: 'none' }} color="primary">
                  Esqueceu sua senha?
                </Button>
              </div>
            </div>
          )}
        </div>
      </FullScreen>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ appLogin }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(UserLogin);
