import { FiSearch, FiLayers, FiCode, FiZap } from 'react-icons/fi';
import './HowIWork.css';

const HowIWork = () => {
    const steps = [
        {
            icon: <FiSearch />,
            title: 'Entendimiento del problema',
            description: 'Analizo a fondo los requisitos y objetivos del proyecto para comprender qué se necesita realmente.'
        },
        {
            icon: <FiLayers />,
            title: 'Diseño de arquitectura',
            description: 'Planifico la estructura técnica, eligiendo las tecnologías y patrones más adecuados para el caso.'
        },
        {
            icon: <FiCode />,
            title: 'Desarrollo iterativo',
            description: 'Implemento la solución de forma incremental, priorizando funcionalidad y mantenibilidad.'
        },
        {
            icon: <FiZap />,
            title: 'Optimización y mantenimiento',
            description: 'Refino el código, mejoro el rendimiento y aseguro que el proyecto sea escalable a largo plazo.'
        }
    ];

    return (
        <section id="how-i-work" className="section how-i-work-section">
            <div className="container">
                <h2 className="section-title slide-up">Cómo trabajo</h2>

                <div className="steps-grid">
                    {steps.map((step, index) => (
                        <div key={index} className={`step-card glass-card slide-up stagger-${index + 1}`}>
                            <div className="step-icon">
                                {step.icon}
                            </div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-description">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowIWork;
