import {applyMiddleware} from 'redux';
import logger from './logger';
// import middlewareChecker from './checker';
import thunk from "redux-thunk";

const middleware=applyMiddleware(logger,thunk);
export default middleware

