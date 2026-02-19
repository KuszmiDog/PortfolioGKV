import { FiGithub, FiExternalLink, FiClock } from 'react-icons/fi';
import './Projects.css';
import equipoCalidoImg from '../assets/EquipoCalido.png';
import julioCesarImg from '../assets/JulioCesar.png';
import buenasViandasImg from '../assets/BuenasViandas.png';

const Projects = () => {
    const mapacheProjects = [
        {
            name: 'Equipo Cálido',
            description: 'Plataforma web para gestión de equipos de climatización. Sistema completo con panel administrativo y catálogo de productos.',
            role: 'Desarrollo Full Stack - DevOps',
            tech: ['React', 'Node.js', 'Firebase'],
            github: 'https://github.com/tiagou0/Equipo-Calido',
            image: equipoCalidoImg,
        },
        {
            name: 'Julio César Web',
            description: 'Sitio web corporativo moderno y responsive para empresa de servicios. Diseño profesional con enfoque en conversión.',
            role: 'Desarrollo Backend',
            tech: ['React', 'Node.js', 'Express', 'Firebase'],
            github: 'https://github.com/tiagou0/juliocesarweb',
            image: julioCesarImg,
        },
        {
            name: 'Buenas Viandas – Software Chico',
            description: 'Sistema de gestión para servicio de viandas. Incluye administración de pedidos, menús y clientes.',
            role: 'Desarrollo Full Stack',
            tech: ['React', 'Node.js', 'Express', 'Firebase'],
            github: 'https://github.com/tiagou0/buenas-viandas-softwarechico',
            image: buenasViandasImg,
        },
    ];

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title slide-up">Proyectos</h2>

                {/* mApache Projects */}
                <div className="projects-subsection">
                    <h3 className="subsection-title">Proyectos mApache</h3>
                    <div className="projects-grid">
                        {mapacheProjects.map((project, index) => (
                            <div key={project.name} className={`project-card glass-card slide-up stagger-${(index % 3) + 1}`}>
                                <div className="project-image-container">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="project-image"
                                    />
                                </div>

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
                    <h3 className="subsection-title">Proyectos Propios</h3>
                    <div className="teaser-card glass-card slide-up">
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
