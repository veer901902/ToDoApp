import { useState } from "react";
import "./Input.css"

function Input({list, setList}){

  const [text, setText] = useState("");
   
  function handleChange(e) {
    // console.log(e.target.value);
    setText(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    setList([...list, text]);
    console.log(list);
    console.log(text);
    setText("");
  }

    return (
        <form action="" className="form-container" onSubmit={handleClick}>
        <input
          className="input-field"
          type="text"
          value={text}
          onChange={handleChange}
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    );
}

export default Input;