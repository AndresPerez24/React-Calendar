import styled from "styled-components";
import ColorPicker from "rc-color-picker";
import { Input } from "antd";

export const Header = styled.header`
  background-color: #282c34;
  display: flex;
  justify-content: center;
  font-size: calc(10px + 2vmin);
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
  display: inline-block;
  margin: 10px 30px;
  text-align: center;
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
`;

export const DayBlock = styled.div`
  border: 1px solid black;
  height: 150px;
  padding: 10px;
  width: 14.28%;
`;

export const Number = styled.div`
  display: inline-block;
  padding-bottom: 5px;
`;

export const DeleteReminder = styled.div`
  cursor: pointer;
`;

export const ReminderContainer = styled.div`
  height: 90px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Reminder = styled.div`
  align-items: center;
  border-radius: 20px;
  display: flex;
  height: 30px;
  justify-content: space-between;
  margin-bottom: 5px;
  padding: 5px 10px;
  font-size: 12px;
  color: white;
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

export const Description = styled.p`
  display: inline-block;
  width: 110px;
  margin-top: 4px;
  margin-bottom: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
