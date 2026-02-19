import { useEffect, useRef } from 'react';
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
            { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
        );

        const section = sectionRef.current;
        if (section) {
            const animatedElements = section.querySelectorAll('.skill-animate');
            animatedElements.forEach((el) => observer.observe(el));
        }

        return () => observer.disconnect();
    }, []);

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

    const renderCategory = (title, items, categoryIndex) => (
        <div className="skills-category skill-animate" style={{ '--category-delay': `${categoryIndex * 150}ms` }}>
            <h3 className="category-title">{title}</h3>
            <div className="skills-grid grid-4">
                {items.map((skill, index) => (
                    <div
                        key={skill.name}
                        className="skill-card glass-card skill-animate"
                        style={{ '--card-delay': `${categoryIndex * 150 + (index + 1) * 100}ms` }}
                    >
                        <div className="skill-icon">{skill.icon}</div>
                        <p className="skill-name">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section id="skills" className="section" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title skill-animate">Habilidades Técnicas</h2>

                {renderCategory('Lenguajes', languages, 0)}
                {renderCategory('Frameworks', frameworks, 1)}
                {renderCategory('Librerías', libraries, 2)}
                {renderCategory('Competencias Clave', competencies, 3)}
            </div>
        </section>
    );
};

export default Skills;
