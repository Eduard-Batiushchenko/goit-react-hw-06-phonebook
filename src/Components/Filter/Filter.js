import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleFilterValue } from '../../redux/actions/contactsActions/filterActions';
import style from './Filter.module.css';

const Filter = ({ handleFilterInput }) => {
  return (
    <label className={style.label}>
      Find contacts by name{' '}
      <input
        className={style.input}
        type="text"
        name="filter"
        onChange={e => {
          handleFilterInput(e.currentTarget.value);
        }}
      />
    </label>
  );
};

Filter.propTypes = {
  handleFilterInput: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  handleFilterInput: value => dispatch(handleFilterValue(value)),
});

export default connect(null, mapDispatchToProps)(Filter);
