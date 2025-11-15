import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.css';
import appStyles from '../App.module.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-20% 0px -20% 0px' }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={styles.navbarBackground}>
      <div className={`${appStyles.pageWrapper} ${styles.navbarContent}`}>

        {/* PARTE 1: IZQUIERDA */}
        <div className={styles.logo}>JGM.DEV</div>

        {/* PARTE 2: DERECHA */}
        <nav className={styles.mainMenu}>
          <ul className={styles.navLinks}>
            <li><a onClick={() => scrollToSection('inicio')} className={activeSection === 'inicio' ? styles.active : ''}>{t('navbar.home')}</a></li>
            <li><a onClick={() => scrollToSection('sobre-mi')} className={activeSection === 'sobre-mi' ? styles.active : ''}>{t('navbar.about')}</a></li>
            <li><a onClick={() => scrollToSection('experiencia')} className={activeSection === 'experiencia' ? styles.active : ''}>{t('navbar.experience')}</a></li>
            <li><a onClick={() => scrollToSection('proyectos')} className={activeSection === 'proyectos' ? styles.active : ''}>{t('navbar.projects')}</a></li>
            <li><a onClick={() => scrollToSection('habilidades')} className={activeSection === 'habilidades' ? styles.active : ''}>{t('navbar.skills')}</a></li>
            <li><a onClick={() => scrollToSection('contacto')} className={activeSection === 'contacto' ? styles.active : ''}>{t('navbar.contact')}</a></li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;
