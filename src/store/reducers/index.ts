import { combineReducers } from "@reduxjs/toolkit";
import priceTable from "./price-table.reducer";

export const reducers = { priceTable };

export default combineReducers(reducers);
