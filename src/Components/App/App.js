import React from "react";
import ComA from "../ComA/ComA";
import MyContextProvider from "../Context/MyContextProvider";

const App = () => {
 
  return (
    <>
      <MyContextProvider>
        <div className="col-6 offset-3 text-white mt-3">
          <ComA />
        </div>
      </MyContextProvider>
    </>
  );
};

export default App;
