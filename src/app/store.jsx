import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import nameSlice from "../features/nameSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    name: nameSlice.reducer,
  },
});

export default store
