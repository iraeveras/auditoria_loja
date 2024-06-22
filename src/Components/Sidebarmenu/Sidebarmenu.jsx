import { useState } from "react";
import SubmenuItens from "./SubmenuItem";
import { SlChart } from "react-icons/sl";
import { BsDatabaseAdd } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { SlList } from "react-icons/sl";
import "./Sidebarmenu.css";



function Sidebarmenu() {
    const [visibleSubmenu, setVisibleSubmenu] = useState(null);

    function toggleSubmenu(index) {
        setVisibleSubmenu(visibleSubmenu === index ? null : index)
    }
    
    return (
        <div className="sidebar_menu">
            <ul className="sidebar_manu_list">
                <li className="submenu active">
                    <a href="javascript:void(0)" className="menu_item" >
                        <SlChart />
                        <span className="title_link">Deshborad</span>
                    </a>
                </li>
                <li className={visibleSubmenu === 0 ? "submenu focus" : "submenu"}>
                    <a href="javascript:void(0)" className={visibleSubmenu === 0 ? "menu_item subdrop" : "menu_item"} onClick={() => toggleSubmenu(0)}>
                        <BsDatabaseAdd />
                        <span className="title_link">Cadastros</span>
                        <span className="menu_arrow">
                            <IoIosArrowForward />
                        </span>
                    </a>
                    <SubmenuItens classNameValue={visibleSubmenu === 0 ? "submenu_itens_list visible" : "submenu_itens_list"}>
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
                <li className={visibleSubmenu === 1 ? "submenu focus" : "submenu"}>
                    <a href="javascript:void(0)" className={visibleSubmenu === 1 ? "menu_item subdrop" : "menu_item"} onClick={() => toggleSubmenu(1)} >
                        <SlList />
                        <span className="title_link">Relatórios</span>
                        <span className="menu_arrow">
                            <IoIosArrowForward />
                        </span>
                    </a>
                    <SubmenuItens classNameValue={visibleSubmenu === 1 ? "submenu_itens_list visible" : "submenu_itens_list"}>
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
                                Vendas informadas
                            </a>
                        </li>
                        <li className="submenu_item">
                            <a href="javascript:void(0)">
                                Grupos
                            </a>
                        </li>
                        <li className="submenu_item">
                            <a href="javascript:void(0)">
                                Causa de perdas
                            </a>
                        </li>
                    </SubmenuItens>
                </li>
            </ul>
        </div>
    )
}

export default Sidebarmenu;