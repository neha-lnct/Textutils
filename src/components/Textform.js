import React,{useState} from 'react'

export default function Textform(props)  {
    const handleUpClick  = ()=>{
    console.log("Upper case was clicked" + text);
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!","success");
    }
    const handleloClick  = ()=>{
        console.log("Upper case was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText)
       props.showAlert("Converted to Lowercase!","success");
        }
        const handleclearClick  = (props)=>{
          console.log("Upper case was clicked" + text);
          let newText='';
          setText(newText)
          props.showAlert("Cleared Text","success");
          }
       
     
    const handleOnChange =(event)=>{
     console.log("On Change");
     setText(event.target.value);
    }
    const [text,setText]=useState('Enter Text here2')
  return (
    <>
    <div className="container"  style={{backgroundColor:props.mode==='dark'?'#042743':'white'}}>
     <h1>{props.heading}</h1>
       <div class="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="6"></textarea> 
        </div>
     <buttton className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</buttton>
      <buttton className="btn btn-primary mx-2 my-1" onClick={handleloClick}>Convert to UpperCase</buttton>
      <buttton className="btn btn-primary mx-2 my-1" onClick={handleclearClick}>Clear Text</buttton>
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Take to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}


