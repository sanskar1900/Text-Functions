import React,{useState} from 'react'

const About = (props) => {
  const[myStyle,setMStyle]=useState({
     color:'black',
     backgroundColor:'white'
  });
  // const [text,setText]=useState('Enable Dark Mode');
  const toggleStyle=()=>{
    if(props.modes=='light')
    {
      // setText('Enable Light Mode');
      setMStyle({
       backgroundColor:'black',
       color:'white'
      });
    }
    else
    {
      // setText('Enable Dark Mode');
      setMStyle({
       backgroundColor:'white',
       color:'black'
      });
    }
  };
  return (
    <>
    {/* {props.modes==light?:toggleStyle} */}
    {/* {toggleStyle} */}
    <div className="container my-4">
    <div className="accordion my-4" id="accordionExample">
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingOne">
      <button style={props.modes==='light'?{  color:'black',
     backgroundColor:'white'}:{color:'white',
     backgroundColor:'black'}}  className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       Our Founder
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={props.modes==='light'?{  color:'black',
     backgroundColor:'white'}:{color:'white',
     backgroundColor:'black'}}>
        <strong style={props.modes==='light'?{  color:'black',
     backgroundColor:'white'}:{color:'white',
     backgroundColor:'black'}}>Er.Sanskar Bhadauriya.</strong>
        <br></br>
        <strong style={props.modes==='light'?{  color:'black',
     backgroundColor:'white'}:{color:'white',
     backgroundColor:'black'}}  ><a href="https://www.linkedin.com/in/sanskar-bhadauriya-9253781a7/">LinkedIn</a></strong>
        <br />
        <strong style={props.modes==='light'?{  color:'black',
     backgroundColor:'white'}:{color:'white',
     backgroundColor:'black'}}><a href="https://github.com/sanskar1900">GitHub</a></strong>
      </div>
    </div>
  </div>
  <div className="accordion-item" style={props.modes==='light'?{  color:'black',
     backgroundColor:'white'}:{color:'white',
     backgroundColor:'black'}}>
    <h2 className="accordion-header" id="headingTwo">
      <button style={props.modes==='light'?{  color:'black',
     backgroundColor:'white'}:{color:'white',
     backgroundColor:'black'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       Our Aim
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       To provide different text manipulation functions for the users.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={props.modes==='light'?{  color:'black',
     backgroundColor:'white'}:{color:'white',
     backgroundColor:'black'}}>
    <h2 className="accordion-header" id="headingThree">
      <button style={props.modes==='light'?{  color:'black',
     backgroundColor:'white'}:{color:'white',
     backgroundColor:'black'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       Suggest more functions
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        You can suggest some more text manipulation functions, we will try to include best of them in the website.
        <form my-4>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Suggest Here</label>
    <input type="text" class="form-control"  aria-describedby="emailHelp"/>
    <div style={props.modes==='light'?{  color:'black',
     backgroundColor:'white'}:{color:'white',
     backgroundColor:'black'}} id="emailHelp" class="form-text">Describe your idea and Submit</div>
  </div>
  
  <button type="submit" class="btn btn-success">Submit</button>
</form> 
      </div>
    </div>
  </div>
</div>
{/* <button style={myStyle} className="btn-dark" onClick={toggleStyle}>{text}</button> */}
</div>

    </>
  )
}

export default About
