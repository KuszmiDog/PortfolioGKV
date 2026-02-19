import { FiHeart } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-container">
                <p className="footer-text">
                    © {currentYear} Germán Kuszmiruk Vispo. Desarrollado con <FiHeart className="heart-icon" /> usando React + Vite
                </p>
            </div>
        </footer>
    );
};

export default Footer;
