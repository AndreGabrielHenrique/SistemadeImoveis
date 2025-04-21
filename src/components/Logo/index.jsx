// src/components/Logo/index.jsx
import Logotipo from '../../assets/logo.png';
import styles from './index.module.sass'

// Componente de logo reutilizável
const Logo = () => {
    return (
        <div className={styles.Container}>
            <img src={Logotipo} alt="Logo Sistema de Imóveis" />
        </div>
    );
};

export default Logo;