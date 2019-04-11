import styled from "styled-components";

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

export const Reminder = styled.div`
  align-items: center;
  border-radius: 20px;
  display: flex;
  height: 30px;
  justify-content: space-between;
  margin-bottom: 5px;
  padding: 5px 10px;
`;

export const Description = styled.div`
  display: inline-block;
`;