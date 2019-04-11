import { getMonthsData } from "../utils";
import moment from "moment";
import sortBy from "lodash/sortBy";
import {
  UPDATE_SELECTED_MONTH,
  ADD_REMINDER,
  SELECT_DAY,
  DELETE_REMINDER
} from "../actions/calendarAction";

const initialState = {
  months: getMonthsData(),
  selectedMonth: parseInt(moment().format("M")),
  selectedDay: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SELECT_DAY:
      return {
        ...state,
        selectedDay: payload
      };

    case UPDATE_SELECTED_MONTH:
      return {
        ...state,
        selectedMonth: payload
      };

    case ADD_REMINDER:
      return {
        ...state,
        months: state.months.map(month => {
          if (month.number === state.selectedMonth) {
            const days = month.days.map(day => {
              if (day.id === state.selectedDay.id)
                return {
                  ...day,
                  counter: day.counter + 1,
                  reminders: sortBy([...day.reminders, payload], "time")
                };
              return day;
            });
            return { ...month, days };
          }
          return month;
        })
      };

    case DELETE_REMINDER:
      return {
        ...state,
        months: state.months.map(month => {
          if (month.number === state.selectedMonth) {
            const days = month.days.map(day => {
              if (day.id === state.selectedDay.id)
                return {
                  ...day,
                  reminders: day.reminders.filter(
                    reminder => reminder.id !== payload
                  )
                };
              return day;
            });
            return { ...month, days };
          }
          return month;
        })
      };

    default:
      return state;
  }
};
