import {createStore,applyMiddleware} from "redux";
import productReducer from "./reducers/productReducer";
import thunkMiddleware from "redux-thunk";
// import middleware from "./middleware";

let store=createStore(productReducer,{a:[1,2]},applyMiddleware(thunkMiddleware));
export default store;