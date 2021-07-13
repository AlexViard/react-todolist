import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Counter = ({ nbrTask }) => (
  <p className="counter">{nbrTask} tâche(s) en cours</p>
);

Counter.propTypes = {
  nbrTask: PropTypes.number,
};

Counter.defaultProps = {
  nbrTask: 0,
};

export default Counter;
