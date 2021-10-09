import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import css from "./ContactList.module.css";

function ContactList({ getVisibleContacts, deleteContact, filter }) {
  const visibleList = getVisibleContacts(filter);
  return (
    <ul className={css.listContacts}>
      {visibleList.map((contact) => (
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

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (value) => dispatch(actions.deleteContacts(value)),
});

ContactList.propTypes = {
  getVisibleContacts: PropTypes.func,
  deleteContact: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(ContactList);
