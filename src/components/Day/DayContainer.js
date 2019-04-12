import { connect } from "react-redux";
import { deleteReminder, selectReminder } from "../../actions/calendarAction";
import Day from "./Day";

const mapDispatchToProps = dispatch => ({
  deleteReminder: payload => dispatch(deleteReminder(payload)),
  selectReminder: payload => dispatch(selectReminder(payload))
});

export default connect(
  undefined,
  mapDispatchToProps
)(Day);
