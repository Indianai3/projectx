import { createSlice } from "@reduxjs/toolkit";

interface sidebarOpen {
  sidebarIsOpen: boolean;
}

const initialState: sidebarOpen = {
  sidebarIsOpen: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    changeSidebarCloseAndOpen: (state) => {
      state.sidebarIsOpen = !state.sidebarIsOpen;
    },
  },
});

export const { changeSidebarCloseAndOpen } = sidebarSlice.actions;

export default sidebarSlice.reducer;
