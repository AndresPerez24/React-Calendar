import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Input, TimePicker, Form } from "antd";
import { addReminder } from "../actions/calendarAction";
import { ColorPickerReminder, InputStyled } from "../styles";

class ReminderModal extends Component {
  state = {
    text: "",
    time: null,
    color: "#b7eb8f"
  };

  onChangeTime = time => {
    this.setState({ time });
  };

  onChangeText = e => {
    this.setState({ text: e.target.value });
  };

  onChangeColor = ({ color }) => {
    this.setState({ color });
  };

  resetState = () => {
    this.setState({ text: "", time: null, color: "#b7eb8f" });
  };

  onCancel = () => {
    const { hideModal } = this.props;
    this.resetState();
    hideModal();
  };

  handleOk = () => {
    const { addReminder, hideModal, selectedDay } = this.props;
    const { text, time, color } = this.state;
    hideModal();
    this.resetState();
    addReminder({ id: selectedDay.counter + 1, text, time, color });
  };

  render() {
    const { text, time, color } = this.state;
    const { visible, getFieldDecorator } = this.props;

    const config = {
      rules: [
        { type: "object", required: true, message: "Please select time!" }
      ]
    };

    return (
      <Modal
        title="Reminder"
        visible={visible}
        onOk={this.handleOk}
        onCancel={this.onCancel}
        okText="Ok"
        cancelText="Cancel"
      >
        <Form onSubmit={this.handleSubmit}>
          <InputStyled
            value={text}
            name="text"
            onChange={this.onChangeText}
            placeholder="Write your Reminder here"
            maxlength="30"
          />
          <TimePicker
            use12Hours
            value={time}
            onChange={this.onChangeTime}
            format="HH:mm a"
          />
          <ColorPickerReminder
            color={color}
            animation="slide-up"
            onChange={this.onChangeColor}
          />
        </Form>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  const { selectedDay } = state.calendarReducer;
  return {
    selectedDay
  };
};

const mapDispatchToProps = dispatch => ({
  addReminder: payload => dispatch(addReminder(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReminderModal);
