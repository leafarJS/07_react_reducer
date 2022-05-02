import { TYPES } from "../actions/countAction";
//TODO: SEGUNDO PARAMETRO DE useReducer
export const countInitialState = { count: 0 };
//TODO: TERCER PARAMETRO DE useReducer
export const countInit = (initialState) => {
  return { count: initialState.count + 100 };
};
//TODO: PRIMER PARAMETRO DE useReducer
export function countReducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { count: state.count + 1 };
    case TYPES.DECREMENT:
      return { count: state.count - 1 };
    case TYPES.INCREMENT_5:
      return { count: state.count + action.payload };
    case TYPES.DECREMENT_5:
      return { count: state.count - action.payload };
    case TYPES.RESET:
      return { count: action.payload };
    default:
      return state;
  }
}
