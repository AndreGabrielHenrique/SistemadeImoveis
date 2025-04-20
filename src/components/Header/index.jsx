// C:\MEGA\GPnet\Sistema de Imóveis\src\components\Header\index.jsx
import Logo from "../Logo";
import Menu from "./Menu";
import styles from './index.module.sass' // Importação do módulo

const Header = ({ onLinkClick }) => {
    return (
      <div className={styles.Container}>
        <Logo />
        <Menu onLinkClick={onLinkClick} />
      </div>
    );
}

export default Header;
