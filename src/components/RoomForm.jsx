import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  FormControl,
  FormLabel,
  Input,
  Button
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  h5: {
    margin: theme.spacing.unit
  }
});

const RoomForm = props => {
  const { classes } = props;
  console.log(classes);
  return (
    <FormControl>
      <Typography variant="h5" className={classes.h5}>
        Criar Sala
      </Typography>
      <FormLabel htmlFor="">Nome</FormLabel>
      <Input type="text" className={classes.input} />
      <Button
        variant="contained"
        color="primary"
        onClick={props.onAddRoomClick}
        className={classes.button}
      >
        Criar
      </Button>
      <Button
        variant="contained"
        onClick={props.onExitClick}
        className={classes.button}
      >
        Voltar
      </Button>
    </FormControl>
  );
};

RoomForm.propTypes = {
  onExitClick: PropTypes.func
};

export default withStyles(styles)(RoomForm);
