import { TYPES } from "../actions/crudAction";

export const crudInitalState = { db: null };
export function crudReducer(state, action) {
  switch (action.type) {
    case TYPES.READ_ALL_DATA: {
      // console.log(action.payload);
      return {
        ...state,
        db: action.payload.map((data) => data),
      };
    }
    case TYPES.CREATE_DATA: {
      //console.log(action.payload);
      return {
        ...state,
        db: [...state.db, action.payload],
      };
    }
    case TYPES.UPDATE_DATA: {
      //console.log(action.payload);
      let newData = state.db.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
      return {
        ...state,
        db: newData,
      };
    }
    case TYPES.DELETE_DATA: {
      console.log(action.payload);
      let newData = state.db.filter((el) => el.id !== action.payload);
      return {
        ...state,
        db: newData,
      };
    }
    case TYPES.NOT_DATA: {
      return crudInitalState;
    }
    default:
      return state;
  }
}
