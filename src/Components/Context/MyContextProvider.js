import React, { useReducer } from "react";
import CounterReducer from "./CounterReducer";
let initialValue = {
  count: 0,
};

export let MyContext = React.createContext();
const MyContextProvider = ({ children }) => {
  let [counter, dispatch] = useReducer(CounterReducer, initialValue);
  let [counter1, dispatch1] = useReducer(CounterReducer, initialValue);
  return (
    <MyContext.Provider value={{ counter, counter1, dispatch, dispatch1 }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
