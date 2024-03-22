// MainDisplay.jsx

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { markCancelled } from "../app/slices";
import { STAGES } from "./constants";
import { displayTime } from "./utils";
import OrderBoard from "./OrderBoard";

const OrderProgress = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.pizza.orders);
  const delivered = useSelector((state) => state.pizza.delivered);

  const calculateTime = (timeSpent) => {
    const totalTime = Object.values(timeSpent).reduce((a, b) => a + b, 0);
    return displayTime(totalTime);
  };

  return (
    <>
      <h2>Orders in Progress</h2>
      <table>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Stage</th>
            <th>Total time spent (time from order placed)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>Order {("000" + order.id).slice(-3)}</td>
              <td>{STAGES[order.stage]}</td>
              <td>{calculateTime(order.timeSpent || {})}</td>
              <td>
                {order.stage < 2 && (
                  <button
                    onClick={() =>
                      dispatch(markCancelled({ ...order, stage: 4 }))
                    }
                  >
                    Cancel
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ color: "green", marginTop: "20px" }}>
        Total order delivered: {("000" + delivered.length).slice(-3)}
      </p>
    </>
  );
};

export default OrderProgress;
