import React from 'react';
import PropTypes from 'prop-types';

const RoomForm = props => {
  return (
    <div>
      Criar Chat
      <button onClick={props.onExitClick}>Voltar</button>
    </div>
  );
};

RoomForm.propTypes = {
  onExitClick: PropTypes.func
};

export default RoomForm;
