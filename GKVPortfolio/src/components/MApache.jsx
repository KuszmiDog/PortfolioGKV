import { FiTarget, FiTrendingUp, FiAward } from 'react-icons/fi';
import './MApache.css';

const MApache = () => {
    return (
        <section id="mapache" className="section">
            <div className="container">
                <div className="mapache-content">
                    <h2 className="section-title slide-up">mApache</h2>

                    <div className="mapache-intro slide-up stagger-1">
                        <p className="intro-text">
                            <strong>mApache</strong> es una empresa de desarrollo web y asesoría técnica
                            fundada con el objetivo de ofrecer soluciones digitales profesionales, escalables
                            y orientadas a resultados reales de negocio.
                        </p>
                    </div>

                    <div className="mapache-features">
                        <div className="feature-card glass-card slide-up stagger-2">
                            <div className="feature-icon">
                                <FiTarget />
                            </div>
                            <h3 className="feature-title">Qué ofrecemos</h3>
                            <p className="feature-description">
                                Desarrollo web completo, desde sitios corporativos hasta aplicaciones complejas.
                                También brindamos asesoría técnica para proyectos en curso y auditorías de código.
                            </p>
                        </div>

                        <div className="feature-card glass-card slide-up stagger-3">
                            <div className="feature-icon">
                                <FiTrendingUp />
                            </div>
                            <h3 className="feature-title">Enfoque de trabajo</h3>
                            <p className="feature-description">
                                Priorizamos la comunicación clara, el entendimiento profundo del problema y
                                la entrega de soluciones mantenibles que puedan crecer con el negocio.
                            </p>
                        </div>

                        <div className="feature-card glass-card slide-up stagger-4">
                            <div className="feature-icon">
                                <FiAward />
                            </div>
                            <h3 className="feature-title">Valor diferencial</h3>
                            <p className="feature-description">
                                No solo escribimos código: diseñamos arquitecturas sólidas, aplicamos buenas
                                prácticas y nos aseguramos de que cada proyecto sea escalable y profesional.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MApache;
