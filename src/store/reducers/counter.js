import { INCREMENT, DECREMENT, RESET } from "../types";

const INITIAL_STATE = {
  count: 0,
  history: []
};

/* Reducer */
export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
}
