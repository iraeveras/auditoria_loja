import { AiOutlineDashboard } from "react-icons/ai";
import { BsDatabaseAdd } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import "./Sidebarmenu.css";

function Sidebarmenu() {
    return (
        <div className="sidebar_menu">
            <ul>
                <li className="submenu">
                    <a href="#" >
                        <AiOutlineDashboard />
                        <span>Deshborad</span>
                    </a>
                </li>
                <li className="submenu">
                    <a href="#" className="">
                        <BsDatabaseAdd />
                        <span>Cadastros</span>
                        <span className="menu_arrow">
                            <IoIosArrowForward />
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebarmenu;