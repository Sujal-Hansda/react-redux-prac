import counterReducer from "../features/CounterSlice"
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer:{
    counter:counterReducer
  },
})
