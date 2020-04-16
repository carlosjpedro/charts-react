import { createStore, applyMiddleware } from "redux";
import { CoronaData } from "./CoronaData";
import logger from "redux-logger";
import thunk from "redux-thunk";

export const configureStore = () => createStore(CoronaData, applyMiddleware(logger, thunk))