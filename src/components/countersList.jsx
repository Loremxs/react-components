import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 4, name: "Ложка" },
    { id: 2, value: 1, name: "Вилка" },
    { id: 3, value: 2, name: "Тарелка" },
    { id: 4, value: 1, name: "Набор минималиста" },
  ];
  const [counters, setCounters] = useState(initialState);
  const handleDelete = (id) => {
    const newCounters = counters.filter((counter) => counter.id !== id);
    setCounters(newCounters);
  };
  const handleReset = () => {
    setCounters(initialState);
  };
  const handleIncrement = (id) => {
    const elementIndex = counters.findIndex((counter) => counter.id === id);
    const newCounters = [...counters];
    newCounters[elementIndex].value++;
    setCounters(newCounters);
  };

  const handleDecrement = (id) => {
    const elementIndex = counters.findIndex((counter) => counter.id === id);
    const newCounters = [...counters];
    newCounters[elementIndex].value--;
    setCounters(newCounters);
  };
  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          {...count}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;
