import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Breadcrumbs.module.css';

const Breadcrumbs = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const { t } = useTranslation();

  const sections = [
    { id: 'inicio', icon: '🏠', key: 'navbar.home' },
    { id: 'sobre-mi', icon: '👤', key: 'navbar.about' },
    { id: 'experiencia', icon: '💼', key: 'navbar.experience' },
    { id: 'cursos', icon: '📚', key: 'navbar.courses' },
    { id: 'proyectos', icon: '🚀', key: 'navbar.projects' },
    { id: 'habilidades', icon: '⚡', key: 'navbar.skills' },
    { id: 'contacto', icon: '📬', key: 'navbar.contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && 
            scrollPosition >= element.offsetTop && 
            scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentSection = sections.find(s => s.id === activeSection);
  const currentIndex = sections.findIndex(s => s.id === activeSection);

  return (
    <div className={styles.breadcrumbs}>
      <div className={styles.breadcrumbsContent}>
        {/* Section indicator */}
        <div className={styles.currentSection}>
          <span className={styles.sectionIcon}>{currentSection?.icon}</span>
          <span className={styles.sectionText}>{t(currentSection?.key)}</span>
        </div>
        
        {/* Progress dots */}
        <div className={styles.progressDots}>
          {sections.map((section, index) => (
            <button
              key={section.id}
              className={`${styles.dot} ${index === currentIndex ? styles.active : ''} ${index < currentIndex ? styles.completed : ''}`}
              onClick={() => {
                const element = document.getElementById(section.id);
                if (element) {
                  const navbarOffset = 100;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              aria-label={t(section.key)}
              title={t(section.key)}
            />
          ))}
        </div>

        {/* Progress percentage */}
        <div className={styles.progressText}>
          {currentIndex + 1} / {sections.length}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
