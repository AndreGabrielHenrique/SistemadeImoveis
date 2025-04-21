// src/components/Footer/index.jsx
import styles from './index.module.sass'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Logo from "../Logo";
import Copyright from './Copyright';

// Componente principal do rodapé com múltiplas seções
const Footer = ({ onLinkClick }) => {
    // Dados das seções dinâmicas
    const sections = [
        {
            title: 'Nossos Serviços',
            items: ['Comprar', 'Alugar', 'Vender']
        },
        {
            title: 'Links Úteis',
            items: ['Carretos', 'Corretores', 'Reforma de Imóveis']
        },
        {
            title: 'Informações de Contato',
            items: ['Localização', 'E-mail', 'Chat']
        }
    ];

    return (
        <>
            <div className={styles.Container}>
                {/* Seção do logo e redes sociais */}
                <span>
                    <Logo />
                    <p>Site criado especialmente para desenvolvimento em React, Vite e SASS, sem fins comerciais.</p>
                    <nav>
                        {/* Ícones de redes sociais interativos */}
                        <li>
                            <span><FaFacebook onClick={onLinkClick} size={32} /></span>
                        </li>
                        <li>
                            <span><FaInstagram onClick={onLinkClick} size={32} /></span>
                        </li>
                        <li>
                            <span><FaWhatsapp onClick={onLinkClick} size={32} /></span>
                        </li>
                    </nav>
                </span>
                
                {/* Geração dinâmica das seções */}
                {sections.map((section) => (
                    <span key={section.title}>
                        <h3>{section.title}</h3>
                        <ul>
                            {section.items.map((item) => (
                                <li key={item}>
                                    <span onClick={onLinkClick}>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </span>
                ))}
            </div>
            <Copyright onLinkClick={onLinkClick} />
        </>
    );
}

export default Footer;