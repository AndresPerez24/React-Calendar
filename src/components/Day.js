import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Button, Icon } from "antd";
import moment from "moment";
import {
  DayBlock,
  Number,
  DeleteReminder,
  Reminder,
  Description,
  DayHeader,
  ReminderContainer
} from "../styles";
import { deleteReminder } from "../actions/calendarAction";

function Day({ data, showModal, deleteReminder }) {
  const { number, reminders } = data;
  return (
    <DayBlock type="primary">
      {!!number && (
        <Fragment>
          <DayHeader>
            <Number>{number}</Number>
            <Button
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
                <div>
                  <Description>
                    {moment(time).format("hh:mm")}
                    {" - "} {text}
                  </Description>
                </div>
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
}

const mapDispatchToProps = dispatch => ({
  deleteReminder: payload => dispatch(deleteReminder(payload))
});

export default connect(
  undefined,
  mapDispatchToProps
)(Day);
