import data from "./data"
import { useState } from "react";
import "./style.css"
export default function Accordian(){
    const [selection,setselection]=useState(null);
    const [enable,setenable]=useState(false);
    const[multiple,setmultiple]=useState([]);
    function handlesingleselection(getid){
setselection(selection===getid?null:getid);

function handlemultiselection(getid){
let cpymultiple=[...multiple];
const findindexofcurrentid=cpymultiple.indexOf(getid);
if(findindexofcurrentid===-1)cpymultiple.push(getid);
else cpymultiple.splice(findindexofcurrentid,1);
setmultiple(cpymultiple);
}
    }
    return (
        <div className="wrapper"> 
        <button onClick={()=>setenable(!enable)}> turn multiselection mode</button>
    <div className="accordian">
    {
        data&& data.length>0?
        data.map((dataitem)=>(<div className="item">
             <div  onClick={ enable?
                 ()=>handlemultiselection(dataitem.id):
                ()=>handlesingleselection(dataitem.id)} className="title">
                <h3>{dataitem.question}</h3>

                <div>
                </div>
             </div>
                   { selection===dataitem.id?
                  (  <div className="content">{dataitem.answer}</div>)
                    :null}
        </div>
        ))
    :<div>no data found</div>
        }
    </div>
    </div>)
};