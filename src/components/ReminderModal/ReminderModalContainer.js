import { connect } from "react-redux";
import {
  addReminder,
  selectReminder,
  updateReminder
} from "../../actions/calendarAction";

import ReminderModal from "./ReminderModal";

const mapStateToProps = state => {
  const { selectedDay, selectedReminder } = state.calendarReducer;
  return {
    selectedDay,
    selectedReminder
  };
};

const mapDispatchToProps = dispatch => ({
  addReminder: payload => dispatch(addReminder(payload)),
  updateReminder: payload => dispatch(updateReminder(payload)),
  selectReminder: payload => dispatch(selectReminder(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReminderModal);
