const redux = require('redux');
const combineReducers = redux.combineReducers;
const { configureStore} = require('@reduxjs/toolkit');
const reduxLogger = require('redux-logger').default;

const Buy_Cake = 'Buy_Cake';
const Buy_Icecream = 'Buy_Icecream';

const cakeState = {
  noOfCakes: 10,
};

const icecreamState = {
  noOfIcecreams: 20,
};

// Action Creator returns object
function buyCake() {
  return {
    type: Buy_Cake,
  };
}

function buyIcecream() {
  return {
    type: Buy_Icecream,
  };
}

const cakeReducer = (state = cakeState, action) => {
  switch (action.type) {
    case Buy_Cake:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };
    default:
      return state;
  }
};

const icecreamReducer = (state = icecreamState, action) => {
  switch (action.type) {
    case Buy_Icecream:
      return {
        ...state,
        noOfIcecreams: state.noOfIcecreams - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});

const middleware =[reduxLogger];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

console.log('Initial State', store.getState());

const unsubscribe = store.subscribe(() => {});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());

unsubscribe();