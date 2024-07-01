import { useState } from "react";
import { ReactComponent as Arrow } from "../img/arrow.svg";

export default function Collapse({ header, children }) {
  const [stylediv, setStylediv] = useState({animation: 'none'});
  const [expanded, setExpanded] = useState(false);
  
  const toggle = (e) => {
    setExpanded(!expanded)
    setStylediv(expanded ? {animation : "0.25s linear slideUp"} : {animation: "0.25s linear slideDown"});
  };
  
  let arrowClass = `arrow ${expanded ? 'expanded' : ''}`;
  let contentsClass = `collapse-contents ${expanded ? 'expanded' : ''}`;

  return (
    <div className="collapse-container" >
      <button className="collapse-header" onClick={toggle} >
        <p>{header}</p>
        <Arrow className={arrowClass} />
      </button>
      {true &&
        <div className={contentsClass} style={stylediv} >
          {children}
        </div>
      }
    </div>
  )
}