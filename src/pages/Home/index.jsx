// C:\MEGA\GPnet\Sistema de Imóveis\src\pages\Home\index.jsx
import React from 'react';
import styles from './index.module.sass' // Importação do módulo
import Card from '../../components/Card';

const Home = ({ onLinkClick }) => {
    let Cards = []
    for (let i = 0; i < 4; i++) {
        Cards.push(<Card key={i} onLinkClick={onLinkClick} />)
    }
    
    return (
        <>
            <h2 className={styles.Title}>Encontre sua futura casa aqui</h2>
            <div className={styles.Wrapper}>
                {Cards}
            </div>        
        </>
    );
}

export default Home;