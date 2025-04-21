// src/components/Header/index.jsx
import Logo from "../Logo";
import Menu from "./Menu";
import styles from './index.module.sass'

// Componente de cabeçalho principal
const Header = ({ onLinkClick }) => {
    return (
      <div className={styles.Container}>
        <Logo />
        <Menu onLinkClick={onLinkClick} />  {/* Componente de menu de navegação */}
      </div>
    );
}

export default Header;