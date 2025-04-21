// src/components/Footer/Copyright.jsx
import styles from './Copyright.module.sass'

// Componente de rodapé com informações de copyright e links legais
const Copyright = ({ onLinkClick }) => {
  return (
    <div className={`${styles.Container} Copyright`}> {/* Classe adicional para seleção específica */}
      {/* Texto de direitos autorais */}
      <p>© 2025 G&P Projetos e Sistemas - Todos os direitos reservados</p>
      
      {/* Lista de links legais */}
      <ul>
        {['Termos de Uso', 'Política de Privacidade', 'Política de Cookies'].map((item) => (
          <li key={item}>
            {/* Links clicáveis com tratamento de evento */}
            <span onClick={onLinkClick}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Copyright;