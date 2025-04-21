// src/components/Banner/index.jsx
import styles from './index.module.sass'

// Componente principal do banner hero da página
const Banner = ({ onLinkClick }) => {
    return (
      <main className={styles.Container}>
        <article>
          {/* Título principal do banner */}
          <h2>Venha conhecer sua nova moradia</h2>
          
          {/* Subtítulo descritivo */}
          <p>Mude de vida agora, oferecemos facilidade para sua procura.</p>
          
          {/* Botão de call-to-action principal */}
          <span onClick={onLinkClick}>Cadastre o seu anúncio gratuitamente</span>
        </article>           
      </main>
    );
}

export default Banner;