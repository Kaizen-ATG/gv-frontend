import { applyMiddleware, createStore } from "redux";
import rootReducer from "./root.reducer.js";

const middlewares = [];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default {store};