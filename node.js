const redux = require("redux");

//@ create reducer function
function reducer(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([action.payload]);
    default:
      return state;
  }
}

//@ Create Store
//@  reducer, initial state load value , enhance
const store = redux.createStore(reducer, []);
//@ action
store.dispatch({
  type: "ADD_TODO",
  payload: "Read the docs",
});

//@ get state ain store
console.log(store.getState());
