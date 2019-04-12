import { connect } from "react-redux";

import App from "./App";
import {
  updateSelectedMonth,
  addReminder,
  selectDay
} from "../../actions/calendarAction";

const mapStateToProps = state => {
  const { calendarReducer } = state;
  const month = calendarReducer.months[calendarReducer.selectedMonth - 1];
  return {
    month
  };
};

const mapDispatchToProps = dispatch => ({
  addReminder: payload => dispatch(addReminder(payload)),
  selectDay: payload => dispatch(selectDay(payload)),
  updateSelectedMonth: payload => dispatch(updateSelectedMonth(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
