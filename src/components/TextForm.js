import React , {useState} from 'react'

export default function TextForm(props) {
    const[text,setText] = useState('')
    const uppercase = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase" , "Success");
    }
    const lowercase = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase" , "Success");
    }
    const clear = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Text cleared" , "Success");
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
      const capitalize = () => {
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
        props.showAlert("Capitalized the words" , "Success");
      }
      const handlecopy = ()=>{
        let newText = document.querySelector("#myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Text Copied" , "Success");
      }
      const rextraspace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra space removed" , "Success");
      }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    return (
        <>
    <div className="container my-3">
        <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
  </div>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"  onClick={uppercase}>Convert to Uppercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"  onClick={lowercase}>Convert to Lowercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"  onClick={clear}>Clear Text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"  onClick={speak}>Sentence Speaker</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"  onClick={capitalize}>Capitalize Text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"  onClick={handlecopy}>Copy Text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"  onClick={rextraspace}>Remove Extra Spaces</button>
  </div>
  <div className="container my-3">
    <h1>Your text summary</h1>
    <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
    <h3>Preview</h3>
    <p>{text}</p>
  </div>
  </>
  )
}
