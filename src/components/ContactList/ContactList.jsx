import PropTypes from "prop-types";
import css from "./ContactList.module.css";

function ContactList({ getVisibleContacts, deleteContact }) {
  return (
    <ul className={css.listContacts}>
      {getVisibleContacts().map((contact) => (
        <li key={contact.id} className={css.item}>
          {contact.name}: {contact.number}
          <button
            type="submit"
            className={css.button}
            onClick={() => deleteContact(contact)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  getVisibleContacts: PropTypes.func,
  deleteContact: PropTypes.func,
};

export default ContactList;
