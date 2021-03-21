import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  deleteItem,
  setByReload,
} from '../../redux/actions/contactsActions/itemsActions';
import style from './Contacts.module.css';

class Contacts extends Component {
  componentDidUpdate(prevProps, prevState) {
    const { items } = this.props;
    if (prevProps.contacts !== items) {
      const contactsStringify = JSON.stringify(items);
      localStorage.setItem('contacts', contactsStringify);
    }
  }

  componentDidMount() {
    const contactsStringify = localStorage.getItem('contacts');
    if (contactsStringify) {
      const contactsParse = JSON.parse(contactsStringify);
      this.props.reloadPage(contactsParse);
    }
  }
  render() {
    const { items, deleteContact, filter } = this.props;
    const filterInpurt = items.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase()),
    );
    return (
      <ul className={style.list}>
        {filterInpurt.map(el => {
          return (
            <li key={el.id} className={style.item}>
              {el.name}: {el.number}
              <button
                type="button"
                className={style.button}
                onClick={() => deleteContact(el.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

Contacts.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: state.contacts.items,
  filter: state.contacts.filter,
});
const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(deleteItem(id)),
  reloadPage: data => dispatch(setByReload(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
