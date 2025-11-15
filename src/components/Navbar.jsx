import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.css';
import appStyles from '../App.module.css';

const Navbar = ({ toggleTheme, theme }) => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let currentActive = '';
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentActive = entry.target.id;
          }
        });

        // Only update if we found an intersecting section
        if (currentActive) {
          setActiveSection(currentActive);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-80px 0px -50% 0px' // Trigger when section is near top
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Handle scroll to update active section when scrolling manually
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close side menu after navigation
  };

  return (
    <header className={styles.navbarBackground}>
      <div className={`${appStyles.pageWrapper} ${styles.navbarContent}`}>

        {/* PARTE 1: IZQUIERDA */}
        <div className={styles.logo}>JGM.DEV</div>

        {/* PARTE 2: DERECHA */}
        <nav className={styles.navMenu}>
          {/* Menú para Escritorio */}
          <div className={styles.desktopMenu}>
            <ul className={styles.navLinks}>
              <li><a onClick={() => scrollToSection('inicio')} className={activeSection === 'inicio' ? styles.active : ''}>{t('navbar.home')}</a></li>
              <li><a onClick={() => scrollToSection('sobre-mi')} className={activeSection === 'sobre-mi' ? styles.active : ''}>{t('navbar.about')}</a></li>
              <li><a onClick={() => scrollToSection('experiencia')} className={activeSection === 'experiencia' ? styles.active : ''}>{t('navbar.experience')}</a></li>
              <li><a onClick={() => scrollToSection('proyectos')} className={activeSection === 'proyectos' ? styles.active : ''}>{t('navbar.projects')}</a></li>
              <li><a onClick={() => scrollToSection('habilidades')} className={activeSection === 'habilidades' ? styles.active : ''}>{t('navbar.skills')}</a></li>
              <li><a onClick={() => scrollToSection('contacto')} className={activeSection === 'contacto' ? styles.active : ''}>{t('navbar.contact')}</a></li>
            </ul>
          </div>

          {/* Menú Lateral para Móvil */}
          <div className={`${styles.sideMenu} ${isMenuOpen ? styles.menuOpen : ''}`}>
            <button onClick={() => setIsMenuOpen(false)} className={styles.closeButton}>✕</button>
            <ul className={styles.sideMenuLinks}>
              <li><a onClick={() => scrollToSection('inicio')} className={activeSection === 'inicio' ? styles.active : ''}>{t('navbar.home')}</a></li>
              <li><a onClick={() => scrollToSection('sobre-mi')} className={activeSection === 'sobre-mi' ? styles.active : ''}>{t('navbar.about')}</a></li>
              <li><a onClick={() => scrollToSection('experiencia')} className={activeSection === 'experiencia' ? styles.active : ''}>{t('navbar.experience')}</a></li>
              <li><a onClick={() => scrollToSection('proyectos')} className={activeSection === 'proyectos' ? styles.active : ''}>{t('navbar.projects')}</a></li>
              <li><a onClick={() => scrollToSection('habilidades')} className={activeSection === 'habilidades' ? styles.active : ''}>{t('navbar.skills')}</a></li>
              <li><a onClick={() => scrollToSection('contacto')} className={activeSection === 'contacto' ? styles.active : ''}>{t('navbar.contact')}</a></li>
            </ul>
          </div>

          {/* Controles de la derecha (siempre visibles) */}
          <div className={styles.navControls}>
            <button className={styles.hamburgerMenu} onClick={() => setIsMenuOpen(true)} aria-label="Toggle mobile menu" aria-expanded={isMenuOpen}>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
            </button>
            <button onClick={toggleTheme} className={styles.themeToggle} aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
