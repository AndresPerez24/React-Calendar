import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Button, Icon } from "antd";
import moment from "moment";
import { DayBlock, Number, DeleteReminder, Reminder, Description, DayHeader } from "../styles";
import { deleteReminder } from "../actions/calendarAction";

function Day({ data, showModal, deleteReminder }) {
  const { number, reminders } = data;
  return (
    <DayBlock type="primary">
      {!!number && (
        <Fragment>
          <DayHeader>
            <Number>{number}</Number>
            <Button onClick={() => showModal(data)} type="primary" shape="circle" icon="plus" size="small" />
          </DayHeader>
          {reminders.map(({ text, time, color, id }) => (
            <Reminder key={id} style={{ backgroundColor: color }}>
              <div>
                <span>{moment(time).format("hh:mm")}</span> - <Description>{text}</Description>
              </div>
              <DeleteReminder onClick={() => deleteReminder(id)}>
                <Icon type="close" />
              </DeleteReminder>
            </Reminder>
          ))}
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
