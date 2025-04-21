// src/pages/Home/index.jsx
import styles from './index.module.sass'
import Card from '../../components/Card';

// Página principal com listagem de imóveis
const Home = ({ onLinkClick }) => {
    let Cards = []
    // Geração de cards placeholder
    for (let i = 0; i < 4; i++) {
        Cards.push(<Card key={i} onLinkClick={onLinkClick} />)
    }
    
    return (
        <>
            <h2 className={styles.Title}>Encontre sua futura casa aqui</h2>
            <div className={styles.Wrapper}>
                {Cards}  {/* Renderização dos cards */}
            </div>        
        </>
    );
}

export default Home;