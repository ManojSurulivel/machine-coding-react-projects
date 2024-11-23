import React from "react";
import './Joke.css'

const Button = (props) => {
    return(
    <div>
        
        <button onClick={props.callApi} >  Click to generate a joke.  </button>
   
   </div>
    ) 
    
}

export default Button;
