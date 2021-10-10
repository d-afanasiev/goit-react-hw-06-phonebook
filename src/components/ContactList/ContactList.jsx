import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
// import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import css from "./ContactList.module.css";

export default function ContactList({ getVisibleContacts, filter }) {
  const dispatch = useDispatch();
  const deleteContact = (value) => dispatch(actions.deleteContacts(value));
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

// const mapDispatchToProps = (dispatch) => ({
//   deleteContact: (value) => dispatch(actions.deleteContacts(value)),
// });

// export default connect(null, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  getVisibleContacts: PropTypes.func,
  deleteContact: PropTypes.func,
};
