import { useState } from "react";
import SubmenuItens from "./SubmenuItem";
import { Link } from "react-router-dom";
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
                    <Link to="/" className="menu_item" >
                        <SlChart />
                        <span className="title_link">Deshborad</span>
                    </Link>
                </li>
                <li className={visibleSubmenu === 0 ? "submenu focus" : "submenu"}>
                    <Link to="#" className={visibleSubmenu === 0 ? "menu_item subdrop" : "menu_item"} onClick={() => toggleSubmenu(0)}>
                        <BsDatabaseAdd />
                        <span className="title_link">Cadastros</span>
                        <span className="menu_arrow">
                            <IoIosArrowForward />
                        </span>
                    </Link>
                    <SubmenuItens classNameValue={visibleSubmenu === 0 ? "submenu_itens_list visible" : "submenu_itens_list"}>
                        <li className="submenu_item">
                            <Link to="/CadEmpresa">
                                Empresa
                            </Link>
                        </li>
                        <li className="submenu_item">
                            <Link to="/CadUser">
                                Usuário
                            </Link>
                        </li>
                        <li className="submenu_item">
                            <Link to="/CadLoja">
                                Lojas
                            </Link>
                        </li>
                        <li className="submenu_item">
                            <Link to="/CadAuditor">
                                Auditores
                            </Link>
                        </li>
                        <li className="submenu_item">
                            <Link to="/CadCausa">
                                Motivos de causa
                            </Link>
                        </li>
                        <li className="submenu_item">
                            <Link to="#">
                                Tipo de documento de registro
                            </Link>
                        </li>
                        <li className="submenu_item">
                            <Link to="#">
                                Causa de perdas
                            </Link>
                        </li>
                        <li className="submenu_item">
                            <Link to="#">
                                Tipo de avaliação operacional
                            </Link>
                        </li>
                        <li className="submenu_item">
                            <Link to="#">
                                Questões
                            </Link>
                        </li>
                        <li className="submenu_item">
                            <Link to="#">
                                Frases padrão
                            </Link>
                        </li>
                        <li className="submenu_item">
                            <Link to="#">
                                Manutenção de auditoria
                            </Link>
                        </li>
                        <li className="submenu_item">
                            <Link to="#">
                                Vendas informadas
                            </Link>
                        </li>
                        <li className="submenu_item">
                            <Link to="#">
                                Grupos
                            </Link>
                        </li>
                    </SubmenuItens>
                </li>
                <li className={visibleSubmenu === 1 ? "submenu focus" : "submenu"}>
                    <Link to="#" className={visibleSubmenu === 1 ? "menu_item subdrop" : "menu_item"} onClick={() => toggleSubmenu(1)} >
                        <SlList />
                        <span className="title_link">Relatórios</span>
                        <span className="menu_arrow">
                            <IoIosArrowForward />
                        </span>
                    </Link>
                    <SubmenuItens classNameValue={visibleSubmenu === 1 ? "submenu_itens_list visible" : "submenu_itens_list"}>
                        <li className="submenu_item">
                            <Link to="#">
                                Empresa
                            </Link>
                        </li>
                        <li className="submenu_item">
                            <Link to="#">
                                Usuário
                            </Link>
                        </li>
                        <li className="submenu_item">
                            <Link to="#">
                                Lojas
                            </Link>
                        </li>
                        <li className="submenu_item">
                            <Link to="#">
                                Vendas informadas
                            </Link>
                        </li>
                        <li className="submenu_item">
                            <Link to="#">
                                Grupos
                            </Link>
                        </li>
                        <li className="submenu_item">
                            <Link to="#">
                                Causa de perdas
                            </Link>
                        </li>
                    </SubmenuItens>
                </li>
            </ul>
        </div>
    )
}

export default Sidebarmenu;