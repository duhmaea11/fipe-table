import { PriceTableResultInterface } from "@/interfaces/price-table.interface";
import store from "@/store";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: {} as PriceTableResultInterface,
};

const { actions: mutations, reducer } = createSlice({
  name: "PriceTable",
  initialState,
  reducers: {
    setResult(state, { payload }) {
      state.result = payload;
    },
  },
});

export const priceTableActions = {
  setResult: (payload: PriceTableResultInterface) =>
    store.dispatch(mutations.setResult(payload)),
};

export default reducer;
