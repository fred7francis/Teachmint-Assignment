import React, { useEffect } from "react";
import PizzaForm from "./components/PizzaForm";
import MainDisplay from "./components/MainDisplay";
import { useDispatch } from "react-redux";
import { updateTime } from "./app/slices";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => dispatch(updateTime()), 1000);
    return () => clearInterval(timer);
  }, [dispatch]);

  return (
    <div className="app">
      <h1>Pizza Restaurant</h1>
      <PizzaForm />
      <MainDisplay />
    </div>
  );
};

export default App;
