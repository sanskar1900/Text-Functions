import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      
    <nav className={    props.modes==='light'?"navbar navbar-expand bg-light navbar-light":"navbar navbar-expand bg-dark navbar-dark"}>   
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
        
       
      
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">About</a>
        </li> */}
      </ul>
      <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleModes}/>
  <label class="form-check-label" for="flexSwitchCheckDefault" style={props.modes==='light'?{color:'black'}:{color:'white'}}>Enable Dark Mode</label>
</div>
    </div>
  </div>
</nav> 
    </>
  )
}
// Navbar.PropTypes={
//   title:PropTypes.string.isRequired
// }
// Navbar.defaultProps={
//   title:"Set Text Here"
// }
export default Navbar;
