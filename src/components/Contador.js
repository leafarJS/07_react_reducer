import { useReducer } from "react";
//useReducer recibe 3 parametros, funcion reducer, initialState, init (opcional)

//TODO: SEGUNDO PARAMETRO DE useReducer
const initialState = { count: 0 };
//TODO: TERCER PARAMETRO DE useReducer
const init = (initialState) => {
  return { count: initialState.count + 100 };
};
//
const TYPES = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  INCREMENT_5: "INCREMENT_5",
  DECREMENT_5: "DECREMENT_5",
  RESET: "RESET",
};
//TODO: PRIMER PARAMETRO DE useReducer
function reducer(state, action) {
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

const Contador = () => {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState, init);

  const sumar_5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });
  const sumar = () => dispatch({ type: TYPES.INCREMENT });
  // const sumar = () => setCount(count + 1);
  const restar = () => dispatch({ type: TYPES.DECREMENT });
  const restar_5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });
  // const restar = () => setCount(count - 1);
  const reset = () => dispatch({ type: TYPES.RESET, payload: 0 });
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Count Reducer</h3>
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

export default Contador;
