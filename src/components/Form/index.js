import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Form = ({ onSubmitHandler, onChangeHandler, inputValue }) => (
  <form onSubmit={onSubmitHandler} className="form">
    <input type="text" className="form-item" value={inputValue} placeholder="Ajouter une tâche" id="newToDo" onChange={onChangeHandler} />
  </form>
);

Form.propTypes = {
  onSubmitHandler: PropTypes.func,
  onChangeHandler: PropTypes.func,
  inputValue: PropTypes.string,
};

Form.defaultProps = {
  onSubmitHandler: () => {},
  onChangeHandler: () => {},
  inputValue: '',
};
export default Form;
