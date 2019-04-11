import React, { Component, Fragment } from "react";
import styled from "styled-components";
import "./App.scss";
import { Modal, Input, TimePicker, Button } from "antd";
import "rc-color-picker/assets/index.css";
import ColorPicker from "rc-color-picker";
import moment from "moment";
import { connect } from "react-redux";
import { simpleAction } from "./actions/simpleAction";
import { modalAction } from "./actions/modalAction";
import { updateSelecteMonth, addReminder } from "./actions/calendarAction";

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
    visible: false,
    dayId: null,
    text: "",
    hour: null,
    reminderColor: ""
  };

  simpleAction = () => {
    const { isOpen } = this.props;
    this.props.onModalAction(!isOpen);
  };

  showModal = dayId => {
    this.setState({
      visible: true,
      dayId
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
      text: ""
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onChange = time => {
    this.setState({ hour: time });
  };

  handleColor = data => {
    this.setState({ reminderColor: data.color });
  };

  handleOk = () => {
    const { addReminder } = this.props;
    const { dayId, text, hour, reminderColor } = this.state;
    this.hideModal();
    addReminder({ dayId, text, hour, reminderColor });
  };

  render() {
    const { text, hour, reminderColor } = this.state;
    const { month, updateSelecteMonth } = this.props;
    const format = "HH:mm a";

    return (
      <div className="App">
        <Container>
          <Nav>
            <Button onClick={() => updateSelecteMonth(month.number - 1)}>
              Previous
            </Button>
            <Month>{month.name}</Month>
            <Button onClick={() => updateSelecteMonth(month.number + 1)}>
              Next
            </Button>
          </Nav>

          <header className="App-header">
            {daysOfWeek.map(day => (
              <Day key={day}>{day}</Day>
            ))}
          </header>
          <Calendar>
            {month.days.map(({ number, id, reminders }) => {
              return (
                <Days
                  key={id}
                  type="primary"
                  onClick={() => this.showModal(id)}
                >
                  {!!number && (
                    <Fragment>
                      <Number>{number}</Number>
                      {/* <Close>x</Close> */}
                      {reminders.map(({ text, hour, reminderColor }, i) => (
                        <Reminder
                          key={i}
                          style={{ backgroundColor: reminderColor }}
                        >
                          <DeleteReminder>x</DeleteReminder>
                          <span>{moment(hour).format("hh:mm")}</span>
                          <Description>{text}</Description>
                        </Reminder>
                      ))}
                    </Fragment>
                  )}
                </Days>
              );
            })}
          </Calendar>
          <Modal
            title="Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.hideModal}
            okText="Ok"
            cancelText="Cancel"
          >
            <Input
              value={text}
              name="text"
              onChange={this.handleChange}
              placeholder="Write your Reminder here"
            />
            <TimePicker
              use12Hours
              value={hour}
              onChange={this.onChange}
              defaultValue={moment("00:00", "HH:mm")}
              format={format}
            />
            <ColorPicker
              value={reminderColor}
              animation="slide-up"
              onChange={this.handleColor}
            />
          </Modal>
        </Container>
      </div>
    );
  }
}

const Nav = styled.div`
  text-align: center;
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Month = styled.h1`
  text-align: center;
  display: inline-block;
  margin: 10px 30px;
`;

const Day = styled.div`
  padding: 10px 0;
  text-align: center;
  width: 14.28%;
`;

const Calendar = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Days = styled.div`
  height: 150px;
  width: 14.28%;
  border: 1px solid black;
  cursor: pointer;
`;

const Number = styled.div`
  display: inline-block;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 5px;
`;

const DeleteReminder = styled.div`
  opacity: 0;
  float: right;
  transition: 1s;
  cursor: pointer;
`;

const Reminder = styled.div`
  height: 30px;
  border-radius: 20px;
  padding: 5px 10px;
  margin-bottom: 5px;
  &:hover ${DeleteReminder} {
    opacity: 1;
  }
`;

const Description = styled.div`
  display: inline-block;
`;

const mapStateToProps = state => {
  const { calendarReducer, modalReducer } = state;
  const month = calendarReducer.months[calendarReducer.selectedMonth - 1];
  return {
    month,
    isOpen: modalReducer.isOpen
  };
};

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
  onModalAction: payload => dispatch(modalAction(payload)),
  updateSelecteMonth: payload => dispatch(updateSelecteMonth(payload)),
  addReminder: payload => dispatch(addReminder(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
