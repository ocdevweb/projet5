import { useState } from "react";
import { ReactComponent as Arrow } from "../img/arrow.svg"; 

export default function Collapse({ header, children }) {
    const [expanded, setExpanded] = useState(false);

    const toggle = () => {
        setExpanded(!expanded)};

    let stylediv = expanded ? { animation: "0.25s linear slideDown" } : { animation: "0.25s linear slideUp" };
    let arrowClass = `arrow ${expanded ? 'expanded' : ''}`;
    let contentsClass = `collapse-contents ${expanded ? 'expanded' : ''}`;
    
     return(
       <div className="collapse-container" >
       <button className="collapse-header" onClick={toggle} >
        <p>{header}</p>
        <Arrow className={arrowClass} /> 
       </button>
       { true &&
        <div className={contentsClass} style={stylediv}>
         {children}
        </div>
      }
      </div>
     )
   }