import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from "./slices";

const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
  },
});

export default store;
