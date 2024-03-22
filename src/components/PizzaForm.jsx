import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../app/slices";
import { MAX_ORDERS, TYPES, SIZES, BASES } from "./constants";

const PizzaForm = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.pizza.orders);

  const isDisabled = () => orders.length >= MAX_ORDERS;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const pizzaData = {
      type: formData.get("type"),
      size: formData.get("size"),
      base: formData.get("base"),
    };
    dispatch(placeOrder(pizzaData));
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Type:
          <select name="type">
            {TYPES.map((type) => (
              <option key={type.key} value={type.key}>
                {type.displayName}
              </option>
            ))}
          </select>
        </label>
        <label>
          Size:
          <select name="size">
            {SIZES.map((size) => (
              <option key={size.key} value={size.key}>
                {size.displayName}
              </option>
            ))}
          </select>
        </label>
        <label>
          Base:
          <select name="base">
            {BASES.map((base) => (
              <option key={base.key} value={base.key}>
                {base.displayName}
              </option>
            ))}
          </select>
        </label>
        <button type="submit" disabled={isDisabled()}>
          Place Order
        </button>
      </form>

      {isDisabled() && <p className="warning">Not Taking Any Orders for Now</p>}
    </div>
  );
};

export default PizzaForm;
