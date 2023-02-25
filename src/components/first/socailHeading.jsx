import React, { useState, useEffect } from "react";
import UserBtn from "./UserBtn.jsx";
import "./styleNav.css"
import { Link } from "react-router-dom";
import { FaHamburger } from 'react-icons/fa'

const Social = function () {

    //reading the screen size of the window
    const [isMobile, setIsMobile] = useState(0);
    const [hidden, setHidden] = useState(false);

    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth < 1023) {
            setIsMobile(1);
            setHidden(1);
            // console.log(isMobile);
        } else {
            setIsMobile(0)
            setHidden(0);
        }
    }

    const toggler = function () {
        // console.log("triggered", isMobile);
        //why again window.innerwidth here because in mobile view code is not updating Ismobile
        //reloading i guess useEffect is not being called that why i also checked here and worked accordingly
        //hope fully this will work.

        if (window.innerWidth < 1023 && isMobile !== 1) {
            setIsMobile(1);
        }
        if (window.innerWidth > 1023) {
            setHidden(0);
        }
        if (isMobile === 1) {
            console.log(hidden);
            setHidden(!hidden);
        }
    }
    let flag = 0;//to check that this function only execute one time.
    const loadHandler = function () {
        if (!flag && window.innerWidth < 1023) {
            flag = 1;
            setHidden(1);
            isMobile(1);
        }

    }
    // create an event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        window.addEventListener("load", loadHandler);
    })


    return (
        <nav className="bar">
            <Link to="/">
                <span className="brand">Social</span>
            </Link>
            <FaHamburger className="hamberger z-50 h-14 w-10 text-gray-600 lg:hidden" onClick={toggler} />
            <div className={`btns ${hidden ? `hide` : null}`}>
                <Link to="/admin" onClick={toggler}>
                    <UserBtn value={"Admin"} />
                </Link>
                <Link to="/juniors" onClick={toggler}>
                    <UserBtn value={"Juniors"} />
                </Link>
            </div>
        </nav>


    );
}

export default Social;