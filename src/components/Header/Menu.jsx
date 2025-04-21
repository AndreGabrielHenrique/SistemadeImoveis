// src/components/Header/Menu.jsx
import React from 'react';
import styles from './Menu.module.sass'

// Componente de menu de navegação
const Menu = ({ onLinkClick }) => {
    return (
      <div className={styles.Container}>
        <ul onClick={onLinkClick}>
          <li>
            <span>Cadastro/Login</span>  {/* Único item de menu interativo */}
          </li>
        </ul>
      </div>
    );
};

export default Menu;