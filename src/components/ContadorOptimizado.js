import { useReducer } from "react";
import {
  countInit,
  countInitialState,
  countReducer,
} from "../reducers/countReducer";
import { TYPES } from "../actions/countAction";

//useReducer recibe 3 parametros, funcion reducer, initialState, init (opcional)

const ContadorOptimizado = () => {
  const [state, dispatch] = useReducer(
    countReducer,
    countInitialState,
    countInit
  );

  const sumar_5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });
  const sumar = () => dispatch({ type: TYPES.INCREMENT });

  const restar = () => dispatch({ type: TYPES.DECREMENT });
  const restar_5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });

  const reset = () => dispatch({ type: TYPES.RESET, payload: 0 });
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Count Reducer Optimized</h3>
      <nav>
        <button onClick={sumar_5}>+5</button>
        <button onClick={sumar}>+</button>
        <button onClick={reset}>0</button>
        <button onClick={restar}>-</button>
        <button onClick={restar_5}>-5</button>
      </nav>
      <h2>{state.count}</h2>
    </div>
  );
};

export default ContadorOptimizado;
