
import { useState } from "react";
import SubmenuItens from "./SubmenuItem";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsDatabaseAdd } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import "./Sidebarmenu.css";



function Sidebarmenu() {
    const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);

    function toggleSubmenu() {
        setIsSubmenuVisible(!isSubmenuVisible)
    }
    
    return (
        <div className="sidebar_menu">
            <ul className="sidebar_manu_list">
                <li className="submenu">
                    <a href="#" className="menu_item" >
                        <AiOutlineDashboard />
                        <span>Deshborad</span>
                    </a>
                </li>
                <li className={isSubmenuVisible ? "submenu active" : "submenu"}>
                    <a href="#" className=  {isSubmenuVisible ? "menu_item subdrop" : "menu_item"} onClick={toggleSubmenu}>
                        <BsDatabaseAdd />
                        <span>Cadastros</span>
                        <span className="menu_arrow">
                            <IoIosArrowForward />
                        </span>
                    </a>
                    <SubmenuItens classNameValue={isSubmenuVisible ? "submenu_itens_list visible" : "submenu_itens_list"}>
                        <li className="submenu_item">
                            <a href="#">
                                Usuário
                            </a>
                        </li>
                        <li className="submenu_item">
                            <a href="#">
                                Lojas
                            </a>
                        </li>
                        <li className="submenu_item">
                            <a href="#">
                                Auditores
                            </a>
                        </li>
                        <li className="submenu_item">
                            <a href="#">
                                Motivos de causa
                            </a>
                        </li>
                        <li className="submenu_item">
                            <a href="#">
                                Tipo de documento de registro
                            </a>
                        </li>
                        <li className="submenu_item">
                            <a href="#">
                                Causa de perdas
                            </a>
                        </li>
                        <li className="submenu_item">
                            <a href="#">
                                Tipo de avaliação operacional
                            </a>
                        </li>
                        <li className="submenu_item">
                            <a href="#">
                                Questões
                            </a>
                        </li>
                        <li className="submenu_item">
                            <a href="#">
                                Frases padrão
                            </a>
                        </li>
                        <li className="submenu_item">
                            <a href="#">
                                Manutenção de auditoria
                            </a>
                        </li>
                        <li className="submenu_item">
                            <a href="#">
                                Vendas informadas
                            </a>
                        </li>
                        <li className="submenu_item">
                            <a href="#">
                                Grupos
                            </a>
                        </li>
                    </SubmenuItens>
                </li>
                <li className="submenu">
                    <a href="#" className="menu_item" >
                        <AiOutlineDashboard />
                        <span>Relatórios</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebarmenu;