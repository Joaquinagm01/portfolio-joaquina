import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.css';
import appStyles from '../App.module.css';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ 
  theme, 
  themeMode, 
  toggleTheme, 
  enableSystemTheme, 
  enableAutoTheme, 
  enableManualTheme, 
  scrollToSection 
}) => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  // Animación de entrada al cargar
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleScroll = () => {
    const sections = ['inicio', 'sobre-mi', 'experiencia', 'cursos', 'proyectos', 'habilidades', 'contacto'];
    const scrollPosition = window.scrollY + 150; // Offset para mejor detección

    // Calcular progreso de scroll
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / (documentHeight - windowHeight)) * 100;
    setScrollProgress(Math.min(progress, 100));

    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
        setActiveSection(sectionId);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Llamar inmediatamente para establecer sección inicial
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <header className={`${styles.navbarBackground} ${isVisible ? styles.navbarVisible : ''}`}>
      {/* Barra de progreso de scroll */}
      <div className={styles.scrollProgress} style={{ width: `${scrollProgress}%` }} />
      
      <div className={`${appStyles.pageWrapper} ${styles.navbarContent}`}>

        {/* PARTE 1: IZQUIERDA */}
        <div className={styles.logo}>JGM.DEV</div>

        {/* PARTE 2: DERECHA */}
        <nav className={styles.navMenu}>
          {/* Menú para Escritorio */}
          <div className={styles.desktopMenu}>
            <ul className={styles.navLinks}>
              <li><a onClick={() => handleNavClick('inicio')} className={activeSection === 'inicio' ? styles.active : ''}>{t('navbar.home')}</a></li>
              <li><a onClick={() => handleNavClick('sobre-mi')} className={activeSection === 'sobre-mi' ? styles.active : ''}>{t('navbar.about')}</a></li>
              <li><a onClick={() => handleNavClick('experiencia')} className={activeSection === 'experiencia' ? styles.active : ''}>{t('navbar.experience')}</a></li>
              <li><a onClick={() => handleNavClick('cursos')} className={activeSection === 'cursos' ? styles.active : ''}>{t('navbar.courses')}</a></li>
              <li><a onClick={() => handleNavClick('proyectos')} className={activeSection === 'proyectos' ? styles.active : ''}>{t('navbar.projects')}</a></li>
              <li><a onClick={() => handleNavClick('habilidades')} className={activeSection === 'habilidades' ? styles.active : ''}>{t('navbar.skills')}</a></li>
              <li><a onClick={() => handleNavClick('contacto')} className={activeSection === 'contacto' ? styles.active : ''}>{t('navbar.contact')}</a></li>
            </ul>
          </div>

          {/* Menú Lateral para Móvil */}
          {isMenuOpen && <div className={styles.sideMenuBackdrop} onClick={() => setIsMenuOpen(false)} />}
          <div className={`${styles.sideMenu} ${isMenuOpen ? styles.menuOpen : ''}`}>
            <button onClick={() => setIsMenuOpen(false)} className={styles.closeButton}>✕</button>
            <ul className={styles.sideMenuLinks}>
              <li><a onClick={() => handleNavClick('inicio')} className={activeSection === 'inicio' ? styles.active : ''}>{t('navbar.home')}</a></li>
              <li><a onClick={() => handleNavClick('sobre-mi')} className={activeSection === 'sobre-mi' ? styles.active : ''}>{t('navbar.about')}</a></li>
              <li><a onClick={() => handleNavClick('experiencia')} className={activeSection === 'experiencia' ? styles.active : ''}>{t('navbar.experience')}</a></li>
              <li><a onClick={() => handleNavClick('cursos')} className={activeSection === 'cursos' ? styles.active : ''}>{t('navbar.courses')}</a></li>
              <li><a onClick={() => handleNavClick('proyectos')} className={activeSection === 'proyectos' ? styles.active : ''}>{t('navbar.projects')}</a></li>
              <li><a onClick={() => handleNavClick('habilidades')} className={activeSection === 'habilidades' ? styles.active : ''}>{t('navbar.skills')}</a></li>
              <li><a onClick={() => handleNavClick('contacto')} className={activeSection === 'contacto' ? styles.active : ''}>{t('navbar.contact')}</a></li>
            </ul>
          </div>

          {/* Controles de la derecha (siempre visibles) */}
          <div className={styles.navControls}>
            <button className={styles.hamburgerMenu} onClick={() => setIsMenuOpen(true)} aria-label="Toggle mobile menu" aria-expanded={isMenuOpen}>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
            </button>
            <ThemeToggle
              theme={theme}
              themeMode={themeMode}
              onToggle={toggleTheme}
              onSystemMode={enableSystemTheme}
              onAutoMode={enableAutoTheme}
              onManualMode={enableManualTheme}
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;