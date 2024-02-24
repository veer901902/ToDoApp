import "./List.css";
import { useState } from "react";

function List({ list, setList }) {
  const [selectedIndices, setselectedIndices] = useState([]);

  function handleRemove(index) {
    if (index >= 0 && index < list.length) {
      if (list.length === 1) {
        setList([]);
        setselectedIndices([]);
      } else {
        let updatedList = [...list.slice(0, index), ...list.slice(index + 1)];
        setList(updatedList);
      }
      setselectedIndices(
        selectedIndices
          .filter((elem) => index !== elem)
          .map((elem) => {
            if (elem > index) {
              return elem - 1;
            } else {
              return elem;
            }
          })
      );
    }
  }

  function handleUp(index) {
    if (index !== 0) {
      const elem = list.splice(index, 1);
      const updatedList = [
        ...list.slice(0, index - 1),
        elem,
        ...list.slice(index - 1),
      ];
      setList(updatedList);
      setselectedIndices(
        selectedIndices.map((elem) => {
          if (elem === index - 1) return index;
          if (elem === index) return index - 1;
          return elem;
        })
      );
    }
  }
  function handleDown(index) {
    if (index !== list.length - 1) {
      const elem = list.splice(index, 1);
      const updatedList = [
        ...list.slice(0, index + 1),
        elem,
        ...list.splice(index + 1),
      ];
      setList(updatedList);
      setselectedIndices(
        selectedIndices.map((elem) => {
          if (elem === index) return index + 1;
          if (elem === index + 1) return index;
          return elem;
        })
      );
    }
  }

  function handleClick(index) {
    setselectedIndices([...selectedIndices, index]);
  }

  return (
    <>
      <p style={{ margin: "auto", width: "20%", fontSize: "larger" }}>
        Completed item ({selectedIndices.length}/{list.length})
      </p>
      <ul>
        {list.map((elem, index) => (
          <div key={index} className="item">
            <li
              className={`list-item ${
                selectedIndices.includes(index) ? "clicked" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              {elem}
            </li>
            <button
              className="remove-button"
              onClick={() => handleRemove(index)}
            >
              remove
            </button>
            <button className="up-button" onClick={() => handleUp(index)}>
              Up
            </button>
            <button className="down-button" onClick={() => handleDown(index)}>
              Down
            </button>
          </div>
        ))}
      </ul>
    </>
  );
}

export default List;
