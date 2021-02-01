import React from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/phonebook-actions';
import PropTypes from 'prop-types';
import s from '../styles/Input.module.css';

const Filter = ({ value, onChange }) => (
  <label className={s.Label}>
    Find contacts by name
    <input type="text" value={value} onChange={onChange} className={s.Input} />
  </label>
);

const mapStateToProps = state => ({
  value: state.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(changeFilter(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
