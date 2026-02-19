import { useEffect, useRef, useState } from 'react';
import { FiGithub, FiExternalLink, FiClock } from 'react-icons/fi';
import './Projects.css';

// Equipo Cálido images
import EC1 from '../assets/equipocalido/EC1.png';
import EC2 from '../assets/equipocalido/EC2.png';
import EC3 from '../assets/equipocalido/EC3.png';

// Julio César images
import JC1 from '../assets/juliocesar/JC1.png';
import JC2 from '../assets/juliocesar/JC2.png';
import JC3 from '../assets/juliocesar/JC3.png';

// Buenas Viandas images
import BV1 from '../assets/buenavianda/BV1.png';
import BV2 from '../assets/buenavianda/BV2.png';
import BV3 from '../assets/buenavianda/BV3.png';

const CROSSFADE_INTERVAL = 4000; // ms between image transitions

const ProjectImageCarousel = ({ images, alt }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % images.length);
        }, CROSSFADE_INTERVAL);

        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="project-image-container">
            {images.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`${alt} - ${index + 1}`}
                    className={`project-image ${index === activeIndex ? 'active' : ''}`}
                />
            ))}
        </div>
    );
};

const Projects = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    }
                });
            },
            { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
        );

        const section = sectionRef.current;
        if (section) {
            const animatedElements = section.querySelectorAll('.project-animate');
            animatedElements.forEach((el) => observer.observe(el));
        }

        return () => observer.disconnect();
    }, []);

    const mapacheProjects = [
        {
            name: 'Equipo Cálido',
            description: 'Plataforma web para gestión de equipos de climatización. Sistema completo con panel administrativo y catálogo de productos.',
            role: 'Desarrollo Full Stack - DevOps',
            tech: ['React', 'Node.js', 'Firebase'],
            github: 'https://github.com/tiagou0/Equipo-Calido',
            images: [EC1, EC2, EC3],
        },
        {
            name: 'Julio César Web',
            description: 'Sitio web corporativo moderno y responsive para empresa de servicios. Diseño profesional con enfoque en conversión.',
            role: 'Desarrollo Backend',
            tech: ['React', 'Node.js', 'Express', 'Firebase'],
            github: 'https://github.com/tiagou0/juliocesarweb',
            images: [JC1, JC2, JC3],
        },
        {
            name: 'Buenas Viandas – Software Chico',
            description: 'Sistema de gestión para servicio de viandas. Incluye administración de pedidos, menús y clientes.',
            role: 'Desarrollo Full Stack',
            tech: ['React', 'Node.js', 'Express', 'Firebase'],
            github: 'https://github.com/tiagou0/buenas-viandas-softwarechico',
            images: [BV1, BV2, BV3],
        },
    ];

    return (
        <section id="projects" className="section projects-section" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title project-animate">Proyectos</h2>

                {/* mApache Projects */}
                <div className="projects-subsection">
                    <h3 className="subsection-title project-animate" style={{ '--project-delay': '100ms' }}>Proyectos mApache</h3>
                    <div className="projects-grid">
                        {mapacheProjects.map((project, index) => (
                            <div
                                key={project.name}
                                className="project-card glass-card project-animate"
                                style={{ '--project-delay': `${(index + 1) * 200}ms` }}
                            >
                                <ProjectImageCarousel
                                    images={project.images}
                                    alt={project.name}
                                />

                                <div className="project-header">
                                    <h4 className="project-name">{project.name}</h4>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                        aria-label={`Ver ${project.name} en GitHub`}
                                    >
                                        <FiGithub size={20} />
                                    </a>
                                </div>

                                <p className="project-description">{project.description}</p>

                                <div className="project-meta">
                                    <p className="project-role">
                                        <strong>Rol:</strong> {project.role}
                                    </p>
                                    <div className="project-tech">
                                        {project.tech.map((tech) => (
                                            <span key={tech} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary btn-sm"
                                >
                                    <FiGithub />
                                    Ver en GitHub
                                    <FiExternalLink size={14} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Personal Projects Teaser */}
                <div className="projects-subsection">
                    <h3 className="subsection-title project-animate" style={{ '--project-delay': '100ms' }}>Proyectos Propios</h3>
                    <div className="teaser-card glass-card project-animate" style={{ '--project-delay': '250ms' }}>
                        <div className="teaser-icon">
                            <FiClock size={48} />
                        </div>
                        <h4 className="teaser-title">Próximamente</h4>
                        <p className="teaser-description">
                            Proyectos personales en desarrollo, enfocados en ideas propias y experimentación técnica.
                            Pronto compartiré soluciones innovadoras y casos de estudio interesantes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
