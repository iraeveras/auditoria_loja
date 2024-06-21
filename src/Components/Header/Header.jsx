import icons from "../../constants/icons";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <div className="header_left active">
                <a href="javascript:void(0)" className="logo">
                    <img src={icons.logo} alt="Image Logo" />
                </a>
                <a href="javascript:void(0)" className="logo_small">
                    <img src={icons.logo_small} alt="Image logo small" />
                </a>
                <a href="javascript:void(0)" id="toggle_btn" className="active"></a>
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