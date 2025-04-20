// C:\MEGA\GPnet\Sistema de Imóveis\src\components\Header\Menu.jsx
import React from 'react';
import styles from './Menu.module.sass' // Importação do módulo

const Menu = ({ onLinkClick }) => {
    return (
      <div className={styles.Container}>
        <ul onClick={onLinkClick}>
          <li>
            <span>Cadastro/Login</span>
          </li>
        </ul>
      </div>
    );
};

export default Menu;