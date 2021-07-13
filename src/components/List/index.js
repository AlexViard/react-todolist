/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

const List = ({ tasks, onTaskChecked }) => (
  <ul className="list">
    {tasks.map((elem) => (
      <li key={elem.id}>
        <label className={classNames('list-item', { 'list-item--done': elem.done })}>
          <input data-id={elem.id} type="checkbox" data-done={elem.done} onClick={() => {onTaskChecked(elem)}} defaultChecked={elem.done} />
          {elem.label}
        </label>
      </li>
    ))}
  </ul>
);

List.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  })),
  onTaskChecked: PropTypes.func,
};

List.defaultProps = {
  tasks: [],
  onTaskChecked: () => {},
};

export default List;
