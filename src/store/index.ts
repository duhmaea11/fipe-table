import storage from "./storage";
import thunk from "redux-thunk";
import reducers from "@/store/reducers";
import { persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";

const middleware = [thunk];
const persistConfig = { key: "root", storage };
const reducer = persistReducer(persistConfig, reducers);

const store = configureStore({ reducer, middleware });

export default store;
