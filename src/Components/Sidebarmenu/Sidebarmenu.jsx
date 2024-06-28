import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuList from "./SubmenuItem";
import { SlChart } from "react-icons/sl";
import { BsDatabaseAdd } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { SlList } from "react-icons/sl";
import { listaCadastros, listaRelatorios } from "../../constants/variables";
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
                        <span className="title_link">Deshboard</span>
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
                            {listaCadastros.map((item, index) => (
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
                            {listaRelatorios.map((item, index) => (
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
    )
}

export default Sidebarmenu;