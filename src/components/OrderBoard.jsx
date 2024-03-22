import React from "react";
import { useSelector } from "react-redux";
import PizzaCard from "./PizzaCard";
import { STAGES } from "./constants";

const OrderBoard = () => {
  const orders = useSelector((state) => state.pizza.orders);
  const delivered = useSelector((state) => state.pizza.delivered);
  const cancelled = useSelector((state) => state.pizza.cancelled);

  const compare = (a, b) => {
    const timeSpentA = a.timeSpent?.[a?.stage] || 0;
    const timeSpentB = b.timeSpent?.[b?.stage] || 0;
    return timeSpentB - timeSpentA;
  };

  return (
    <div>
      <h2>Pizza Stages Section</h2>
      <div className="kanban-board">
        {Object.keys(STAGES).map((stage) => (
          <div key={stage} className={`kanban-stage stage-${stage}`}>
            <h3 style={{ height: "40px" }}>{STAGES[stage]}</h3>
            {[...orders, ...delivered, ...cancelled]
              .filter((order) => order.stage === +stage)
              .sort(compare)
              .map((order) => (
                <PizzaCard key={order.id} order={order} />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderBoard;
