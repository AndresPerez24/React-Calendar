import { getMonthsData } from "../utils";
import moment from "moment";
import _sortBy from "lodash/sortBy";
import { UPDATE_SELECTED_MONTH, ADD_REMINDER } from "../actions/calendarAction";

const initialState = {
  months: getMonthsData(),
  selectedMonth: parseInt(moment().format("M"))
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_MONTH:
      return {
        ...state,
        selectedMonth: action.payload
      };
    case ADD_REMINDER:
      const updatedMonths = state.months.map(month => {
        if (month.number === state.selectedMonth) {
          const days = month.days.map(day => {
            if (day.id === action.payload.dayId)
              return {
                ...day,
                reminders: _sortBy([...day.reminders, action.payload], "hour")
              };
            return day;
          });
          return { ...month, days };
        }
        return month;
      });
      return {
        ...state,
        months: updatedMonths
      };
    default:
      return state;
  }
};
