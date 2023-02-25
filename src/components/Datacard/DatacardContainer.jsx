import React from "react";
import { useState, useEffect } from "react";
import DataCard from "./DataCard";
import supabase from "../../supaBase";
import "./ConCard.css";
// import { EmbedBuilder, WebhookClient } from "discord.js";

/*experimental Feature */


function CardFinal() {

    const postFxn = async function (propsInfo) {

        // console.log("post", propsInfo.id);
        // console.log(propsInfo, "propsInfo");

        // message which i want to send
        const message = `By: ${propsInfo.UserId}\n\n${propsInfo.PostContent}\n\nLink: ${propsInfo.LinksToAttach}`;

        console.log(message, "message which we will send");

        //--->this await fxn will send the data to discord with the help of hook


        // <----------------------------------------------------------------------------------------------->
        // <----------------------------------------------------------------------------------------------->
        // <----------------------------------------------------------------------------------------------->
        // --------------Enter you discord hook url in the fetch fxn below-------------
        await fetch("Enter DISCORD HOOK URL", {
            body: JSON.stringify({
                content: message,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        })
            .then(function (res) {
                alert("Message send successfully");
                //--->after the data will be send it will also delete it from the record.
                deleteFxn(propsInfo.id);
                console.log(res);
            })
            .catch(function (res) {
                alert("Message is not send check network connection");
                console.log(res);
            });


    };

    const deleteFxn = async function (id) {
        console.log("delete", id);

        // ---> deleted the message form the supabase dataBase.

        const { error } = await supabase.from("social").delete().eq("id", id);
        if (error) {
            alert("error in deleting the data");
            console.log(error);
        }
        else {

            alert("Message has been deleted from Data Base");
            setUpdate(updatedDatabase + 1);
        }
    };


    const [userdata, setdata] = useState([]);
    const [updatedDatabase, setUpdate] = useState(0);
    //here my useSate array userdata contain the elements which will be render in 
    // verification part and "setdata" will be only called then the page loades first time
    // as of now

    // problem of using updating userdata without useEffect it will force the hook to be in infinite 
    // loop and will make infite request form the server
    useEffect(() => {
        const getData = async function async() {
            const { data, error } = await supabase.from("social").select();

            if (error) {
                alert("Unable to fetch data from remote server");
                return;
            }
            if (data) {

                //updating the userdata "hook" with  the data which we want to render.
                setdata(
                    data.map((item) => (
                        <DataCard
                            info={item}
                            key={item.id}
                            id={item.id}
                            postFxn={postFxn}
                            deleteFxn={deleteFxn}
                        />
                    ))
                );
                console.log(data);
            }
        };
        getData();
    },);
    return (
        <div className="card--main--container">
            <h1 className="text-center text-5xl font-light pb-2 mb-2">Post Review</h1>
            <div className="container--card ">{userdata}</div>
        </div>
    );
}
export default CardFinal;
