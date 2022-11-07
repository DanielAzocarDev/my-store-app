import { configureStore } from "@reduxjs/toolkit";
import { itemsSlice } from "./slices/items/itemsSlice";
import { modalsSlice } from "./slices/modals/modals";

export const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    modals: modalsSlice.reducer,
  },
});
