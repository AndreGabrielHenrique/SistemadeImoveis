// C:\MEGA\GPnet\Sistema de Imóveis\src\components\Footer\Copyright.jsx
import styles from './Copyright.module.sass' // Importação do módulo

const Copyright = ({ onLinkClick }) => {
  return (
    <div className={`${styles.Container} Copyright`}> {/* Adicione a classe Copyright */}
      <p>© 2025 G&P Projetos e Sistemas - Todos os direitos reservados</p>
      <ul>
        {['Termos de Uso', 'Política de Privacidade', 'Política de Cookies'].map((item) => (
          <li key={item}>
            <span onClick={onLinkClick}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Copyright;
