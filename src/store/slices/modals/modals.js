import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addItemModal: false,
};

export const modalsSlice = createSlice({
  name: "Modals",
  initialState,
  reducers: {
    actionModalAddItem: (state) => {
      state.addItemModal = !state.addItemModal;
    },
  },
});

export const { actionModalAddItem } = modalsSlice.actions;
