import { useContext } from "react";
import { MyContext } from "../Context/MyContextProvider";

const ComB = () => {
  let { counter, dispatch } = useContext(MyContext);
  return (
    <>
      <div className="bg-danger mt-4">
        <h1>CounterB:{counter.count}</h1>
        <button onClick={() => dispatch({ type: "inc", payload: 1 })}>+</button>
        <button onClick={() => dispatch({ type: "dec", payload: 1 })}>-</button>
        <button onClick={() => dispatch({ type: "inc5", payload: 5 })}>
          +5
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>reset</button>
        <hr />
      </div>
    </>
  );
};

export default ComB;
