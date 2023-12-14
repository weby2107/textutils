import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("UC Button Was Clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  };
  const handleLoClick = () => {
    console.log("LC Button Was Clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  };
  const handleClearText = () => {
    let newText = "";
    setText(newText);
  };
  const handleCopy = () => {
    let copyText = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Text Copied", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
    console.log("On Change");
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          style={{
            backgroundColor: props.mode === "dark" ? "black" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          value={text}
          id="myBox"
          rows="3"
          onChange={handleOnChange}
        />
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1 "
          onClick={handleUpClick}
        >
          Convert To Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary  mx-1 my-1"
          onClick={handleLoClick}
        >
          Convert To Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary  mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary  mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remover Extra Spaces
        </button>
        <button
          className="btn btn-primary  mx-1 my-1"
          onClick={handleClearText}
          disabled={text.length === 0}
        >
          Clear Text
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Text Summary</h1>
        <p>
          Total characters {text.length} <br />
          Total Words{" "}
          {
            text.split(" ").filter(function (num) {
              return num !== "";
            }).length
          }{" "}
          <br />
          Total Minutes to Read{" "}
          {0.008 *
            text.split(" ").filter(function (num) {
              return num !== "";
            }).length}
        </p>
        <h1>Preview</h1>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
