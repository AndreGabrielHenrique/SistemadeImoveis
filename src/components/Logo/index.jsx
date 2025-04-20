// C:\MEGA\GPnet\Sistema de Imóveis\src\components\Logo\index.jsx
import Logotipo from '../../assets/logo.png';
import styles from './index.module.sass' // Importação do módulo

const Logo = () => {
    return (
        <div className={styles.Container}>
            <img src={Logotipo} alt="" />
        </div>
    );
};

export default Logo;