import { useState } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // For now, just create a mailto link
        const subject = encodeURIComponent(`Contacto desde portfolio - ${formData.name}`);
        const body = encodeURIComponent(`Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`);
        window.location.href = `mailto:contacto@mapache.dev?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className="section-title slide-up">Contacto</h2>

                <div className="contact-content">
                    <div className="contact-info slide-up stagger-1">
                        <p className="contact-intro">
                            ¿Tenés un proyecto en mente o querés charlar sobre desarrollo web?
                            No dudes en contactarme.
                        </p>

                        <div className="contact-links">
                            <a
                                href="mailto:contacto@mapache.dev"
                                className="contact-link glass-card"
                            >
                                <FiMail size={24} />
                                <span>contacto@mapache.dev</span>
                            </a>

                            <a
                                href="https://github.com/tiagou0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-link glass-card"
                            >
                                <FiGithub size={24} />
                                <span>GitHub</span>
                            </a>

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-link glass-card"
                            >
                                <FiLinkedin size={24} />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="contact-form glass-card slide-up stagger-2">
                        <div className="form-group">
                            <label htmlFor="name">Nombre</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Tu nombre"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="tu@email.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                placeholder="Contame sobre tu proyecto..."
                            />
                        </div>

                        <button type="submit" className="btn btn-primary btn-lg">
                            <FiSend />
                            Enviar mensaje
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
