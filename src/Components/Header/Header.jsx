import { useState } from "react";
import { Link } from "react-router-dom";
import icons from "../../constants/icons";
import { GoSun } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";
import "./Header.css";

const body = document.querySelector("body");
body.innerHTML += `<div class="sidebar_overlay"></div>`

function Header() {
    const [menuOpened, setMenuOpened] = useState(false);
    
    function openedSidebar() {
        setMenuOpened(!menuOpened)
        
        if (menuOpened) {
            document.querySelector("html").classList.add("menu_opened")
            document.getElementById("root").classList.add("slide_nav")
            document.querySelector(".sidebar_overlay").classList.add("opened")
        } else {
            document.querySelector("html").classList.remove("menu_opened")
            document.getElementById("root").classList.remove("slide_nav")
            document.querySelector(".sidebar_overlay").classList.remove("opened")
        }
    }

    return (
        <header className="header">
            <div className="header_left" >
                <Link to="/" className="logo">
                    <img src={icons.logo} alt="Image Logo" />
                </Link>
                <Link to="/" className="logo_small">
                    <img src={icons.logo_small} alt="Image logo small" />
                </Link>
                
            </div>
            <Link to="#" className=" mobile_btn" id="mobile_btn">
                <span className="bar_icon" onClick={openedSidebar}>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </Link>
            <div className="box_btn_dark_light">
                <div className="dark_light">
                    <IoMoonOutline className="moon"/>
                    <GoSun className="sun"/>
                </div>
            </div>
        </header>
    )
}

export default Header