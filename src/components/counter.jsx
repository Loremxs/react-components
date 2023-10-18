import React, { useState } from "react";

const Counter = () => {
  const [count, setCounter] = useState(0);
  const [tags, setTags] = useState(["tag1", "tag2", "tag3"]);
  const formatCount = () => (count === 0 ? "empty" : count);

  const getBageClasses = () => {
    let classes = "badge m-2 ";
    classes += count === 0 ? "bg-danger" : "bg-primary";
    return classes;
  };
  const handleIncrement = () => {
    setCounter((prevState) => prevState + 1);
    // setCounter((prevState) => prevState + 1);
  };
  const handleDecrement = () => {
    setCounter((prevState) => prevState - 1);
  };
  const handleTags = (id) => {
    // setTags(["tag4", "tag5"]);
    setTags((prevState) => prevState.filter((tag) => tag !== id));
  };
  const renderTags = () => {
    return (
      tags.length !== 0 &&
      tags.map((tag) => (
        <li
          key={tag}
          className="btn btn-primary btn-sm m-2"
          onClick={() => handleTags(tag)}
        >
          {tag}
        </li>
      ))
    );
  };
  if (tags.length !== 0) {
    return <ul>{renderTags()}</ul>;
  }
  return (
    <>
      <img src="" alt="" />
      <span className={getBageClasses()}>{formatCount()}</span>
      <button className="btn btn-primary btn-sm m-2" onClick={handleIncrement}>
        +
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={handleDecrement}>
        -
      </button>
    </>
  );
};
export default Counter;
