import React, { Component } from "react";
import { Button } from "antd";
import { connect } from "react-redux";
import ReminderModal from "../components/ReminderModal";
import Day from "../components/Day";
import {
  updateSelectedMonth,
  addReminder,
  selectDay
} from "../actions/calendarAction";
import { Nav, Container, Month, DayTitle, Calendar, Header } from "../styles";
import "../App.scss";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

class App extends Component {
  state = {
    visible: false
  };

  showModal = day => {
    const { selectDay } = this.props;
    this.setState({ visible: true });
    selectDay(day);
  };

  hideModal = () => {
    this.setState({ visible: false });
  };

  render() {
    const { month, updateSelectedMonth } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Container>
          <Nav>
            <Button onClick={() => updateSelectedMonth(month.number - 1)}>
              Previous
            </Button>
            <Month>{month.name}</Month>
            <Button onClick={() => updateSelectedMonth(month.number + 1)}>
              Next
            </Button>
          </Nav>
          <Header>
            {daysOfWeek.map(day => (
              <DayTitle key={day}>{day}</DayTitle>
            ))}
          </Header>
          <Calendar>
            {month.days.map(day => (
              <Day key={day.id} data={day} showModal={this.showModal} />
            ))}
          </Calendar>
        </Container>
        <ReminderModal visible={visible} hideModal={this.hideModal} />
      </div>
    );
  }
}

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
