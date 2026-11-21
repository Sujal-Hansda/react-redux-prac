import counterReducer from "../features/CounterSlice"
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/AuthSlice"

export const store = configureStore({
  reducer:{
    counter:counterReducer,
    auth:authReducer
  },
})
