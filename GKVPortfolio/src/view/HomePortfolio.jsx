import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import HowIWork from '../components/HowIWork';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import MApache from '../components/MApache';
import Roadmap from '../components/Roadmap';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function HomePortfolio() {
    const [theme, setTheme] = useState('dark');

    // Load theme from localStorage on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    // Toggle theme and save to localStorage
    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <div className="app">
            <Header theme={theme} toggleTheme={toggleTheme} />
            <main>
                <Hero />
                <About />
                <HowIWork />
                <Skills />
                <Projects />
                <MApache />
                <Roadmap />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default HomePortfolio;
