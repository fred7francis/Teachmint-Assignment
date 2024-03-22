import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  delivered: [],
  cancelled: [],
  totalOrders: 0,
};

const getTimeSpent = (stageTimestamps, stage) => {
  const now = new Date().getTime();
  return stageTimestamps[stage] ? now - stageTimestamps[stage] : 0;
};

const updateStageTimestamps = (order, stage) => {
  return {
    ...order.stageTimestamps,
    [stage]: new Date().getTime(),
  };
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    placeOrder: (state, action) => {
      state.orders.push({
        id: state.totalOrders + 1,
        ...action.payload,
        stage: 0,
        stageTimestamps: { 0: new Date().getTime() },
        cancelled: false,
      });
      state.totalOrders++;
    },
    moveStage: (state, action) => {
      const { orderId, stage } = action.payload;
      state.orders = state.orders.map((order) =>
        order.id === orderId
          ? {
              ...order,
              stage,
              stageTimestamps: updateStageTimestamps(order, stage),
            }
          : order
      );
    },
    updateTime: (state) => {
      state.orders = state.orders.map((order) => ({
        ...order,
        timeSpent: {
          ...(order.timeSpent || {}),
          [order.stage]: getTimeSpent(order.stageTimestamps, order.stage),
        },
      }));
    },
    markDelivered: (state, action) => {
      state.orders = state.orders.filter(
        (order) => order.id !== action.payload.id
      );
      state.delivered.push(action.payload);
    },
    markCancelled: (state, action) => {
      state.orders = state.orders.filter(
        (order) => order.id !== action.payload.id
      );
      state.cancelled.push(action.payload);
    },
  },
});

export const {
  placeOrder,
  moveStage,
  updateTime,
  markDelivered,
  markCancelled,
} = pizzaSlice.actions;
export default pizzaSlice.reducer;
