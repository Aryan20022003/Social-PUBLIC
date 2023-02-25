import React from "react";
import "./Btnstyle.css"

const user = function (props) {
    // function btnfxn(e)
    // {
    //     e.preventdefault();
    // }
    return <button className="btn hover:bg-blue-400" onClick={props.fxn} type="submit">{props.value}</button>
}

export default user;