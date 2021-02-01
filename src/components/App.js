import { useSelector } from 'react-redux';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { getContacts } from '../redux/phonebook-selector';

function App() {
  const contacts = useSelector(getContacts);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length > 0 ? <Filter /> : <p>Your phonebook is empty</p>}
      <ContactList />
    </div>
  );
}

export default App;
