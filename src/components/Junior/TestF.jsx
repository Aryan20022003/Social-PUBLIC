import React from "react";
import "./field.css";

const Tfield = function (prop) {
    const local = function (e) {
        //bhai ye na direct nahi horaha so maine jugar laga diya.
        //local function prop may main form ka function call kr lega jaha hookslagaya 
        //hai.
        prop.fxn(e);
    }
    return (
        <div style={{ display: "flex", flexDirection: "column", padding: "0.5rem 1rem" }} className="bg-transparent shadow-md rounded-3xl mt-3">
            <label className="label" for="input">{prop.label}</label>
            <textarea className="input" placeholder={"@" + prop.placeholder} id={prop.placeholder} name={prop.placeholder} required onChange={local} />
        </div>)
}
export default Tfield;