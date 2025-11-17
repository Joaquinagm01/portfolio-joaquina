import './index.css'
import './i18n/i18n.js';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import styles from './App.module.css'
import Navbar from './components/Navbar';
import AnimatedStat from './components/AnimatedStat.jsx';
import AnimateOnScroll from '../AnimateOnScroll.jsx';
import ProjectModal from './components/ProjectModal.jsx';
import ScrollIndicator from './components/ScrollIndicator.jsx';
import BackToTopButton from './components/BackToTopButton.jsx';
import Typewriter from './components/Typewriter.jsx';
import LanguageSelector from './components/LanguageSelector'; 
import SwipeCarousel from './components/SwipeCarousel';
import {
  FaAws, FaDocker, FaGithub, FaGitAlt, FaLinux, FaFigma, FaJira,
  FaReact, FaNodeJs, FaPython, FaJava, FaChartLine, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaWindows, FaApple, FaUbuntu, FaFileExcel
} from 'react-icons/fa'
import {
  SiMysql, SiPostgresql, SiMongodb, SiTerraform,
  SiJavascript, SiTypescript, SiNextdotjs,
  SiTailwindcss, SiPostman, SiOdoo, SiCloudflare, SiAngular, SiDotnet, SiPrisma, SiExpress, SiAutocad, Si365Datascience
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

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <BackToTopButton />
      <ScrollIndicator />
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <main className={`${styles.pageWrapper} ${styles.contentArea}`}>
        {/* HERO SECTION */}
        <section id="inicio" className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <p className={styles.heroGreeting}>{t('hero.greeting')}</p>
            <h1 className={styles.heroTitle}>{t('hero.title')}</h1>
            <Typewriter
              texts={[t('hero.subtitle'), 'Software Engineer', 'Problem Solver', 'Tech Enthusiast']}
              speed={100}
              delay={2500}
              className={styles.heroSubtitle}
            />
            <div className={styles.heroButtons}>
              <a href="#contacto" className={styles.btnPrimary}>{t('hero.cta')}</a>
              <a href="/CV-JoaquinaGomezManna.pdf" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                {t('navbar.download_cv')}
              </a>
            </div>
          </div>
          <div className={styles.heroImageContainer}>
            <img src="/profile.jpg" alt="Joaquina Gómez Manna - Full Stack Developer" className={styles.heroImage} loading="eager" />
          </div>
        </div>
      </section>

      {/* ESTADÍSTICAS */}
      <section className={styles.statsSection}>
        <div className={styles.statsContainer}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <AnimatedStat end={2} prefix="+" />
            </div>
            <div className={styles.statLabel}>{t('stats.experience')}</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <AnimatedStat end={5} prefix="+" />
            </div>
            <div className={styles.statLabel}>{t('stats.projects')}</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <AnimatedStat end={10} prefix="+" />
            </div>
            <div className={styles.statLabel}>{t('stats.tech')}</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>
              <AnimatedStat end={100} suffix="%" />
            </div>
            <div className={styles.statLabel}>{t('stats.commitment')}</div>
          </div>
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
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>🎓</div>
                <h3 className={styles.cardTitle}>{t('education.title')}</h3>
              </div>
              <div className={styles.cardContent}>
              <div className={styles.educationItem}>
                <h4 className={styles.educationInstitution}>{t('education.utn')}</h4>
                <p className={styles.educationYear}>{t('education.utn_year')}</p>
                <p className={styles.educationDegree}>{t('education.utn_degree')}</p>
                <p className={styles.educationStatus}>{t('education.utn_status')}</p>
              </div>
              <div className={styles.educationDivider}></div>
              <div className={styles.educationItem}>
                <h4 className={styles.educationInstitution}>{t('education.escuela')}</h4>
                <p className={styles.educationYear}>{t('education.escuela_year')}</p>
                <p className={styles.educationDegree}>{t('education.escuela_degree')}</p>
              </div>
              </div>
            </div>

            {/* IDIOMAS */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>🌐</div>
                <h3 className={styles.cardTitle}>{t('languages.title')}</h3>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.educationItem}>
                  <h4 className={styles.educationInstitution}>{t('languages.spanish')}</h4>
                  <p className={styles.educationDegree}>{t('languages.spanish_level')}</p>
                </div>
                <div className={styles.educationDivider}></div>
                <div className={styles.educationItem}>
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
            <div className={styles.experienceCard}>
              <div className={styles.experienceHeader}>
                <div>
                  <h3 className={styles.experienceTitle}>{t('experience.job1.title')}</h3>
                  <p className={styles.experienceCompany}>{t('experience.job1.company')}</p>
                </div>
                <span className={styles.experienceDate}>{t('experience.job1.period')}</span>
              </div>
              <p className={styles.experienceDescription}>{t('experience.job1.role')}</p>
              <ul className={styles.experienceList}>
                <li>{t('experience.job1.desc1')}</li>
                <li>{t('experience.job1.desc2')}</li>
                <li>{t('experience.job1.desc3')}</li>
                <li>{t('experience.job1.desc4')}</li>
              </ul>
              <div className={styles.techStack}>
                <span className={styles.techBadge}>{t('experience.job1.tech1')}</span>
                <span className={styles.techBadge}>{t('experience.job1.tech2')}</span>
                <span className={styles.techBadge}>{t('experience.job1.tech3')}</span>
                <span className={styles.techBadge}>{t('experience.job1.tech4')}</span>
                <span className={styles.techBadge}>{t('experience.job1.tech5')}</span>
                <span className={styles.techBadge}>{t('experience.job1.tech6')}</span>
              </div>
            </div>

            <div className={styles.experienceCard}>
              <div className={styles.experienceHeader}>
                <div>
                  <h3 className={styles.experienceTitle}>{t('experience.job2.title')}</h3>
                  <p className={styles.experienceCompany}>{t('experience.job2.company')}</p>
                </div>
                <span className={styles.experienceDate}>{t('experience.job2.period')}</span>
              </div>
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
                <span className={styles.techBadge}>{t('experience.job2.tech1')}</span>
                <span className={styles.techBadge}>{t('experience.job2.tech2')}</span>
                <span className={styles.techBadge}>{t('experience.job2.tech3')}</span>
                <span className={styles.techBadge}>{t('experience.job2.tech4')}</span>
                <span className={styles.techBadge}>{t('experience.job2.tech5')}</span>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('projects.title')}</h2>
          <p className={styles.sectionDescription}>{t('projects.description')}</p>
        </div>

        <AnimateOnScroll className={styles.contentContainer}>
          <SwipeCarousel>
            <div className={styles.projectCard}>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{t('projects.alojarg.title')}</h3>
                <p className={styles.projectDescription} dangerouslySetInnerHTML={{ __html: t('projects.alojarg.description') }}></p>
                <div className={styles.projectTech}>
                <span className={styles.techBadge}>.NET 9</span>
                <span className={styles.techBadge}>Angular 20</span>
                <span className={styles.techBadge}>TypeScript</span>
                <span className={styles.techBadge}>MySQL</span>
                <span className={styles.techBadge}>JWT</span>
                <span className={styles.techBadge}>Docker</span>
                <span className={styles.techBadge}>FluentValidation</span>
                </div>
                <div className={styles.projectActions}>
                <button
                  className={styles.btnDemo}
                  onClick={() => setSelectedProject({
                    title: t('projects.alojarg.title'),
                    subtitle: t('projects.alojarg.subtitle'),
                    description: t('projects.alojarg.description'),
                    tech: ['.NET 9', 'Angular 20', 'TypeScript', 'MySQL', 'JWT', 'Docker', 'FluentValidation'],
                    github: 'https://github.com/Joaquinagm01/Seminario301-GomezManna.Tabini.Ariati.Romagnoli.Rindello.git'
                  })}
                >
                  Ver Más
                </button>
                </div>
              </div>
            </div>

            <div className={styles.projectCard}>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{t('projects.libros.title')}</h3>
                <p className={styles.projectDescription} dangerouslySetInnerHTML={{ __html: t('projects.libros.description') }}></p>
                <div className={styles.projectTech}>
                <span className={styles.projectBadge}>React</span>
                <span className={styles.projectBadge}>Node.js</span>
                <span className={styles.projectBadge}>Express</span>
                <span className={styles.projectBadge}>TypeScript</span>
                <span className={styles.projectBadge}>MikroORM</span>
                <span className={styles.projectBadge}>MySQL</span>
                <span className={styles.projectBadge}>JWT</span>
                </div>
                <div className={styles.projectActions}>
                <a href="https://github.com/JoaquinM999/TPDSW-COM304--Carloni-GomezManna-Chacon-Mierez-2025.git" target="_blank" rel="noopener noreferrer" className={styles.btnGithub}>
                  <FaGithub /> Ver Código
                </a>
                </div>
              </div>
            </div>

            <div className={styles.projectCard}>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{t('projects.stock.title')}</h3>
                <p className={styles.projectDescription} dangerouslySetInnerHTML={{ __html: t('projects.stock.description') }}></p>
                <div className={styles.projectTech}>
                  <span className={styles.projectBadge}>React</span>
                  <span className={styles.projectBadge}>TailwindCSS</span>
                  <span className={styles.projectBadge}>Node.js</span>
                  <span className={styles.projectBadge}>Express</span>
                  <span className={styles.projectBadge}>Prisma</span>
                  <span className={styles.projectBadge}>MySQL</span>
                </div>
                <div className={styles.projectActions}>
                  <a href="https://github.com/ImNahue/POC-PRISMA-COM304--Carloni-GomezManna-Chacon-Mierez-2025.git" target="_blank" rel="noopener noreferrer" className={styles.btnGithub}>
                    <FaGithub /> Ver Código
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.projectCard}>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{t('projects.hospital.title')}</h3>
                <p className={styles.projectDescription} dangerouslySetInnerHTML={{ __html: t('projects.hospital.description') }}></p>
                <div className={styles.projectTech}>
                  <span className={styles.projectBadge}>Python</span>
                  <span className={styles.projectBadge}>Pascal</span>
                  <span className={styles.projectBadge}>Algoritmos</span>
                </div>
              </div>
            </div>
          </SwipeCarousel>
        </AnimateOnScroll>
      </section>

      {/* HABILIDADES */}
      <section id="habilidades" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('skills.title')}</h2>
          <p className={styles.sectionDescription}>{t('skills.description')}</p>
        </div>

        <AnimateOnScroll className={styles.contentContainer}>
          <div className={styles.techStackGrid}>
            {/* Lenguajes de Programación */}
            <div className={styles.techCard} data-category="languages">
              <h3 className={styles.techCardTitle}>{t('skills.languages')}</h3>
              <div className={styles.techItems}>
                <div className={styles.techItem} data-category="python">
                  <FaPython className={styles.techItemIcon} />
                  <span>Python</span>
                </div>
                <div className={styles.techItem} data-category="javascript">
                  <SiJavascript className={styles.techItemIcon} />
                  <span>JavaScript</span>
                </div>
                <div className={styles.techItem} data-category="typescript">
                  <SiTypescript className={styles.techItemIcon} />
                  <span>TypeScript</span>
                </div>
                <div className={styles.techItem} data-category="c">
                  <VscCode className={styles.techItemIcon} />
                  <span>C</span>
                </div>
                <div className={styles.techItem} data-category="pascal">
                  <VscCode className={styles.techItemIcon} />
                  <span>Pascal</span>
                </div>
                <div className={styles.techItem} data-category="smalltalk">
                  <VscCode className={styles.techItemIcon} />
                  <span>Smalltalk</span>
                </div>
              </div>
            </div>

            {/* Frameworks y Librerías */}
            <div className={styles.techCard} data-category="frameworks">
              <h3 className={styles.techCardTitle}>{t('skills.frameworks')}</h3>
              <div className={styles.techItems}>
                <div className={styles.techItem} data-category="react">
                  <FaReact className={styles.techItemIcon} />
                  <span>React</span>
                </div>
                <div className={styles.techItem} data-category="nodejs">
                  <FaNodeJs className={styles.techItemIcon} />
                  <span>Node.js</span>
                </div>
                <div className={styles.techItem} data-category="express">
                  <SiExpress className={styles.techItemIcon} />
                  <span>Express</span>
                </div>
                <div className={styles.techItem} data-category="dotnet">
                  <SiDotnet className={styles.techItemIcon} />
                  <span>.NET 9</span>
                </div>
                <div className={styles.techItem} data-category="angular">
                  <SiAngular className={styles.techItemIcon} />
                  <span>Angular 20</span>
                </div>
                <div className={styles.techItem} data-category="prisma">
                  <SiPrisma className={styles.techItemIcon} />
                  <span>Prisma</span>
                </div>
                <div className={styles.techItem} data-category="mikroorm">
                  <span style={{fontSize: '1.2em', fontWeight: 'bold'}}>M</span>
                  <span>MikroORM</span>
                </div>
                <div className={styles.techItem} data-category="tailwind">
                  <SiTailwindcss className={styles.techItemIcon} />
                  <span>TailwindCSS</span>
                </div>
                <div className={styles.techItem} data-category="nextjs">
                  <SiNextdotjs className={styles.techItemIcon} />
                  <span>Next.js</span>
                </div>
              </div>
            </div>

            {/* Bases de Datos */}
            <div className={styles.techCard} data-category="databases">
              <h3 className={styles.techCardTitle}>{t('skills.databases')}</h3>
              <div className={styles.techItems}>
                <div className={styles.techItem} data-category="mysql">
                  <SiMysql className={styles.techItemIcon} />
                  <span>MySQL</span>
                </div>
                <div className={styles.techItem} data-category="postgresql">
                  <SiPostgresql className={styles.techItemIcon} />
                  <span>PostgreSQL</span>
                </div>
                <div className={styles.techItem} data-category="mongodb">
                  <SiMongodb className={styles.techItemIcon} />
                  <span>MongoDB</span>
                </div>
              </div>
            </div>



            {/* Sistemas Operativos */}
            <div className={styles.techCard} data-category="os">
              <h3 className={styles.techCardTitle}>{t('skills.os')}</h3>
              <div className={styles.techItems}>
                <div className={styles.techItem} data-category="windows">
                  <FaWindows className={styles.techItemIcon} />
                  <span>Windows</span>
                </div>
                <div className={styles.techItem} data-category="linux">
                  <FaLinux className={styles.techItemIcon} />
                  <span>Linux</span>
                </div>
                <div className={styles.techItem} data-category="ubuntu">
                  <FaUbuntu className={styles.techItemIcon} />
                  <span>Ubuntu</span>
                </div>
                <div className={styles.techItem} data-category="ios">
                  <FaApple className={styles.techItemIcon} />
                  <span>iOS</span>
                </div>
              </div>
            </div>

            {/* Herramientas de Oficina */}
            <div className={styles.techCard} data-category="office">
              <h3 className={styles.techCardTitle}>{t('skills.office')}</h3>
              <div className={styles.techItems}>
                <div className={styles.techItem} data-category="office365">
                  <Si365Datascience className={styles.techItemIcon} />
                  <span>Microsoft 365</span>
                </div>
                <div className={styles.techItem} data-category="excel">
                  <FaFileExcel className={styles.techItemIcon} />
                  <span>Excel</span>
                </div>
              </div>
            </div>

            {/* Diseño y Modelado */}
            <div className={styles.techCard} data-category="design">
              <h3 className={styles.techCardTitle}>{t('skills.design')}</h3>
              <div className={styles.techItems}>
                <div className={styles.techItem} data-category="autocad">
                  <SiAutocad className={styles.techItemIcon} />
                  <span>Autocad</span>
                </div>
                <div className={styles.techItem} data-category="axure">
                  <span style={{fontSize: '1.2em', fontWeight: 'bold'}}>A</span>
                  <span>Axure</span>
                </div>
                <div className={styles.techItem} data-category="anylogic">
                  <FaChartLine className={styles.techItemIcon} />
                  <span>AnyLogic</span>
                </div>
              </div>
            </div>

            {/* Arquitectura de Sistemas */}
            <div className={styles.techCard} data-category="architecture">
              <h3 className={styles.techCardTitle}>{t('skills.architecture')}</h3>
              <div className={styles.techItems}>
                <div className={styles.techItem} data-category="design-patterns">
                  <FaFigma className={styles.techItemIcon} />
                  <span>MD, DER, Diseño de sistema</span>
                </div>
                <div className={styles.techItem} data-category="apis">
                  <FaNodeJs className={styles.techItemIcon} />
                  <span>APIs</span>
                </div>
              </div>
            </div>
          </div>
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
            <a href="tel:+543412291597" className={styles.contactCard}>
              <div className={styles.contactIcon}>📞</div>
              <h3 className={styles.contactTitle}>{t('contact.phone')}</h3>
              <p className={styles.contactDetail}>(+54) 341 229 1597</p>
              <span className={styles.contactAction}>{t('contact.call')} →</span>
            </a>

            <a href="mailto:gomezmannajoaquina@gmail.com" className={styles.contactCard}>
              <div className={styles.contactIcon}>✉️</div>
              <h3 className={styles.contactTitle}>{t('contact.email')}</h3>
              <p className={styles.contactDetail} style={{wordBreak: 'break-all', textDecoration: 'underline'}}>
                gomezmannajoaquina@gmail.com
              </p>
              <span className={styles.contactAction}>{t('contact.send')} →</span>
            </a>

            <a href="https://www.linkedin.com/in/joaquina-gomez-manna-491950264" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
              <div className={styles.contactIcon}>💼</div>
              <h3 className={styles.contactTitle}>LinkedIn</h3>
              <p className={styles.contactDetail}>Joaquina Gomez Manna</p>
              <span className={styles.contactAction}>{t('contact.view')} →</span>
            </a>

            <a href="https://github.com/Joaquinagm01" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
              <div className={styles.contactIcon}>💻</div>
              <h3 className={styles.contactTitle}>GitHub</h3>
              <p className={styles.contactDetail}>@Joaquinagm01</p>
              <span className={styles.contactAction}>{t('contact.repos')} →</span>
            </a>

            <div className={styles.contactCard} style={{cursor: 'default'}}>
              <div className={styles.contactIcon}>📍</div>
              <h3 className={styles.contactTitle}>{t('contact.location')}</h3>
              <p className={styles.contactDetail}>Rosario, Argentina</p>
              <span className={styles.contactAction} style={{opacity: 0.5}}>Santa Fe, ARG</span>
            </div>

            <a href="/CV-JoaquinaGomezManna.pdf" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
              <div className={styles.contactIcon}>📄</div>
              <h3 className={styles.contactTitle}>{t('contact.cv')}</h3>
              <p className={styles.contactDetail}>PDF - Español</p>
              <span className={styles.contactAction}>{t('contact.download')} →</span>
            </a>
          </div>
        </AnimateOnScroll>
      </section>

      </main>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.contentContainer}>
          <div className={styles.footerGrid}>
            {/* Columna 1: Descripción */}
            <div className={styles.footerColumn}>
              <h3 className={styles.footerTitle}>JGM.DEV</h3>
              <p className={styles.footerDescription}>{t('footer.description')}</p>
            </div>

            {/* Columna 2: Navegación */}
            <div className={styles.footerColumn}>
              <h4 className={styles.footerSubtitle}>{t('footer.navigation')}</h4>
              <ul className={styles.footerLinks}>
                <li><a href="#inicio">{t('navbar.home')}</a></li>
                <li><a href="#sobre-mi">{t('navbar.about')}</a></li>
                <li><a href="#experiencia">{t('navbar.experience')}</a></li>
                <li><a href="#proyectos">{t('navbar.projects')}</a></li>
                <li><a href="#habilidades">{t('navbar.skills')}</a></li>
                <li><a href="#contacto">{t('navbar.contact')}</a></li>
              </ul>
            </div>

            {/* Columna 3: Redes Sociales */}
            <div className={styles.footerColumn}>
              <h4 className={styles.footerSubtitle}>{t('footer.social')}</h4>
              <div className={styles.footerSocial}>
                <a href="https://github.com/Joaquinagm01" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/joaquina-gomez-manna-491950264" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="mailto:gomezmannajoaquina@gmail.com" aria-label="Email"><FaEnvelope /></a>
                <a href="tel:+543412291597" aria-label="Teléfono"><FaPhone /></a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.contentContainer}>
            <p>
              © 2025 Joaquina Gomez Manna. {t('footer.rights')}
            </p>
            <p>{t('footer.tech')}</p>
          </div>
        </div>
      </footer>

      {/* ¡AÑADIDO AQUÍ! */}
      <LanguageSelector />
    </>
  )
}

export default App
