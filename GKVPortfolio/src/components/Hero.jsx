import { useState, useEffect } from 'react';
import { FiArrowRight, FiMail } from 'react-icons/fi';
import './Hero.css';
import profileImg from '../assets/mapacheSinLetras.png';

const Hero = () => {
    const [displayedText, setDisplayedText] = useState('');
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const fullText = 'Germán Kuszmiruk Vispo';

    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setDisplayedText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                setIsTypingComplete(true);
                clearInterval(typingInterval);
            }
        }, 60); // 60ms per character

        return () => clearInterval(typingInterval);
    }, []);

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const element = document.querySelector(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="hero">
            <div className="hero-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content fade-in">
                    <h1 className="hero-title">
                        {displayedText}
                        <span className={`typewriter-cursor ${isTypingComplete ? 'blink' : ''}`}>|</span>
                    </h1>

                    <div className="hero-image-wrapper">
                        <img src={profileImg} alt="Germán Kuszmiruk Vispo" className="hero-profile-img" />
                    </div>

                    <h2 className="hero-subtitle">
                        Backend Dev Semi-Senior <span className="gradient-text">•</span> CEO de mApache
                    </h2>
                    <p className="hero-description">
                        Desarrollo soluciones web escalables con foco en arquitectura, buenas prácticas y objetivos reales de negocio.
                    </p>

                    <div className="hero-cta">
                        <a
                            href="#projects"
                            className="btn btn-primary btn-lg"
                            onClick={(e) => handleScroll(e, '#projects')}
                        >
                            Ver Proyectos
                            <FiArrowRight />
                        </a>
                        <a
                            href="#contact"
                            className="btn btn-secondary btn-lg"
                            onClick={(e) => handleScroll(e, '#contact')}
                        >
                            <FiMail />
                            Contactar
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
