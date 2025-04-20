// src/components/Card/index.jsx
import styles from './index.module.sass'
import Img from "../../assets/mike-nguyen-t-4xEHYhr2g-unsplash.jpg"
import { FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa';

const Card = ({ onLinkClick }) => {
    const handleClick = (e) => {
        e.preventDefault();
        onLinkClick(e);
    };

    return (
        <figure>
            <img src={Img} alt="" />
            <p>
                <h3>Apartamento</h3>
                <div className={styles.Itens}>
                    <span><FaMapMarkerAlt />Pezinho de Pirapora, Capataz</span>
                    <span>R$ 2.400,00 / mês</span>
                </div>
                <a href="#" onClick={handleClick}>Detalhes <FaArrowRight /></a>
            </p>
        </figure>
    );
}

export default Card;