import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/phonebook-actions';
import { getFilter } from '../../redux/phonebook-selector';
import s from '../styles/Input.module.css';

function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = event =>
    dispatch(actions.changeFilter(event.currentTarget.value));
  return (
    <label className={s.Label}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={s.Input}
      />
    </label>
  );
}

export default Filter;

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
