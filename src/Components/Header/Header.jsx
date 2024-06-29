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
    const [toggleDarkLight, setToggleDarkLight] = useState(false);
    const [buttonDarkLight, setButtonDarkLight] = useState("Theme Dark");

    function handleDarkLight() {

        const sun = document.querySelector(".sun");
        const moon = document.querySelector(".moon")
        const btn_theme = document.querySelector(".btn_theme");
        setToggleDarkLight(!toggleDarkLight);

        if (!toggleDarkLight) {
            sun.classList.remove("display_none")
            moon.classList.add("display_none")
            btn_theme.innerText = "Theme Light";
            body.classList.add("dark")
            body.classList.remove("light")
        } else {
            sun.classList.add("display_none")
            moon.classList.remove("display_none")
            btn_theme.innerText = "Theme Dark";
            body.classList.add("light");
            body.classList.remove("dark")
        }
        
    }
    
    function openedSidebar() {
        setMenuOpened(!menuOpened)
        
        if (!menuOpened) {
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
            <div className=" mobile_btn" id="mobile_btn" onClick={openedSidebar}>
                <span className="bar_icon" >
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </div>
            <div className="box_btn_dark_light">
                <div>
                    <button 
                    className="btn_theme" 
                    onClick={handleDarkLight} 
                    onChange={(e) => 
                    setButtonDarkLight(e.target.value)}>
                        {buttonDarkLight}
                    </button>
                    
                </div>
                <a className="dark_light" >
                    <IoMoonOutline className="moon"/>
                    <GoSun className="sun display_none"/>
                </a>
            </div>
        </header>
    )
}

export default Header