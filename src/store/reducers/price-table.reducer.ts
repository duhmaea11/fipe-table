import {
  PriceTableInterface,
  PriceTableResultInterface,
} from "@/interfaces/price-table.interface";
import store from "@/store";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  form: {} as PriceTableInterface,
  result: {} as PriceTableResultInterface,
};

const { actions: mutations, reducer } = createSlice({
  name: "PriceTable",
  initialState,
  reducers: {
    setForm(state, { payload }) {
      state.form = payload;
    },
    setResult(state, { payload }) {
      state.result = payload;
    },
  },
});

export const priceTableActions = {
  setForm: (payload: PriceTableInterface) =>
    store.dispatch(mutations.setForm(payload)),
  setResult: (payload: PriceTableResultInterface) =>
    store.dispatch(mutations.setResult(payload)),
};

export default reducer;
