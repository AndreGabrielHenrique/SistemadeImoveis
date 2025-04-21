// src/components/Card/index.jsx
import styles from './index.module.sass'
import Img from "../../assets/mike-nguyen-t-4xEHYhr2g-unsplash.jpg"
import { FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa';

// Componente de card para exibição de imóveis
const Card = ({ onLinkClick }) => {
    const handleClick = (e) => {
        e.preventDefault();
        onLinkClick(e);  // Propagação do evento para o componente pai
    };

    return (
        <figure>
            {/* Imagem do imóvel (placeholder estático) */}
            <img src={Img} alt="Imagem do imóvel" />
            
            <p>
                <h3>Apartamento</h3>
                
                {/* Container de informações básicas */}
                <div className={styles.Itens}>
                    <span><FaMapMarkerAlt /> Pezinho de Pirapora, Capataz</span>
                    <span>R$ 2.400,00 / mês</span>
                </div>
                
                {/* Link para detalhes do imóvel */}
                <a href="#" onClick={handleClick}>
                    Detalhes <FaArrowRight />
                </a>
            </p>
        </figure>
    );
}

export default Card;