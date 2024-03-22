import React from "react";
import { useDispatch } from "react-redux";
import { moveStage, markDelivered } from "../app/slices";
import { displayTime } from "./utils";
import { MAKING_TIME, DANGER_TIME } from "./constants";

const PizzaCard = ({ order }) => {
  const dispatch = useDispatch();

  const isDelayed = () => {
    const compareTime =
      order.stage === 1 ? MAKING_TIME[order.size] : DANGER_TIME;
    return order.timeSpent?.[order.stage] > compareTime;
  };

  const showNext = () => {
    if (order.stage === 1) {
      return order.timeSpent?.[order.stage] > MAKING_TIME[order.size];
    }
    return true;
  };

  return (
    <div className={`pizza-card ${isDelayed() ? "delayed" : ""}`}>
      <p>Order {("00000" + order.id).slice(-3)}</p>
      {order.stage < 3 ? (
        <>
          <p>{displayTime(order.timeSpent?.[order.stage] || 0)}</p>
          {order.stage < 2 ? (
            showNext() && (
              <button
                onClick={() =>
                  dispatch(
                    moveStage({ orderId: order.id, stage: order.stage + 1 })
                  )
                }
              >
                Next
              </button>
            )
          ) : (
            <button
              onClick={() => dispatch(markDelivered({ ...order, stage: 3 }))}
            >
              Next
            </button>
          )}
        </>
      ) : (
        <p>{order.stage === 3 ? "Picked" : "Cancelled"}</p>
      )}
    </div>
  );
};

export default PizzaCard;
