import React, { Component } from 'react';
import Container from './Components/Container/Container';
import Contacts from './Components/Contacts/Contacts';
import ContactForm from './Components/ContactForm/ContactForm';
import Filter from './Components/Filter/Filter';
import style from './App.module.css';

class App extends Component {
  // state = {
  //   filter: '',
  // };

  // handleFilterInput = filterValue => {
  //   this.setState({ filter: filterValue });
  // };

  render() {
    return (
      <Container>
        <h1 className={style.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={style.title}>Contacts:</h2>
        <Filter />
        <Contacts />
      </Container>
    );
  }
}

export default App;
