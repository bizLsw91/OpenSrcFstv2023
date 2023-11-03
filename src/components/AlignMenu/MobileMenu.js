import React from 'react';
import { NavLink } from 'react-router-dom';
import menuItems from "../../menuItem";


const MobileMenu = () => {
    const renderSubMenu = (subItems) => {
        if (!subItems || !subItems.length) return null;

        return (
            <ul className="submenu">
                {subItems.map(item => (
                    <li key={item.to}>
                        <NavLink to={item.to}>{item.label}</NavLink>
                        {renderSubMenu(item.subItems)}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <nav id="mobile-menu">
            <ul>
                {menuItems.map(item => (
                    <li key={item.to}>
                        <NavLink to={item.to}>{item.label}</NavLink>
                        {renderSubMenu(item.subItems)}
                    </li>
                ))}
            </ul>
        </nav>
    );};

export default MobileMenu;
