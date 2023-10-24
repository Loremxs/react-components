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
  const updatedState = [
    { id: 0, value: 1, name: "Ненужная вещь" },
    { id: 1, value: 2, name: "Ложка" },
    { id: 2, value: 3, name: "Вилка" },
    { id: 3, value: 4, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];
  const [counters, setCounters] = useState(initialState);
  const handleDelete = (id) => {
    const newCounters = counters.filter((counter) => counter.id !== id);
    setCounters(newCounters);
  };
  const handleReset = () => {
    setCounters(initialState);
  };
  const handleUpdate = () => {
    setCounters(updatedState);
  };
  return (
    <>
      {counters.map((count) => (
        <Counter key={count.id} {...count} onDelete={handleDelete} />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={handleUpdate}>
        Обновить состояние
      </button>
    </>
  );
};

export default CountersList;
