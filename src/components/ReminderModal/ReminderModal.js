import React, { Component } from "react";
import { Modal, TimePicker } from "antd";
import { ColorPickerReminder, InputStyled } from "../../styles";
import PropTypes from "prop-types";

class ReminderModal extends Component {
  state = {
    text: "",
    time: null,
    color: "#4c4285"
  };

  static getDerivedStateFromProps = ({ selectedReminder }, state) => {
    if (!state.text) {
      return { ...selectedReminder };
    }
    return {};
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
    this.setState({ text: "", time: null, color: "#4c4285" });
  };

  onCancel = () => {
    const { hideModal, selectReminder } = this.props;
    this.resetState();
    hideModal();
    selectReminder({});
  };

  handleOk = () => {
    const {
      addReminder,
      hideModal,
      selectedDay,
      selectedReminder,
      selectReminder,
      updateReminder
    } = this.props;
    const { text, time, color } = this.state;
    hideModal();
    this.resetState();
    if (selectedReminder.id) {
      updateReminder({ id: selectedReminder.id, text, time, color });
    } else {
      addReminder({ id: selectedDay.counter + 1, text, time, color });
    }
    selectReminder({});
  };

  render() {
    const { text, time, color } = this.state;
    const { visible } = this.props;
    console.log(visible);
    return (
      <Modal
        title="Reminder"
        visible={visible}
        onOk={this.handleOk}
        onCancel={this.onCancel}
        okText="Ok"
        cancelText="Cancel"
        okButtonProps={{ disabled: !time || !text }}
      >
        <InputStyled
          value={text}
          name="text"
          onChange={this.onChangeText}
          placeholder="Write your Reminder here"
          maxLength={30}
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
      </Modal>
    );
  }
}

ReminderModal.propTypes = {
  addReminder: PropTypes.func,
  hideModal: PropTypes.func,
  selectedDay: PropTypes.object,
  selectedReminder: PropTypes.object,
  selectReminder: PropTypes.func,
  updateReminder: PropTypes.func,
  visible: PropTypes.bool
};

export default ReminderModal;
