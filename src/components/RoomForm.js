import React from 'react';
import PropTypes from 'prop-types';
import { Typography, FormControl, TextField, Button } from '@material-ui/core';
import styled from 'styled-components';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { withStyles } from '@material-ui/core/styles';

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  letter-spacing: 2px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  justify-content: center;
`;

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

const RoomForm = props => (
  <FormControl style={{ width: '100%', height: '100%' }}>
    <Header>
      <Button onClick={props.onExitClick}>
        <ArrowBack />
      </Button>
      <Typography
        style={{
          fontWeight: 'lighter',
          width: '100%',
          textAlign: 'center',
          marginLeft: '-23px'
        }}
        variant="h5"
      >
        Criar Chat
      </Typography>
    </Header>
    <InputWrapper>
      <TextField
        onChange={props.handleChangeText}
        value={props.name}
        style={{ margin: 15, width: '70%' }}
        label="Nome"
        autoFocus={true}
      />
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={props.onAddBtnClick}
        className={props.classes.button}
      >
        Criar
      </Button>
    </InputWrapper>
  </FormControl>
);

RoomForm.propTypes = {
  onExitClick: PropTypes.func
};

export default withStyles(styles)(RoomForm);
