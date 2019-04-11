export const UPDATE_SELECTED_MONTH = "UPDATE_SELECTED_MONTH";
export const ADD_REMINDER = "ADD_REMINDER";

export const updateSelecteMonth = selectedMonth => ({
  type: UPDATE_SELECTED_MONTH,
  payload: selectedMonth
});

export const addReminder = reminder => ({
  type: ADD_REMINDER,
  payload: reminder
});
