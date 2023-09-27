const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + action.payload };
    case "dec":
      return { ...state, count: state.count - action.payload };
    case "inc5":
      return { ...state, count: state.count + action.payload };
    case "reset":
      return { ...state, count: 0 };
    default:
      return state;
  }
};
export default reducer;
