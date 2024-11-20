import React from 'react';
import { NavLink } from 'react-router-dom';
import menuItems from "../../menuItem";
import {FiUser} from "react-icons/fi";


const MobileMenu = () => {
    const lineStyle = {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: '80px', // 원하는 선 길이
        height: '1px',
        backgroundColor: '#1f499d',
        position: 'relative',
    };

    const dotStyle = {
        width: '6px',
        height: '6px',
        backgroundColor: '#1f499d',
        borderRadius: '50%',
        position: 'absolute',
    };
    const renderSubMenu = (subItems) => {
        if (!subItems || !subItems.length) return null;

        return (
            <ul className="submenu">
                {subItems.map(item => (
                    <li key={item.to}>
                        <NavLink to={item.to}>{item.label}</NavLink>
                        <div style={lineStyle}>
                            <span style={{...dotStyle, left: '-5px'}}></span>
                        </div>
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
                {/*<li className="ml-40"><NavLink to="/login"><FiUser className="loginIcon"/>로그인</NavLink></li>*/}
            </ul>
        </nav>
    );};

export default MobileMenu;
