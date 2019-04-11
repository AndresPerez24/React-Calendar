export const ADD_REMINDER = "ADD_REMINDER";
export const DELETE_REMINDER = "DELETE_REMINDER";
export const SELECT_DAY = "SELECT_DAY";
export const UPDATE_SELECTED_MONTH = "UPDATE_SELECTED_MONTH";

export const updateSelectedMonth = selectedMonth => ({
  type: UPDATE_SELECTED_MONTH,
  payload: selectedMonth
});

export const addReminder = reminder => ({
  type: ADD_REMINDER,
  payload: reminder
});

export const deleteReminder = reminderId => ({
  type: DELETE_REMINDER,
  payload: reminderId
});

export const selectDay = day => ({
  type: SELECT_DAY,
  payload: day
});
