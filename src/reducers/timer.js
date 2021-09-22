const initialState = 0;

const Timer = (state = initialState, action) => {
  switch (action.type) {
    case "MILISECOND":
      return state + 1;
    case "SECOND":
      return state - 1;
    case "MINUTE":
      return state * 2;
    case "HOURS":
      return state - state;
    default:
      return state;
  }
};

export default Timer;
