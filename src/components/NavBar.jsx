// src/components/NavBar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';  // estilos para el menú

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Presentación
          </NavLink>
        </li>
        <li>
          <NavLink to="/cv" className={({ isActive }) => isActive ? 'active' : ''}>
            CV Tradicional
          </NavLink>
        </li>
        <li>
          <NavLink to="/infografico" className={({ isActive }) => isActive ? 'active' : ''}>
            CV Infográfico
          </NavLink>
        </li>
        <li>
          <NavLink to="/video" className={({ isActive }) => isActive ? 'active' : ''}>
            Vídeo CV
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}