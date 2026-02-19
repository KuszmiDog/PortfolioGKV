import './About.css';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="about-content">
                    <h2 className="slide-up">Sobre mí</h2>

                    <div className="about-text slide-up stagger-1">
                        <p>
                            Soy desarrollador web semi-senior con una fuerte pasión por crear soluciones
                            escalables y mantenibles. Mi enfoque va más allá de escribir código: me interesa
                            entender el problema de fondo, diseñar arquitecturas sólidas y construir productos
                            que realmente aporten valor.
                        </p>

                        <p>
                            Como <strong>CEO y fundador de mApache</strong>, lidero proyectos de desarrollo
                            web y asesoría técnica, trabajando con clientes para transformar sus ideas en
                            productos digitales funcionales y profesionales.
                        </p>

                        <p>
                            Constantemente busco profundizar en arquitecturas de software, patrones de diseño
                            y tecnologías modernas que me permitan ofrecer soluciones cada vez más robustas
                            y eficientes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
