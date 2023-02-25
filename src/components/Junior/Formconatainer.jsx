import React, { useState } from "react";
import Field from "./Field";
import "./forms.css"
import Tfield from "./TestF";
// import UserBtn from "../first/UserBtn"
import UserBtn from "../first/UserBtn"
import supabase from "../../supaBase";
const Formcont = function () {

    const [data, setData] = useState(

        {
            UserId: "",
            WhenToPost: "",
            AtWhatTime: "",
            LinksToAttach: "",
            PostContent: ""
        }
    );
    const fxn = function (e) {
        const datakey = e.target.name;
        const temp = e.target.value;
        const tempobj = {};
        tempobj[datakey] = temp;
        setData({ ...data, ...tempobj });
        // console.log(data);
    };
    const clickFxnform = async function (e) {
        e.preventDefault();


        const { dat, error } = await supabase
            .from("social")
            .insert(data)
            .select()
        console.log(dat);
        if (!error) {
            alert("Message send to Content team for varification");
            document.getElementById("form--main").reset();

        }
    };
    return (<form className="formcontainer shadow-lg" id="form--main">
        <h1 className="heading">Form</h1>
        <Field placeholder={"UserId"} label={"User Id"} key={1} fxn={fxn} />
        <Field placeholder={"WhenToPost"} label={"When To Post"} key={2} fxn={fxn} />
        <Field placeholder={"AtWhatTime"} label={"At What Time"} key={3} fxn={fxn} />
        <Field placeholder={"LinksToAttach"} label={"Links To Attach"} key={4} fxn={fxn} />
        <Tfield placeholder={"PostContent"} label={"Post Content"} className="bg-transparent" key={5} fxn={fxn} />
        <UserBtn value={"Submit"} fxn={clickFxnform} />


    </form>);
}
export default Formcont;