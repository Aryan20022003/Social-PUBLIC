import React from "react";
import "./field.css";

const field=function(prop)
{

    const local=function(e)
    {
        //bhai ye na direct nahi horaha so maine jugar laga diya.
        //local function prop may main form ka function call kr lega jaha hookslagaya 
        //hai.
        prop.fxn(e);
    }
   return(
   <div style={{display:"flex",flexDirection:"column",padding:"0.5rem 1rem",}} className="bg-transparent shadow-sm rounded-l-xl">
        <label className="label" for="input">{prop.label}</label>
        <input className="input " placeholder={"@"+prop.placeholder} type="text" name={prop.placeholder} id={prop.placeholder} required onChange={local}/>
   </div>)
}
export default field;