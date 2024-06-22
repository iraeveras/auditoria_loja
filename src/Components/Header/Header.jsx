import { useState } from "react";
import icons from "../../constants/icons";
import "./Header.css";

function Header() {
    const [visible, setVisible] = useState(false);

    function headerVisible() {
        setVisible(!visible);
        const body = document.body;
        if (visible) {
            body.classList.remove("mini_sidebar");
            body.classList.add("expand_menu");
        } else {
            body.classList.remove("expand_menu");
            body.classList.add("mini_sidebar")
        }
    }
    return (
        <header className="header">
            <div className={!visible ? "header_left active" : "header_left" }  >
                <a href="javascript:void(0)" className="logo">
                    <img src={icons.logo} alt="Image Logo" />
                </a>
                <a href="javascript:void(0)" className="logo_small">
                    <img src={icons.logo_small} alt="Image logo small" />
                </a>
                <a href="javascript:void(0)" id="toggle_btn" className={visible ? "active" : ""}   onClick={headerVisible}></a>
            </div>
            <a href="javascript:void(0)" className="dropdown_toggle mobile_btn">
                <span className="bar_icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </a>
        </header>
    )
}

export default Header