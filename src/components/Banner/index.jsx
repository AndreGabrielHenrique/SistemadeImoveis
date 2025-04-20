// C:\MEGA\GPnet\Sistema de Imóveis\src\components\Banner\index.jsx
import styles from './index.module.sass' // Importação do módulo

const Banner = ({ onLinkClick }) => {
    return (
      <main className={styles.Container}>
        <article>
          <h2>Venha conhecer sua nova moradia</h2>
          <p>Mude de vida agora, oferecemos facilidade para sua procura.</p>
          <span onClick={onLinkClick}>Cadastre o seu anúncio gratuitamente</span>
        </article>           
      </main>
    );
  }

export default Banner;
