import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Input, TimePicker } from "antd";
import ColorPicker from "rc-color-picker";
import { addReminder } from "../actions/calendarAction";

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
    const { visible } = this.props;

    return (
      <Modal title="Modal" visible={visible} onOk={this.handleOk} onCancel={this.onCancel} okText="Ok" cancelText="Cancel">
        <Input value={text} name="text" onChange={this.onChangeText} placeholder="Write your Reminder here" />
        <TimePicker use12Hours value={time} onChange={this.onChangeTime} format="HH:mm a" />
        <ColorPicker color={color} animation="slide-up" onChange={this.onChangeColor} />
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
