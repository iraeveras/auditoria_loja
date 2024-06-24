import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import SubmenuItens from "./SubmenuItem";
import { SlChart } from "react-icons/sl";
import { BsDatabaseAdd } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { SlList } from "react-icons/sl";
import "./Sidebarmenu.css";

function Sidebarmenu() {
    const location = useLocation();
    const [visibleSubmenu, setVisibleSubmenu] = useState(null);

    function toggleSubmenu(index) {
        setVisibleSubmenu(visibleSubmenu === index ? null : index)
    }

    // useEffect(() => {
    //     const path = location.pathname;

    //     if (path.startsWith("/Cad")) {
    //         setVisibleSubmenu(0)
    //     } else if (path.startsWith("/Rel")) {
    //         setVisibleSubmenu(1)
    //     } else {
    //         setVisibleSubmenu(null)
    //     }
        
    // }, [location]);

    
    return (
        <div className="sidebar_menu">
            <SubmenuItens classNameValue="sidebar_menu_list">
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
                            <Link to="/CadTipoDocReg">
                                Tipo de documento de registro
                            </Link>
                        </li>
                        <li className="submenu_item">
                            <Link to="/CadCausaPerda">
                                Causa de perdas
                            </Link>
                        </li>
                        <li className="submenu_item">
                            <Link to="/CadTipoAvaliacaoOper">
                                Tipo de avaliação operacional
                            </Link>
                        </li>
                        <li className="submenu_item">
                            <Link to="/CadQuestoes">
                                Questões
                            </Link>
                        </li>
                        <li className="submenu_item">
                            <Link to="/CadFrasesPadrao">
                                Frases padrão
                            </Link>
                        </li>
                        <li className="submenu_item">
                            <Link to="/CadManutAuditoria">
                                Manutenção de auditoria
                            </Link>
                        </li>
                        <li className="submenu_item">
                            <Link to="/CadVendasInformadas">
                                Vendas informadas
                            </Link>
                        </li>
                        <li className="submenu_item">
                            <Link to="/CadGrupos">
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
                            <Link to="/RelEmpresa">
                                Empresa
                            </Link>
                        </li>
                        <li className="submenu_item">
                            <Link to="/RelUser">
                                Usuário
                            </Link>
                        </li>
                        <li className="submenu_item">
                            <Link to="/RelLojas">
                                Lojas
                            </Link>
                        </li>
                        <li className="submenu_item">
                            <Link to="/RelVendasInformadas">
                                Vendas informadas
                            </Link>
                        </li>
                        <li className="submenu_item">
                            <Link to="/RelGrupos">
                                Grupos
                            </Link>
                        </li>
                        <li className="submenu_item">
                            <Link to="/RelCausaPerdas">
                                Causa de perdas
                            </Link>
                        </li>
                    </SubmenuItens>
                </li>
            </SubmenuItens>
        </div>
    )
}

export default Sidebarmenu;