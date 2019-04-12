import React, { Component } from "react";

import ReminderModal from "../ReminderModal";
import Day from "../Day";
import PropTypes from "prop-types";

import {
  Nav,
  Container,
  Month,
  DayTitle,
  Calendar,
  Header,
  CalendarContainer,
  IconStyled
} from "../../styles";

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

    console.log(month);

    return (
      <CalendarContainer>
        <Container>
          <Nav>
            <IconStyled
              type="left"
              disabled={month.number === 1}
              onClick={() => updateSelectedMonth(month.number - 1)}
            />
            <Month>{month.name}</Month>
            <IconStyled
              type="right"
              disabled={month.number === 12}
              onClick={() => updateSelectedMonth(month.number + 1)}
            />
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
      </CalendarContainer>
    );
  }
}

App.propTypes = {
  selectDay: PropTypes.func,
  month: PropTypes.shape({
    number: PropTypes.number,
    name: PropTypes.string,
    days: PropTypes.array
  }),
  updateSelectedMonth: PropTypes.func
};

export default App;
