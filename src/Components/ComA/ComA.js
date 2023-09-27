import { useContext } from "react";
import ComB from "../ComB/ComB";
import { MyContext } from "../Context/MyContextProvider";

const ComA = () => {
  let { counter1, dispatch1 } = useContext(MyContext);
  return (
    <>
      <div className="bg-dark">
        <h1>CounterA:{counter1.count}</h1>
        <button onClick={() => dispatch1({ type: "inc", payload: 1 })}>
          +
        </button>
        <button onClick={() => dispatch1({ type: "dec", payload: 1 })}>
          -
        </button>
        <button onClick={() => dispatch1({ type: "inc5", payload: 5 })}>
          +5
        </button>
        <button onClick={() => dispatch1({ type: "reset" })}>reset</button>
      </div>
      <ComB />
    </>
  );
};

export default ComA;
