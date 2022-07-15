import React,{useState} from 'react'

const Form = (props) => {
    // let uw=0
    const[text,setText]=useState('');

    const changeOccur=(event)=>{
     setText(event.target.value);
    //  wordcount=wordcount+1;
    
    }
    const convertUppercase=()=>{
      if(text.length===0)
      {
        props.showalert("Please enter some text", "danger")
      }
      else{
      setText(text.toUpperCase());
      props.showalert("Converted to Uppercase", "success")}
    }
    const convertLowercase=()=>{
      if(text.length===0)
      {
        props.showalert("Please enter some text", "danger")
      }
      else{
      setText(text.toLowerCase());
      props.showalert("Converted to Lowercase", "success")}
      }
      const clearText=()=>{
        if(text.length===0)
        {
          props.showalert("There is no text to clear", "danger")
        }
        else{
        setText("");
        props.showalert("Clear Text", "success")}
      }
   
   const copyText=()=>{

    if(text.length===0)
    {
      props.showalert("There is no text to copy", "danger")
    }
    else{
    let text=document.getElementById('exampleFormControlTextarea1');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Text Copied to clipboard", "success")}
   }
   const removeExtraSpace=()=>{
    if(text.length===0)
    {
      props.showalert("Please enter some text", "danger");
    }
    else{
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showalert("Extra space removed", "success")}
   }
   var WordCount = function(v){
    var matches = v.match(/\S+/g) ;
    return matches?matches.length:0;
}
  
    
  return (
    <>
    <div className="container" style={props.modes==='light'?{color:'black'}:{color:'white'}}>
<div class="mb-3 my-4">
  <label HTMLfor="exampleFormControlTextarea1" className="form-label" style={props.modes==='light'?{color:'black'}:{color:'white'}}><h3 className='text-center'>{props.label}</h3></label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={changeOccur} style={props.modes==='light'?{color:'black', backgroundColor:'white'}:{color:'white', backgroundColor:'grey'}}></textarea>
</div>
<button className="btn btn-primary" onClick={convertUppercase}>Convert To Uppercase</button>
<button className="btn btn-primary mx-2" onClick={convertLowercase}>Convert To Lowercase</button>
<button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={copyText}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={removeExtraSpace}>Remove Extra Spaces</button>
{/* <button className="btn btn-primary mx-2" onClick={createSet}>Unique Words</button> */}
</div>
<div className="container my-2">
    <h2 style={props.modes==='light'?{color:'black'}:{color:'white'}}>Your Text Summary is:</h2>
    <p style={props.modes==='light'?{color:'black'}:{color:'white'}}> <b>{WordCount(text)}Words , {text.length} Characters</b></p>
    <p style={props.modes==='light'?{color:'black'}:{color:'white'}}> {0.008 * text.split(' ').length}Minutes Read</p>
    <h2 style={props.modes==='light'?{color:'black'}:{color:'white'}}>Preview</h2>
    <p style={props.modes==='light'?{color:'black'}:{color:'white'}}> {text.length===0?"Enter text to perform the function": text}</p>

</div>

    
    </>
  )
}

export default Form;
