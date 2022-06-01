import { increment, decrement } from "./actions";

const initialState = {
  count: 0
};
const counterReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "increment":
      console.log(state.count);
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      return { ...state };
  }
};

export default counterReducer;
