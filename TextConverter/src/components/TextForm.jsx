import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
    props.handleOnChange(event);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleCCClick = () => {
    let newText = text
      .split(" ")
      .map((word) => {
        let char = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        return char;
      })
      .join(" ");
    setText(newText);
  };

  // const handleKCClick = () =>{
  //   let newText = text.split(" ").map((word) =>{
  //     let char = word.charAt(0).toUpperCase() + word.slice()
  //     return char
  //   }).join(" ");
  //   setText(newText);
  // }

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  return (
    <div className="container">
      <h1>{props.heading}Enter the Text</h1>
      <div className="mb">
        <textarea
          className="form"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button className="btn" onClick={handleCCClick}>
        Convert to CamelCase
      </button>
      {/* <button className="btn btn-primary mx-2" onClick={handleKCClick}>
          Convert to KebabCase
        </button> */}
      <button className="btn" onClick={handleClearClick}>
        Clear
      </button>

        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
  );
}

// split =
// slice =
// map =
// charAt =
// join =
