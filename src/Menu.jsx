import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { FaCalendarPlus } from 'react-icons/fa';
import { FaTable } from 'react-icons/fa';

export const Menu = () =>
    <nav className="menu">
        <NavLink to="/" activeClassName="selected">
            <FaHome />
        </NavLink>
        <NavLink to="/add-day" activeClassName="selected">
            <FaCalendarPlus />
        </NavLink>
        <NavLink to="/list-days" activeClassName="selected">
            <FaTable />
        </NavLink>
    </nav>