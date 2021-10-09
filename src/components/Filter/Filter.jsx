import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import css from "./Filter.module.css";

function Filter({ getVisibleList }) {
  const filterList = (e) => {
    getVisibleList(e.target.value);
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        className={css.inputFilter}
        onChange={filterList}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  getVisibleList: (value) => dispatch(actions.filterContacts(value)),
});

Filter.propTypes = {
  filter: PropTypes.string,
  formSubmitHandler: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Filter);
