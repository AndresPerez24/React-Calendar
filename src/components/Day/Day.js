import React, { Fragment } from "react";

import { Icon } from "antd";
import moment from "moment";
import {
  DayBlock,
  Number,
  DeleteReminder,
  Reminder,
  Description,
  DayHeader,
  ReminderContainer,
  ButtonModal
} from "../../styles";
import PropTypes from "prop-types";

const Day = props => {
  const { data, showModal, deleteReminder } = props;
  const { number, reminders } = data;

  const onClickDescription = reminder => {
    const { selectReminder, showModal, data } = props;
    selectReminder(reminder);
    showModal(data);
  };

  return (
    <DayBlock type="primary">
      {!!number && (
        <Fragment>
          <DayHeader>
            <Number>{number}</Number>
            <ButtonModal
              onClick={() => showModal(data)}
              type="primary"
              shape="circle"
              icon="plus"
              size="small"
            />
          </DayHeader>
          <ReminderContainer>
            {reminders.map(({ text, time, color, id }) => (
              <Reminder key={id} style={{ backgroundColor: color }}>
                <Description
                  onClick={() => onClickDescription({ text, time, color, id })}
                >
                  {moment(time).format("hh:mm")}
                  {" - "} {text}
                </Description>
                <DeleteReminder onClick={() => deleteReminder(id)}>
                  <Icon type="close" />
                </DeleteReminder>
              </Reminder>
            ))}
          </ReminderContainer>
        </Fragment>
      )}
    </DayBlock>
  );
};

Day.propTypes = {
  data: PropTypes.object,
  showModal: PropTypes.func,
  deleteReminder: PropTypes.func,
  selectReminder: PropTypes.func
};

export default Day;
