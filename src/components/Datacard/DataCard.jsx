import React from "react";
import "./Card.css"

//here card has been created in which data is in props passed form the DataContaniner 
//on click of post button postFxn will be called 
//on click of delete button deleteFxn will be called 

const card = function (props) {
    function local() {
        props.postFxn(props.info);
    }
    function localD() {
        props.deleteFxn(props.info.id);
    }
    return (
        <div className="Card--main shadow-sm p-5 rounded-sm" id={props.id} key={props.info.id}>
            <p className="card--heading">User ID: {props.info.UserId}</p>
            <p className="content">{props.info.PostContent}</p>
            <p className="link">Link:{props.info.LinksToAttach}</p>
            <div className="bottom--bar--card">
                <span>Scheduled Date: {props.info.WhenToPost}</span>
                <span>Scheduled Time: {props.info.AtWhatTime}</span>
            </div>
            <div className="button--container">
                <button className="button button--post bg-green-200" onClick={local}>POST</button>
                <button className="button button--reject bg-red-100" onClick={localD}>DELETE</button>
            </div>
        </div>
    )
}
export default card;