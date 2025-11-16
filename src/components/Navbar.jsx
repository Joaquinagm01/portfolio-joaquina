import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.css';
import { FaSun, FaMoon, FaTimes } from 'react-icons/fa';

const Navbar = ({ toggleTheme, theme }) => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('inicio');

  const handleScroll = () => {
    const sections = ['inicio', 'sobre-mi', 'experiencia', 'proyectos', 'habilidades', 'contacto'];
    const scrollPosition = window.scrollY + 100;

    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
        setActiveLink(sectionId);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.navbarBackground}>
      <div className={`${styles.pageWrapper} ${styles.navbarContent}`}>
        <a href="#inicio" className={styles.logo}>JGM.DEV</a>

        <nav className={styles.mainMenu}>
          <ul className={menuOpen ? styles.mobileMenuOpen : styles.navLinks}>
            <li><a href="#inicio" className={activeLink === 'inicio' ? styles.active : ''} onClick={handleLinkClick}>{t('navbar.home')}</a></li>
            <li><a href="#sobre-mi" className={activeLink === 'sobre-mi' ? styles.active : ''} onClick={handleLinkClick}>{t('navbar.about')}</a></li>
            <li><a href="#experiencia" className={activeLink === 'experiencia' ? styles.active : ''} onClick={handleLinkClick}>{t('navbar.experience')}</a></li>
            <li><a href="#proyectos" className={activeLink === 'proyectos' ? styles.active : ''} onClick={handleLinkClick}>{t('navbar.projects')}</a></li>
            <li><a href="#habilidades" className={activeLink === 'habilidades' ? styles.active : ''} onClick={handleLinkClick}>{t('navbar.skills')}</a></li>
            <li><a href="#contacto" className={activeLink === 'contacto' ? styles.active : ''} onClick={handleLinkClick}>{t('navbar.contact')}</a></li>
            {menuOpen && (
              <li className={styles.mobileMenuClose}>
                <button onClick={() => setMenuOpen(false)} className={styles.closeButton}><FaTimes /></button>
              </li>
            )}
          </ul>
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)} className={styles.hamburgerMenu}>
          <div className={styles.hamburgerLine}></div>
          <div className={styles.hamburgerLine}></div>
          <div className={styles.hamburgerLine}></div>
        </button>

        <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle theme">
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;