import { FiCode, FiLayers, FiTrendingUp } from 'react-icons/fi';
import './Roadmap.css';

const Roadmap = () => {
    const roadmapItems = [
        {
            icon: <FiCode />,
            title: 'Desarrollo de proyectos propios',
            description: 'Trabajando en ideas personales que combinan experimentación técnica con soluciones prácticas.'
        },
        {
            icon: <FiLayers />,
            title: 'Profundización en arquitectura',
            description: 'Estudiando patrones avanzados, microservicios y diseño de sistemas escalables.'
        },
        {
            icon: <FiTrendingUp />,
            title: 'Escalado de mApache',
            description: 'Expandiendo el alcance de la empresa y consolidando procesos de trabajo.'
        }
    ];

    return (
        <section id="roadmap" className="section roadmap-section">
            <div className="container">
                <h2 className="section-title slide-up">Roadmap Actual</h2>

                <div className="roadmap-grid">
                    {roadmapItems.map((item, index) => (
                        <div key={index} className={`roadmap-card glass-card slide-up stagger-${index + 1}`}>
                            <div className="roadmap-icon">
                                {item.icon}
                            </div>
                            <h3 className="roadmap-title">{item.title}</h3>
                            <p className="roadmap-description">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
