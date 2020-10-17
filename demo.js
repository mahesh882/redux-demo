const redux = require("redux");

//@ create reducer function
function reducer(state, action) {
  switch (action.type) {
    case "ADD_COUNT":
      return state + action.payload;
    case "SUB_COUNT":
      return state - action.payload;
    default:
      return state;
  }
}

//@ Create Store
//@  reducer, initial state load value , enhance
const store = redux.createStore(reducer, 5);
//@ action
store.dispatch({
  type: "ADD_COUNT",
  payload: 5,
});

console.log(store.getState());
store.dispatch({
  type: "SUB_COUNT",
  payload: 5,
});

//@ get state ain store
console.log(store.getState());
