import shortid from 'shortid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { connect } from 'react-redux';
import initialContacts from '../initialContacts.json';

function App(props) {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {props.contacts.length > 0 ? <Filter /> : <p>Your phonebook is empty</p>}
      <ContactList />
    </div>
  );
}
const mapStateToProps = state => ({
  contacts: state.phonebook.contacts,
});

export default connect(mapStateToProps, null)(App);
