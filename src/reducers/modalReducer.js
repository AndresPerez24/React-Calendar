import { CHANGE_MODAL_STATUS } from "../actions/modalAction";

export default (state = {}, action) => {
  switch (action.type) {
    case CHANGE_MODAL_STATUS:
      return {
        isOpen: action.payload
      };
    default:
      return state;
  }
};
