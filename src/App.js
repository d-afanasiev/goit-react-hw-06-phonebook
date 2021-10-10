import "./App.css";
import PropTypes from "prop-types";
// import { connect } from "react-redux";
import { useSelector } from "react-redux";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

export default function App() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);

  const getVisibleList = () => {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  return (
    <div className="App">
      <h1 className="titlePhonebook">Phonebook</h1>
      <ContactForm />

      <h1 className="titleContacts">Contacts</h1>
      <Filter />
      <ContactList getVisibleContacts={getVisibleList} />
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   contacts: state.contacts.items,
//   filter: state.contacts.filter,
// });

// export default connect(mapStateToProps, null)(App);

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
