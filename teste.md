import React, { useState } from 'react';
import { Link } from "react-router-dom";
import MenuList from "./SubmenuItem";
import { SlChart } from "react-icons/sl";
import { BsDatabaseAdd } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { SlList } from "react-icons/sl";
import "./Sidebarmenu.css";

function Sidebarmenu() {
    const [activeMenu, setActiveMenu] = useState(null);
    const [activeSubmenu, setActiveSubmenu] = useState(null);

    const handleMenuClick = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
        setActiveSubmenu(null);
    };

    const handleSubmenuClick = (submenu) => {
        setActiveSubmenu(submenu);
    };

    return (
        <div className="sidebar_menu">
            <MenuList classNameValue="sidebar_menu_list">
                <li className={`submenu ${activeMenu === 'dashboard' ? 'active' : ''}`}>
                    <Link to="/" className="menu_item" onClick={() => handleMenuClick('dashboard')}>
                        <SlChart />
                        <span className="title_link">Dashboard</span>
                    </Link>
                </li>
                <li className={`submenu ${activeMenu === 'cadastros' ? 'active' : ''}`}>
                    <Link to="#" className="menu_item" onClick={() => handleMenuClick('cadastros')}>
                        <BsDatabaseAdd />
                        <span className="title_link">Cadastros</span>
                        <span className="menu_arrow">
                            <IoIosArrowForward />
                        </span>
                    </Link>
                    {activeMenu === 'cadastros' && (
                        <MenuList classNameValue="submenu_itens_list">
                            {['CadEmpresa', 'CadUser', 'CadLoja', 'CadAuditor', 'CadCausa', 'CadTipoDocReg', 'CadCausaPerda', 'CadTipoAvaliacaoOper', 'CadQuestoes', 'CadFrasesPadrao', 'CadManutAuditoria', 'CadVendasInformadas', 'CadGrupos'].map((item, index) => (
                                <li key={index} className={`submenu_item ${activeSubmenu === item ? 'active' : ''}`}>
                                    <Link to={`/${item}`} onClick={() => handleSubmenuClick(item)}>
                                        {item.replace('Cad', '')}
                                    </Link>
                                </li>
                            ))}
                        </MenuList>
                    )}
                </li>
                <li className={`submenu ${activeMenu === 'relatorios' ? 'active' : ''}`}>
                    <Link to="#" className="menu_item" onClick={() => handleMenuClick('relatorios')}>
                        <SlList />
                        <span className="title_link">Relatórios</span>
                        <span className="menu_arrow">
                            <IoIosArrowForward />
                        </span>
                    </Link>
                    {activeMenu === 'relatorios' && (
                        <MenuList classNameValue="submenu_itens_list">
                            {['RelEmpresa', 'RelUser', 'RelLojas', 'RelVendasInformadas', 'RelGrupos', 'RelCausaPerdas'].map((item, index) => (
                                <li key={index} className={`submenu_item ${activeSubmenu === item ? 'active' : ''}`}>
                                    <Link to={`/${item}`} onClick={() => handleSubmenuClick(item)}>
                                        {item.replace('Rel', '')}
                                    </Link>
                                </li>
                            ))}
                        </MenuList>
                    )}
                </li>
            </MenuList>
        </div>
    );
}

export default Sidebarmenu;

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import MenuList from "./SubmenuItem";
// import { SlChart } from "react-icons/sl";
// import { BsDatabaseAdd } from "react-icons/bs";
// import { IoIosArrowForward } from "react-icons/io";
// import { SlList } from "react-icons/sl";
// import "./Sidebarmenu.css";

// function Sidebarmenu() {
    
//     const [visibleSubmenu, setVisibleSubmenu] = useState(null);

//     function toggleSubmenu(index) {
//         setVisibleSubmenu(visibleSubmenu === index ? null : index)
//     }
    
//     return (
//         <div className="sidebar_menu">
//             <MenuList classNameValue="sidebar_menu_list">
//                 <li className="submenu active">
//                     <Link to="/" className="menu_item" >
//                         <SlChart />
//                         <span className="title_link">Deshboard</span>
//                     </Link>
//                 </li>
//                 <li className={visibleSubmenu === 0 ? "submenu focus" : "submenu"}>
//                     <Link to="#" className={visibleSubmenu === 0 ? "menu_item subdrop" : "menu_item"} onClick={() => toggleSubmenu(0)}>
//                         <BsDatabaseAdd />
//                         <span className="title_link">Cadastros</span>
//                         <span className="menu_arrow">
//                             <IoIosArrowForward />
//                         </span>
//                     </Link>
//                     <MenuList classNameValue={visibleSubmenu === 0 ? "submenu_itens_list visible" : "submenu_itens_list"}>
//                         <li className="submenu_item">
//                             <Link to="/CadEmpresa">
//                                 Empresa
//                             </Link>
//                         </li>
//                         <li className="submenu_item">
//                             <Link to="/CadUser">
//                                 Usuário
//                             </Link>
//                         </li>
//                         <li className="submenu_item">
//                             <Link to="/CadLoja">
//                                 Lojas
//                             </Link>
//                         </li>
//                         <li className="submenu_item">
//                             <Link to="/CadAuditor">
//                                 Auditores
//                             </Link>
//                         </li>
//                         <li className="submenu_item">
//                             <Link to="/CadCausa">
//                                 Motivos de causa
//                             </Link>
//                         </li>
//                         <li className="submenu_item">
//                             <Link to="/CadTipoDocReg">
//                                 Tipo de documento de registro
//                             </Link>
//                         </li>
//                         <li className="submenu_item">
//                             <Link to="/CadCausaPerda">
//                                 Causa de perdas
//                             </Link>
//                         </li>
//                         <li className="submenu_item">
//                             <Link to="/CadTipoAvaliacaoOper">
//                                 Tipo de avaliação operacional
//                             </Link>
//                         </li>
//                         <li className="submenu_item">
//                             <Link to="/CadQuestoes">
//                                 Questões
//                             </Link>
//                         </li>
//                         <li className="submenu_item">
//                             <Link to="/CadFrasesPadrao">
//                                 Frases padrão
//                             </Link>
//                         </li>
//                         <li className="submenu_item">
//                             <Link to="/CadManutAuditoria">
//                                 Manutenção de auditoria
//                             </Link>
//                         </li>
//                         <li className="submenu_item">
//                             <Link to="/CadVendasInformadas">
//                                 Vendas informadas
//                             </Link>
//                         </li>
//                         <li className="submenu_item">
//                             <Link to="/CadGrupos">
//                                 Grupos
//                             </Link>
//                         </li>
//                     </MenuList>
//                 </li>
//                 <li className={visibleSubmenu === 1 ? "submenu focus" : "submenu"}>
//                     <Link to="#" className={visibleSubmenu === 1 ? "menu_item subdrop" : "menu_item"} onClick={() => toggleSubmenu(1)} >
//                         <SlList />
//                         <span className="title_link">Relatórios</span>
//                         <span className="menu_arrow">
//                             <IoIosArrowForward />
//                         </span>
//                     </Link>
//                     <MenuList classNameValue={visibleSubmenu === 1 ? "submenu_itens_list visible" : "submenu_itens_list"}>
//                         <li className="submenu_item">
//                             <Link to="/RelEmpresa">
//                                 Empresa
//                             </Link>
//                         </li>
//                         <li className="submenu_item">
//                             <Link to="/RelUser">
//                                 Usuário
//                             </Link>
//                         </li>
//                         <li className="submenu_item">
//                             <Link to="/RelLojas">
//                                 Lojas
//                             </Link>
//                         </li>
//                         <li className="submenu_item">
//                             <Link to="/RelVendasInformadas">
//                                 Vendas informadas
//                             </Link>
//                         </li>
//                         <li className="submenu_item">
//                             <Link to="/RelGrupos">
//                                 Grupos
//                             </Link>
//                         </li>
//                         <li className="submenu_item">
//                             <Link to="/RelCausaPerdas">
//                                 Causa de perdas
//                             </Link>
//                         </li>
//                     </MenuList>
//                 </li>
//             </MenuList>
//         </div>
//     )
// }

// export default Sidebarmenu;