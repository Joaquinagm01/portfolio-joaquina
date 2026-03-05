import './index.css'
import './styles/animations.css'

import React, { Suspense, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './App.module.css'
import Navbar from './components/Navbar';
import AnimateOnScroll from '../AnimateOnScroll.jsx';
import LanguageSelector from './components/LanguageSelector';
import Courses from './components/Courses';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import Breadcrumbs from './components/Breadcrumbs';
import InteractionFeedback from './components/InteractionFeedback';
import SkeletonLoader from './components/SkeletonLoader';
import LazyAnimation from './components/LazyAnimation';
import ScrollSnap from './components/ScrollSnap';
import useTouchGestures from './hooks/useTouchGestures';
import useReducedMotion from './hooks/useReducedMotion';
import useOptimizedParallax from './hooks/useOptimizedParallax';

const AnimatedStat = React.lazy(() => import('./components/AnimatedStat.jsx'));
const ProjectModal = React.lazy(() => import('./components/ProjectModal.jsx'));
const ScrollIndicator = React.lazy(() => import('./components/ScrollIndicator.jsx'));
const BackToTopButton = React.lazy(() => import('./components/BackToTopButton.jsx'));
const Typewriter = React.lazy(() => import('./components/Typewriter.jsx'));
import SwipeCarousel from './components/SwipeCarousel';
import {
  FaAws, FaDocker, FaGithub, FaGitAlt, FaLinux, FaFigma, FaJira, FaRocket,
  FaReact, FaNodeJs, FaPython, FaJava, FaChartLine, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaWindows, FaApple, FaUbuntu, FaFileExcel,
  FaBriefcase, FaCode, FaTools, FaHeart, FaGraduationCap, FaLanguage, FaServer, FaBook, FaChevronDown, FaChevronUp
} from 'react-icons/fa'
import {
  SiMysql, SiPostgresql, SiMongodb, SiTerraform,
  SiJavascript, SiTypescript, SiNextdotjs,
  SiTailwindcss, SiPostman, SiOdoo, SiCloudflare, SiAngular, SiDotnet, SiPrisma, SiExpress, SiAutocad
} from 'react-icons/si'
import { DiDatabase } from 'react-icons/di'
import { VscCode } from 'react-icons/vsc'
import { TbDatabase } from 'react-icons/tb'

function App() {
  const { t } = useTranslation();
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'dark';
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedCards, setExpandedCards] = useState({ job1: false, job2: false });
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(label);
      setTimeout(() => setCopiedText(''), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const toggleCard = (cardId) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Detect keyboard navigation for better accessibility
  useEffect(() => {
    const handleFirstTab = (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
        window.addEventListener('mousedown', handleMouseDownOnce);
      }
    };

    const handleMouseDownOnce = () => {
      document.body.classList.remove('user-is-tabbing');
      window.removeEventListener('mousedown', handleMouseDownOnce);
      window.addEventListener('keydown', handleFirstTab);
    };

    window.addEventListener('keydown', handleFirstTab);
    return () => {
      window.removeEventListener('keydown', handleFirstTab);
      window.removeEventListener('mousedown', handleMouseDownOnce);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Desplaza suavemente con offset correcto para el navbar fijo y enfoca para accesibilidad
  const scrollAndFocus = (sectionId, event) => {
    if (event) event.preventDefault();
    
    const section = document.getElementById(sectionId);
    if (!section) return;
    
    // Offset para compensar el navbar fijo (80px altura del navbar + 20px margen)
    const navbarOffset = 100;
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    
    // Enfoque para accesibilidad
    const heading = section.querySelector('h2, h1');
    if (heading) {
      if (!heading.hasAttribute('tabindex')) heading.setAttribute('tabindex', '-1');
      setTimeout(() => heading.focus({ preventScroll: true }), 400);
    }
  };

  // Hook para gestos táctiles en móviles
  useTouchGestures(scrollAndFocus);

  // Hook para parallax optimizado en hero section
  const parallaxRef = useOptimizedParallax(0.3, true);

  return (
    <>
      <InteractionFeedback />
      <Suspense fallback={null}>
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </Suspense>
      <Suspense fallback={null}>
        <BackToTopButton />
      </Suspense>
      <Suspense fallback={null}>
        <ScrollIndicator />
      </Suspense>
      <Breadcrumbs />
      <Navbar toggleTheme={toggleTheme} theme={theme} scrollToSection={scrollAndFocus} />
      <ScrollSnap enabled={false}>
        <main id="main-content" className={`${styles.pageWrapper} ${styles.contentArea}`} tabIndex="-1">
        {/* HERO SECTION */}
        <section id="inicio" className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <p className={styles.heroGreeting}>{t('hero.greeting')}</p>
            <h1 className={styles.heroTitle}>{t('hero.title')}</h1>
            <Suspense fallback={<SkeletonLoader type="text" count={1} />}>
              <Typewriter
                texts={['Ingeniera en Sistemas', 'Software Engineering']}
                speed={100}
                delay={2500}
                className={styles.heroSubtitle}
              />
            </Suspense>
            <div className={styles.heroButtons}>
              <a href="#contacto" className={styles.btnPrimary}>{t('hero.cta')}</a>
              <a href="/CV-JoaquinaGomezManna.pdf" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                {t('navbar.download_cv')}
              </a>
            </div>
          </div>
          <div ref={parallaxRef} className={styles.heroImageContainer}>
            <picture>
              <source
                type="image/avif"
                srcSet="/profile-300.avif 300w, /profile-600.avif 600w, /profile-1200.avif 1200w"
                sizes="(max-width: 480px) 90vw, (max-width: 768px) 60vw, 300px"
              />
              <source
                type="image/webp"
                srcSet="/profile-300.webp 300w, /profile-600.webp 600w, /profile-1200.webp 1200w"
                sizes="(max-width: 480px) 90vw, (max-width: 768px) 60vw, 300px"
              />
              <img
                src="/profile.jpg"
                alt="Joaquina Gómez Manna - Full Stack Developer"
                className={styles.heroImage}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 480px) 90vw, (max-width: 768px) 60vw, 300px"
                srcSet="/profile-300.jpg 300w, /profile-600.jpg 600w, /profile-1200.jpg 1200w"
              />
            </picture>
          </div>
        </div>
      </section>

      {/* ESTADÍSTICAS */}
      <section className={styles.statsSection}>
        <div className={styles.statsContainer}>
          <a
            href="#experiencia"
            className={styles.statCard}
            aria-label={t('stats.experience')}
            title={t('navbar.experience')}
            onClick={(e) => { e.preventDefault(); scrollAndFocus('experiencia'); }}
          >
            <div className={styles.statIcon}>
              <FaBriefcase />
            </div>
            <div className={styles.statNumber}>
              <Suspense fallback={<SkeletonLoader type="stat" count={1} />}>
                <AnimatedStat end={2} prefix="+" />
              </Suspense>
            </div>
            <div className={styles.statLabel}>{t('stats.experience')}</div>
          </a>
          <a
            href="#proyectos"
            className={styles.statCard}
            aria-label={t('stats.projects')}
            title={t('navbar.projects')}
            onClick={(e) => { e.preventDefault(); scrollAndFocus('proyectos'); }}
          >
            <div className={styles.statIcon}>
              <FaCode />
            </div>
            <div className={styles.statNumber}>
              <Suspense fallback={<SkeletonLoader type="stat" count={1} />}>
                <AnimatedStat end={5} prefix="+" />
              </Suspense>
            </div>
            <div className={styles.statLabel}>{t('stats.projects')}</div>
          </a>
          <a
            href="#habilidades"
            className={styles.statCard}
            aria-label={t('stats.tech')}
            title={t('navbar.skills')}
            onClick={(e) => { e.preventDefault(); scrollAndFocus('habilidades'); }}
          >
            <div className={styles.statIcon}>
              <FaTools />
            </div>
            <div className={styles.statNumber}>
              <Suspense fallback={<SkeletonLoader type="stat" count={1} />}>
                <AnimatedStat end={10} prefix="+" />
              </Suspense>
            </div>
            <div className={styles.statLabel}>{t('stats.tech')}</div>
          </a>
          <a
            href="#contacto"
            className={styles.statCard}
            aria-label={t('stats.commitment')}
            title={t('navbar.contact')}
            onClick={(e) => { e.preventDefault(); scrollAndFocus('contacto'); }}
          >
            <div className={styles.statIcon}>
              <FaHeart />
            </div>
            <div className={styles.statCircle}>
              <svg className={styles.progressRing} width="120" height="120">
                <circle
                  className={styles.progressRingCircle}
                  stroke="rgba(168, 85, 247, 0.2)"
                  strokeWidth="8"
                  fill="transparent"
                  r="52"
                  cx="60"
                  cy="60"
                />
                <circle
                  className={styles.progressRingProgress}
                  stroke="var(--accent-stats)"
                  strokeWidth="8"
                  fill="transparent"
                  r="52"
                  cx="60"
                  cy="60"
                  strokeDasharray="326.73"
                  strokeDashoffset="0"
                />
              </svg>
              <div className={styles.statNumber}>
                <Suspense fallback={<SkeletonLoader type="stat" count={1} />}>
                  <AnimatedStat end={100} suffix="%" />
                </Suspense>
              </div>
            </div>
            <div className={styles.statLabel}>{t('stats.commitment')}</div>
          </a>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('about.title')}</h2>
          <p className={styles.sectionDescription}>{t('about.description')}</p>
        </div>

        <AnimateOnScroll className={styles.contentContainer}>
          <div className={styles.cardsContainer}>
            {/* EDUCACIÓN */}
            <div className={`${styles.card} ${styles.cardStagger1}`} title={t('education.title')}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>
                  <FaGraduationCap />
                </div>
                <h3 className={styles.cardTitle}>{t('education.title')}</h3>
              </div>
              <div className={styles.cardContent}>
              <div className={styles.educationItem} data-tooltip="Universidad Tecnológica Nacional">
                <h4 className={styles.educationInstitution}>{t('education.utn')}</h4>
                <p className={styles.educationYear}>{t('education.utn_year')}</p>
                <p className={styles.educationDegree}>{t('education.utn_degree')}</p>
                <p className={styles.educationStatus}>{t('education.utn_status')}</p>
              </div>
              <div className={styles.educationDivider}></div>
              <div className={styles.educationItem} data-tooltip="Escuela Secundaria">
                <h4 className={styles.educationInstitution}>{t('education.escuela')}</h4>
                <p className={styles.educationYear}>{t('education.escuela_year')}</p>
                <p className={styles.educationDegree}>{t('education.escuela_degree')}</p>
              </div>
              </div>
            </div>

            {/* IDIOMAS */}
            <div className={`${styles.card} ${styles.cardStagger2}`} title={t('languages.title')}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>
                  <FaLanguage />
                </div>
                <h3 className={styles.cardTitle}>{t('languages.title')}</h3>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.educationItem} data-tooltip="Idioma materno">
                  <h4 className={styles.educationInstitution}>{t('languages.spanish')}</h4>
                  <p className={styles.educationDegree}>{t('languages.spanish_level')}</p>
                </div>
                <div className={styles.educationDivider}></div>
                <div className={styles.educationItem} data-tooltip="Certificación internacional">
                  <h4 className={styles.educationInstitution}>{t('languages.english')}</h4>
                  <p className={styles.educationYear}>{t('languages.english_year')}</p>
                  <p className={styles.educationDegree}>{t('languages.english_level')}</p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* EXPERIENCIA */}
      <section id="experiencia" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('experience.title')}</h2>
          <p className={styles.sectionDescription}>{t('experience.description')}</p>
        </div>

        <AnimateOnScroll className={styles.contentContainer}>
          <div className={styles.timelineContainer}>
            <div className={`${styles.experienceCard} ${styles.slideInLeft}`}>
              <div className={styles.experienceHeader}>
                <div className={styles.companyLogoContainer}>
                  <img 
                    src="/ACA.webp" 
                    alt="Asociación de Cooperativas Argentinas" 
                    className={styles.companyLogo}
                  />
                </div>
                <div>
                  <h3 className={styles.experienceTitle}>{t('experience.job1.title')}</h3>
                  <p className={styles.experienceCompany}>{t('experience.job1.company')}</p>
                </div>
                <span className={styles.experienceDate}>{t('experience.job1.period')}</span>
              </div>
              <button 
                onClick={() => toggleCard('job1')} 
                className={styles.accordionToggle}
                aria-expanded={expandedCards.job1}
                aria-label={expandedCards.job1 ? t('experience.hideDetails') : t('experience.showDetails')}
              >
                {expandedCards.job1 ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              <div className={`${styles.experienceDetails} ${expandedCards.job1 ? styles.expanded : styles.collapsed}`}>
                <p className={styles.experienceDescription}>{t('experience.job1.role')}</p>
                <ul className={styles.experienceList}>
                  <li>{t('experience.job1.desc1')}</li>
                  <li>{t('experience.job1.desc2')}</li>
                  <li>{t('experience.job1.desc3')}</li>
                  <li>{t('experience.job1.desc4')}</li>
                </ul>
                <div className={styles.techStack}>
                  <span className={styles.techBadge}><FaWindows />{t('experience.job1.tech1')}</span>
                  <span className={styles.techBadge}><FaWindows />{t('experience.job1.tech2')}</span>
                  <span className={styles.techBadge}><FaServer />{t('experience.job1.tech3')}</span>
                  <span className={styles.techBadge}><FaWindows />{t('experience.job1.tech4')}</span>
                  <span className={styles.techBadge}><FaServer />{t('experience.job1.tech5')}</span>
                  <span className={styles.techBadge}><FaJira />{t('experience.job1.tech6')}</span>
                </div>
              </div>
            </div>

            <div className={`${styles.experienceCard} ${styles.slideInRight}`}>
              <div className={styles.experienceHeader}>
                <div className={styles.companyLogoContainer}>
                  <img 
                    src="/Municipalidad.webp" 
                    alt="Municipalidad de Rosario" 
                    className={styles.companyLogo}
                  />
                </div>
                <div>
                  <h3 className={styles.experienceTitle}>{t('experience.job2.title')}</h3>
                  <p className={styles.experienceCompany}>{t('experience.job2.company')}</p>
                </div>
                <span className={styles.experienceDate}>{t('experience.job2.period')}</span>
              </div>
              <button 
                onClick={() => toggleCard('job2')} 
                className={styles.accordionToggle}
                aria-expanded={expandedCards.job2}
                aria-label={expandedCards.job2 ? t('experience.hideDetails') : t('experience.showDetails')}
              >
                {expandedCards.job2 ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              <div className={`${styles.experienceDetails} ${expandedCards.job2 ? styles.expanded : styles.collapsed}`}>
                <p className={styles.experienceDescription}>
                  {t('experience.job2.desc1')}
                </p>
                <ul className={styles.experienceList}>
                  <li>{t('experience.job2.desc2')}</li>
                  <li>{t('experience.job2.desc3')}</li>
                  <li>{t('experience.job2.desc4')}</li>
                  <li>{t('experience.job2.desc5')}</li>
                </ul>
                <div className={styles.techStack}>
                  <span className={styles.techBadge}><FaWindows />{t('experience.job2.tech1')}</span>
                  <span className={styles.techBadge}><FaLinux />{t('experience.job2.tech2')}</span>
                  <span className={styles.techBadge}><FaServer />{t('experience.job2.tech3')}</span>
                  <span className={styles.techBadge}><FaCode />{t('experience.job2.tech4')}</span>
                  <span className={styles.techBadge}><FaBook />{t('experience.job2.tech5')}</span>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* CURSOS Y CERTIFICACIONES */}
      <section id="cursos" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('courses.title')}</h2>
          <p className={styles.sectionDescription}>{t('courses.description')}</p>
        </div>

        <AnimateOnScroll className={styles.contentContainer}>
          <Courses />
        </AnimateOnScroll>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('projects.title')}</h2>
          <p className={styles.sectionDescription}>{t('projects.description')}</p>
        </div>

        <AnimateOnScroll className={styles.contentContainer}>
          <Projects />
        </AnimateOnScroll>
      </section>

      {/* HABILIDADES */}
      <section id="habilidades" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('skills.title')}</h2>
          <p className={styles.sectionDescription}>{t('skills.description')}</p>
        </div>

        <AnimateOnScroll className={styles.contentContainer}>
          <Skills />
        </AnimateOnScroll>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h1 className={styles.sectionTitle}>{t('contact.title')}</h1>
          <p className={styles.sectionDescription}>{t('contact.description')}</p>
          <p className={styles.sectionDescription} style={{marginTop: '1rem', fontSize: '1.1rem', fontWeight: '500'}}></p>
        </div>

        <AnimateOnScroll className={styles.contentContainer}>
          <div className={styles.contactGrid}>
            {/* Particles Background */}
            <div className={styles.contactParticles} aria-hidden="true">
              <div className={styles.contactParticle} style={{ left: '10%', top: '20%', animationDelay: '0s' }}></div>
              <div className={styles.contactParticle} style={{ left: '25%', top: '60%', animationDelay: '2s' }}></div>
              <div className={styles.contactParticle} style={{ left: '40%', top: '30%', animationDelay: '4s' }}></div>
              <div className={styles.contactParticle} style={{ left: '55%', top: '70%', animationDelay: '1s' }}></div>
              <div className={styles.contactParticle} style={{ left: '70%', top: '15%', animationDelay: '3s' }}></div>
              <div className={styles.contactParticle} style={{ left: '85%', top: '50%', animationDelay: '5s' }}></div>
              <div className={styles.contactParticle} style={{ left: '15%', top: '80%', animationDelay: '2.5s' }}></div>
              <div className={styles.contactParticle} style={{ left: '35%', top: '10%', animationDelay: '1.5s' }}></div>
              <div className={styles.contactParticle} style={{ left: '60%', top: '85%', animationDelay: '4.5s' }}></div>
              <div className={styles.contactParticle} style={{ left: '80%', top: '35%', animationDelay: '0.5s' }}></div>
            </div>
            
            {/* WhatsApp Card */}
            <a 
              href="https://wa.me/543412291597?text=Hola%20Joaquina,%20vi%20tu%20portfolio%20y%20me%20interesaría%20contactarte" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${styles.contactCard} ${styles.contactCardWhatsapp}`}
              aria-label={`${t('contact.whatsapp')}: (+54) 341 229 1597`}
            >
              <div className={styles.contactIcon}>💬</div>
              <h3 className={styles.contactTitle}>{t('contact.whatsapp')}</h3>
              <p className={styles.contactDetail}>(+54) 341 229 1597</p>
              <span className={styles.contactAction}>{t('contact.whatsapp_action')} →</span>
            </a>
            
            {/* Phone Card - Blue */}
            <div className={`${styles.contactCard} ${styles.contactCardPhone}`} style={{position: 'relative', cursor: 'pointer'}} onClick={() => window.location.href = 'tel:+543412291597'} aria-label={`${t('contact.phone')}: (+54) 341 229 1597`}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  copyToClipboard('+543412291597', 'phone');
                }}
                className={styles.copyButton}
                aria-label="Copiar número de teléfono"
                title={t('contact.copied')}
              >
                📋
              </button>
              <div className={styles.contactIcon}>📞</div>
              <h3 className={styles.contactTitle}>{t('contact.phone')}</h3>
              <p className={styles.contactDetail}>(+54) 341 229 1597</p>
              <span className={styles.contactAction}>{t('contact.call')} →</span>
              {copiedText === 'phone' && (
                <div className={styles.copiedToast}>{t('contact.copied')}</div>
              )}
            </div>

            {/* Email Card - Purple */}
            <div className={`${styles.contactCard} ${styles.contactCardEmail}`} style={{position: 'relative', cursor: 'pointer'}} onClick={() => window.location.href = 'mailto:gomezmannajoaquina@gmail.com'} aria-label={`${t('contact.email')}: gomezmannajoaquina@gmail.com`}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  copyToClipboard('gomezmannajoaquina@gmail.com', 'email');
                }}
                className={styles.copyButton}
                aria-label="Copiar email"
                title={t('contact.copied')}
              >
                📋
              </button>
              <div className={styles.contactIcon}>✉️</div>
              <h3 className={styles.contactTitle}>{t('contact.email')}</h3>
              <p className={styles.contactDetail} style={{wordBreak: 'break-all', textDecoration: 'underline'}}>
                gomezmannajoaquina@gmail.com
              </p>
              <span className={styles.contactAction}>{t('contact.send')} →</span>
              {copiedText === 'email' && (
                <div className={styles.copiedToast}>{t('contact.copied')}</div>
              )}
            </div>

            {/* LinkedIn Card - Blue */}
            <a href="https://www.linkedin.com/in/joaquina-gomez-manna-491950264" target="_blank" rel="noopener noreferrer" className={`${styles.contactCard} ${styles.contactCardLinkedin}`} aria-label="LinkedIn: Joaquin Gomez Manna">
              <div className={styles.contactIcon}>💼</div>
              <h3 className={styles.contactTitle}>LinkedIn</h3>
              <p className={styles.contactDetail}>Joaquina Gomez Manna</p>
              <span className={styles.contactAction}>{t('contact.view')} →</span>
            </a>

            {/* GitHub Card - Gray */}
            <a href="https://github.com/Joaquinagm01" target="_blank" rel="noopener noreferrer" className={`${styles.contactCard} ${styles.contactCardGithub}`} aria-label="GitHub: @Joaquinagm01">
              <div className={styles.contactIcon}>💻</div>
              <h3 className={styles.contactTitle}>GitHub</h3>
              <p className={styles.contactDetail}>@Joaquinagm01</p>
              <span className={styles.contactAction}>{t('contact.repos')} →</span>
            </a>

            {/* Location Card - Orange */}
            <div className={`${styles.contactCard} ${styles.contactCardLocation}`} style={{cursor: 'default'}} aria-label={`${t('contact.location')}: Rosario, Argentina`}>
              <div className={styles.contactIcon}>📍</div>
              <h3 className={styles.contactTitle}>{t('contact.location')}</h3>
              <p className={styles.contactDetail}>Rosario, Argentina</p>
              <span className={styles.contactAction} style={{opacity: 0.5}}>Santa Fe, ARG</span>
            </div>

            {/* CV Card - Green */}
            <a href="/CV-JoaquinaGomezManna.pdf" target="_blank" rel="noopener noreferrer" className={`${styles.contactCard} ${styles.contactCardCV}`} aria-label={`${t('contact.cv')}: PDF en Español`}>
              <div className={styles.contactIcon}>📄</div>
              <h3 className={styles.contactTitle}>{t('contact.cv')}</h3>
              <p className={styles.contactDetail}>PDF - Español</p>
              <span className={styles.contactAction}>{t('contact.download')} →</span>
            </a>
          </div>

          {/* Contact Form */}
          <AnimateOnScroll>
            <ContactForm />
          </AnimateOnScroll>

          {/* Map Section */}
          <div className={styles.contactMapContainer}>
            <h3 className={styles.contactMapTitle}>{t('contact.map_title')}</h3>
            <div className={styles.contactMapWrapper}>
              <div className={styles.contactMapPin}>Rosario, Santa Fe, Argentina</div>
              <iframe 
                className={styles.contactMapIframe}
                title="Rosario, Argentina Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-60.75%2C-33.05%2C-60.65%2C-32.95&amp;layer=mapnik&amp;marker=-32.95%2C-60.70"
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </AnimateOnScroll>
      </section>

      </main>
      </ScrollSnap>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.contentContainer}>
          <div className={styles.footerGrid}>
            {/* Columna 1: Sobre mí */}
            <div className={styles.footerColumn}>
              <h3 className={styles.footerBrand}>
                <span className={styles.footerBrandAccent}>JGM</span>
                <span>.DEV</span>
              </h3>
              <p className={styles.footerDescription}>
                {t('footer.description')}
              </p>
              <p className={styles.footerLocation}>
                📍 Rosario, Santa Fe, Argentina
              </p>
              <div className={styles.footerTechStack}>
                <span title="React">⚛️</span>
                <span title="Vite">⚡</span>
                <span title="CSS Modules">🎨</span>
                <span title="EmailJS">📧</span>
              </div>
            </div>

            {/* Columna 2: Enlaces Rápidos */}
            <div className={styles.footerColumn}>
              <h4 className={styles.footerTitle}>{t('footer.navigation')}</h4>
              <ul className={styles.footerLinks}>
                <li>
                  <a href="#inicio" onClick={(e) => scrollAndFocus('inicio', e)}>
                    <span className={styles.footerLinkIcon}>🏠</span>
                    {t('navbar.home')}
                  </a>
                </li>
                <li>
                  <a href="#sobre-mi" onClick={(e) => scrollAndFocus('sobre-mi', e)}>
                    <span className={styles.footerLinkIcon}>👤</span>
                    {t('navbar.about')}
                  </a>
                </li>
                <li>
                  <a href="#experiencia" onClick={(e) => scrollAndFocus('experiencia', e)}>
                    <span className={styles.footerLinkIcon}>💼</span>
                    {t('navbar.experience')}
                  </a>
                </li>
                <li>
                  <a href="#proyectos" onClick={(e) => scrollAndFocus('proyectos', e)}>
                    <span className={styles.footerLinkIcon}>🚀</span>
                    {t('navbar.projects')}
                  </a>
                </li>
                <li>
                  <a href="#habilidades" onClick={(e) => scrollAndFocus('habilidades', e)}>
                    <span className={styles.footerLinkIcon}>⚡</span>
                    {t('navbar.skills')}
                  </a>
                </li>
                <li>
                  <a href="#contacto" onClick={(e) => scrollAndFocus('contacto', e)}>
                    <span className={styles.footerLinkIcon}>📬</span>
                    {t('navbar.contact')}
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna 3: Contacto Rápido */}
            <div className={styles.footerColumn}>
              <h4 className={styles.footerTitle}>{t('footer.quick_contact')}</h4>
              <ul className={styles.footerContactList}>
                <li>
                  <a href="mailto:gomezmannajoaquina@gmail.com">
                    <FaEnvelope className={styles.footerContactIcon} />
                    <span>gomezmannajoaquina@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+543412291597">
                    <FaPhone className={styles.footerContactIcon} />
                    <span>(+54) 341 229 1597</span>
                  </a>
                </li>
                <li>
                  <a href="/CV-JoaquinaGomezManna.pdf" target="_blank" rel="noopener noreferrer">
                    <FaBriefcase className={styles.footerContactIcon} />
                    <span>{t('navbar.download_cv')}</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna 4: Redes Sociales */}
            <div className={styles.footerColumn}>
              <h4 className={styles.footerTitle}>{t('footer.social')}</h4>
              <div className={styles.footerSocialGrid}>
                <a 
                  href="https://github.com/Joaquinagm01" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="GitHub"
                  className={styles.footerSocialLink}
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/joaquina-gomez-manna-491950264" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn"
                  className={styles.footerSocialLink}
                >
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="mailto:gomezmannajoaquina@gmail.com" 
                  aria-label="Email"
                  className={styles.footerSocialLink}
                >
                  <FaEnvelope />
                  <span>Email</span>
                </a>
                <a 
                  href="https://wa.me/543412291597" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="WhatsApp"
                  className={styles.footerSocialLink}
                >
                  <FaPhone />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className={styles.footerDivider}></div>

          {/* Footer Bottom */}
          <div className={styles.footerBottom}>
            <div className={styles.footerBottomLeft}>
              <p className={styles.footerCopyright}>
                © 2025 Joaquina Gomez Manna. {t('footer.rights')}
              </p>
              <p className={styles.footerMadeWith}>
                {t('footer.made_with')} <span className={styles.footerHeart}>❤️</span> {t('footer.in_argentina')}
              </p>
            </div>
            <div className={styles.footerBottomRight}>
              <p className={styles.footerVersion}>v1.4.1</p>
              <p className={styles.footerUpdate}>
                {t('footer.last_update')}: <span>Marzo 2026</span>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* ¡AÑADIDO AQUÍ! */}
      <LanguageSelector />
    </>
  )
}

export default App
