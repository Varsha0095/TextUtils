import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const uppercaseHandler = () => {
    // console.log("you have clicked the uppercase button");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to UpperCase!', 'success');
  };
  const lowercaseHandler = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to LowerCase!', 'success');
  };

  const ClearHandler = () => {
    setText("");
    props.showAlert('Text has been cleared!', 'success');
  };

  const handleOnChange = (event) => {
    console.log("handle change clicked");
    setText(event.target.value);
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Copied to clipboard!', 'success');
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[  ] + /);
    setText(newText.join(" "));
    props.showAlert('Removed extra spaces!', 'success');
  };
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black' || props.greenMode==='green'?'white':'black' || props.redMode==='red'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode==="dark"?"grey":"white" || props.greenMode==='green'?'grey':'white' || props.redMode==='red'?'grey':'white',
              color: props.mode==="dark" ? "white":"#132a4c" || props.greenMode==='green'?'white':'#132a4c' || props.redMode==='red'?'white':'#132a4c',
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className={`btn btn-primary mx-2`} onClick={uppercaseHandler}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={lowercaseHandler}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={ClearHandler}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h3>Your Text Summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:'Enter something in the textbox above to preview it here'}</p>
      </div>
    </>
  );
}
