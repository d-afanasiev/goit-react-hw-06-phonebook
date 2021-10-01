import "./App.css";
import PropTypes from "prop-types";
import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useLocalStorage("contacts", []);
  const [filter, setFilter] = useState("");

  const filterList = (e) => {
    setFilter(e.target.value);
  };

  const formSubmitHandler = (data) => {
    const findContacts = contacts.find((contact) => contact.name === data.name);

    !findContacts
      ? setContacts([data, ...contacts])
      : alert(`${data.name} is already in contacts.`);
  };

  const getVisibleList = () => {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const deleteContact = (data) => {
    return setContacts(contacts.filter((contact) => contact.id !== data.id));
  };

  return (
    <div className="App">
      <h1 className="titlePhonebook">Phonebook</h1>
      <ContactForm formSubmitHandler={formSubmitHandler} />

      <h1 className="titleContacts">Contacts</h1>
      <Filter filter={filter} filterList={filterList} />
      <ContactList
        getVisibleContacts={getVisibleList}
        deleteContact={deleteContact}
      />
    </div>
  );
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};

export default App;
