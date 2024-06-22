
import { useState } from "react";
import SubmenuItens from "./SubmenuItem";
import { SlChart } from "react-icons/sl";
import { BsDatabaseAdd } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { SlList } from "react-icons/sl";
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
                    <a href="javascript:void(0)" className="menu_item" >
                        <SlChart />
                        <span>Deshborad</span>
                    </a>
                </li>
                <li className={isSubmenuVisible ? "submenu active" : "submenu"}>
                    <a href="javascript:void(0)" className=  {isSubmenuVisible ? "menu_item subdrop" : "menu_item"} onClick={toggleSubmenu}>
                        <BsDatabaseAdd />
                        <span>Cadastros</span>
                        <span className="menu_arrow">
                            <IoIosArrowForward />
                        </span>
                    </a>
                    <SubmenuItens classNameValue={isSubmenuVisible ? "submenu_itens_list visible" : "submenu_itens_list"}>
                        <li className="submenu_item">
                            <a href="javascript:void(0)">
                                Empresa
                            </a>
                        </li>
                        <li className="submenu_item">
                            <a href="javascript:void(0)">
                                Usuário
                            </a>
                        </li>
                        <li className="submenu_item">
                            <a href="javascript:void(0)">
                                Lojas
                            </a>
                        </li>
                        <li className="submenu_item">
                            <a href="javascript:void(0)">
                                Auditores
                            </a>
                        </li>
                        <li className="submenu_item">
                            <a href="javascript:void(0)">
                                Motivos de causa
                            </a>
                        </li>
                        <li className="submenu_item">
                            <a href="javascript:void(0)">
                                Tipo de documento de registro
                            </a>
                        </li>
                        <li className="submenu_item">
                            <a href="javascript:void(0)">
                                Causa de perdas
                            </a>
                        </li>
                        <li className="submenu_item">
                            <a href="javascript:void(0)">
                                Tipo de avaliação operacional
                            </a>
                        </li>
                        <li className="submenu_item">
                            <a href="javascript:void(0)">
                                Questões
                            </a>
                        </li>
                        <li className="submenu_item">
                            <a href="javascript:void(0)">
                                Frases padrão
                            </a>
                        </li>
                        <li className="submenu_item">
                            <a href="javascript:void(0)">
                                Manutenção de auditoria
                            </a>
                        </li>
                        <li className="submenu_item">
                            <a href="javascript:void(0)">
                                Vendas informadas
                            </a>
                        </li>
                        <li className="submenu_item">
                            <a href="javascript:void(0)">
                                Grupos
                            </a>
                        </li>
                    </SubmenuItens>
                </li>
                <li className="submenu">
                    <a href="javascript:void(0)" className="menu_item" >
                        <SlList />
                        <span>Relatórios</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebarmenu;