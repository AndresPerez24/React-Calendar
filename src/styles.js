import styled from "styled-components";
import ColorPicker from "rc-color-picker";
import { Input, Button, Icon } from "antd";

export const CalendarContainer = styled.div`
  background-image: linear-gradient(
    to bottom,
    #09203f,
    #1b3454,
    #2d4a69,
    #3f607f,
    #537895
  );
  padding-bottom: 20px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  font-size: 18px;
  color: white;
`;

export const Nav = styled.div`
  text-align: center;
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 90%;
`;

export const Month = styled.h1`
  font-weight: 300;
  display: inline-block;
  margin: 10px 30px;
  text-align: center;
  color: white;
  text-transform: uppercase;
`;

export const DayTitle = styled.div`
  padding: 10px 0;
  text-align: center;
  width: 14.28%;
`;

export const DayHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const Calendar = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-right: 1px solid #00001a3d;
  border-left: 1px solid #00001a3d;
  border-bottom: 1px solid #00001a3d;
`;

export const ButtonModal = styled(Button)`
  background-color: transparent;
  border-color: white;
  opacity: 0;
  &:hover {
    background-color: #00001a3d;
    border-color: #00001a3d;
    color: white;
  }
`;

export const DayBlock = styled.div`
  border: 1px solid #00001a3d;
  color: white;
  height: 150px;
  padding: 10px;
  width: 14.28%;
  &:hover ${ButtonModal} {
    opacity: 1;
  }
`;

export const Number = styled.div`
  display: inline-block;
  padding-bottom: 5px;
`;

export const DeleteReminder = styled.div`
  bottom: 50%;
  cursor: pointer;
  position: absolute;
  right: 10px;
  transform: translateY(50%);
`;

export const ReminderContainer = styled.div`
  height: 90px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Reminder = styled.div`
  border-radius: 20px;
  color: white;
  font-size: 12px;
  height: 30px;
  margin-bottom: 5px;
  padding: 5px 27px 5px 10px;
  position: relative;
  display: flex;
  align-items: center;
`;

export const ColorPickerReminder = styled(ColorPicker)`
  margin: 10px 0;
  display: block;
  & > span {
    width: 100px;
  }
`;

export const InputStyled = styled(Input)`
  margin-bottom: 10px !important;
`;

export const Description = styled.div`
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;

export const IconStyled = styled(Icon)`
  color: white;
  font-size: 20px;
`;
