import {
    SiJavascript,
    SiPython,
    SiExpress,
    SiNextdotjs,
    SiReact
} from 'react-icons/si';
import { FiLayers, FiShoppingCart, FiServer, FiTrendingUp, FiCode } from 'react-icons/fi';
import './Skills.css';

const Skills = () => {
    const languages = [
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'Java', icon: <FiCode /> },
        { name: 'Python', icon: <SiPython /> },
        { name: 'C#', icon: <FiCode /> },
    ];

    const frameworks = [
        { name: 'Express', icon: <SiExpress /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
    ];

    const libraries = [
        { name: 'React', icon: <SiReact /> },
    ];

    const competencies = [
        { name: 'Arquitecturas y patrones', icon: <FiLayers /> },
        { name: 'Desarrollo de e-commerce', icon: <FiShoppingCart /> },
        { name: 'Diseño de APIs', icon: <FiServer /> },
        { name: 'Escalabilidad', icon: <FiTrendingUp /> },
    ];

    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title slide-up">Habilidades Técnicas</h2>

                <div className="skills-category">
                    <h3 className="category-title">Lenguajes</h3>
                    <div className="skills-grid grid-4">
                        {languages.map((skill, index) => (
                            <div key={skill.name} className={`skill-card glass-card slide-up stagger-${(index % 4) + 1}`}>
                                <div className="skill-icon">{skill.icon}</div>
                                <p className="skill-name">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="skills-category">
                    <h3 className="category-title">Frameworks</h3>
                    <div className="skills-grid grid-4">
                        {frameworks.map((skill, index) => (
                            <div key={skill.name} className={`skill-card glass-card slide-up stagger-${(index % 4) + 1}`}>
                                <div className="skill-icon">{skill.icon}</div>
                                <p className="skill-name">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="skills-category">
                    <h3 className="category-title">Librerías</h3>
                    <div className="skills-grid grid-4">
                        {libraries.map((skill, index) => (
                            <div key={skill.name} className={`skill-card glass-card slide-up stagger-${(index % 4) + 1}`}>
                                <div className="skill-icon">{skill.icon}</div>
                                <p className="skill-name">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="skills-category">
                    <h3 className="category-title">Competencias Clave</h3>
                    <div className="skills-grid grid-4">
                        {competencies.map((skill, index) => (
                            <div key={skill.name} className={`skill-card glass-card slide-up stagger-${(index % 4) + 1}`}>
                                <div className="skill-icon">{skill.icon}</div>
                                <p className="skill-name">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
