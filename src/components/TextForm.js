import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)    
    }
    const handleLoClick = ()=>{
      // console.log("uppercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)    
  }
  const handleClearClick = () => {
    setText(''); // Set text to an empty string to clear it
  };

  // Copy Text
  const handleCopy = () => {
      var text = document.getElementById("mybox");
      text.select();
      // text.setSelectionRange(0, 9999);
      navigator.clipboard.writeText(text.value);
  }

  // Remove to Extra Spaces 
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  } 

    const handleonchange = (event)=>{
        // console.log("on change");
        setText(event.target.value)
    }
    const [text, setText] = useState('');
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleonchange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra spaces</button>

    </div>
    <div className="container my-3"></div>
    <h2>Your Text Summary </h2>
    <b>{text.split(" ").length} words and {text.length} characters </b>
    <b>{0.008 * text.split(" ").length} Minutes Read </b>
    <h4>Preview</h4>
    <p>{text}</p>
    </>
  )
}
