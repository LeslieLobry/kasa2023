import {useState} from "react";
import "../Accordeon/accordeon.css"
import chevron from "../../assets/chevron.png"
import chevronhaut from "../../assets/chevronhaut.png"


function Accordeon ({title, content}){
    const [ open, close] = useState(false);
    
   
    return (
        <div className="accordion-container">
            <div className="accordion">
            <div className="accordion-title" onClick={
            ()=>close(!open)
            }>{title}
            </div>
            <div className="chevron">
            {open && <img src={chevronhaut}alt="kasa"></img>}
            {close &&<img src={chevron}alt="kasa"></img>}
            </div>
            </div>
            <div className="accordion-content">
               {open && <p>{content}</p>}
            </div>
        </div>
    )
 }
 export default Accordeon