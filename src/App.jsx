import './index.css'
import './i18n/i18n.js';
import { useTranslation } from 'react-i18next';
import styles from './App.module.css'
import Navbar from './components/Navbar';
import LanguageSelector from './components/LanguageSelector'; // <-- ¡IMPORTA TU COMP!
import {
  FaAws, FaDocker, FaGithub, FaGitAlt, FaLinux, FaFigma, FaJira,
  FaReact, FaNodeJs, FaPython, FaJava, FaChartLine, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt
} from 'react-icons/fa'
import {
  SiMysql, SiPostgresql, SiMongodb, SiTerraform,
  SiJavascript, SiTypescript, SiNextdotjs,
  SiTailwindcss, SiPostman, SiOdoo, SiCloudflare
} from 'react-icons/si'
import { DiDatabase } from 'react-icons/di'
import { VscCode } from 'react-icons/vsc'
import { TbDatabase } from 'react-icons/tb'

function App() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <main className={`${styles.pageWrapper} ${styles.contentArea}`}>
        {/* HERO SECTION */}
        <section id="inicio" className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <p className={styles.heroGreeting}>{t('hero.greeting')}</p>
            <h1 className={styles.heroTitle}>{t('hero.title')}</h1>
            <p className={styles.heroSubtitle}>{t('hero.subtitle')}</p>
            <div className={styles.heroButtons}>
              <a href="#contacto" className={styles.btnPrimary}>{t('hero.cta')}</a>
              <a href="/CVJoaquinaGomezManna.pdf" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
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
            <div className={styles.statNumber}>+2</div>
            <div className={styles.statLabel}>{t('stats.experience')}</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>+5</div>
            <div className={styles.statLabel}>{t('stats.projects')}</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>+10</div>
            <div className={styles.statLabel}>{t('stats.tech')}</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>100%</div>
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

        <div className={styles.contentContainer}>
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
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section id="experiencia" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('experience.title')}</h2>
          <p className={styles.sectionDescription}>{t('experience.description')}</p>
        </div>

        <div className={styles.contentContainer}>
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
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('projects.title')}</h2>
          <p className={styles.sectionDescription}>{t('projects.description')}</p>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.timelineContainer}>
            <div className={styles.experienceCard}>
              <div className={styles.experienceHeader}>
                <div>
                  <h3 className={styles.experienceTitle}>{t('projects.alojarg.title')}</h3>
                  <p className={styles.experienceCompany}>{t('projects.alojarg.subtitle')}</p>
                </div>
                <span className={styles.experienceDate}>2025</span>
              </div>
              <p className={styles.experienceDescription} dangerouslySetInnerHTML={{ __html: t('projects.alojarg.description') }}></p>
              <div className={styles.techStack}>
                <span className={styles.techBadge}>.NET 9</span>
                <span className={styles.techBadge}>Angular 20</span>
                <span className={styles.techBadge}>TypeScript</span>
                <span className={styles.techBadge}>MySQL</span>
                <span className={styles.techBadge}>JWT</span>
                <span className={styles.techBadge}>Docker</span>
                <span className={styles.techBadge}>FluentValidation</span>
              </div>
              <div className={styles.projectActions}>
                <a href="https://github.com/Joaquinagm01/Seminario301-GomezManna.Tabini.Ariati.Romagnoli.Rindello.git" target="_blank" rel="noopener noreferrer" className={styles.btnGithub}>
                  <FaGithub /> Ver Código
                </a>
              </div>
            </div>

            <div className={styles.experienceCard}>
              <div className={styles.experienceHeader}>
                <div>
                  <h3 className={styles.experienceTitle}>{t('projects.libros.title')}</h3>
                  <p className={styles.experienceCompany}>{t('projects.libros.subtitle')}</p>
                </div>
                <span className={styles.experienceDate}>2025</span>
              </div>
              <p className={styles.experienceDescription} dangerouslySetInnerHTML={{ __html: t('projects.libros.description') }}></p>
              <div className={styles.techStack}>
                <span className={styles.techBadge}>React</span>
                <span className={styles.techBadge}>Node.js</span>
                <span className={styles.techBadge}>Express</span>
                <span className={styles.techBadge}>TypeScript</span>
                <span className={styles.techBadge}>MikroORM</span>
                <span className={styles.techBadge}>MySQL</span>
                <span className={styles.techBadge}>JWT</span>
              </div>
              <div className={styles.projectActions}>
                <a href="https://github.com/JoaquinM999/TPDSW-COM304--Carloni-GomezManna-Chacon-Mierez-2025.git" target="_blank" rel="noopener noreferrer" className={styles.btnGithub}>
                  <FaGithub /> Ver Código
                </a>
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
          </div>
        </div>
      </section>

      {/* HABILIDADES */}
      <section id="habilidades" className={styles.section} style={{background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)'}}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('skills.title')}</h2>
          <p className={styles.sectionDescription}>{t('skills.description')}</p>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.techStackGrid}>
            {/* Frontend */}
            <div className={styles.techCard} data-category="frontend">
              <h3 className={styles.techCardTitle}>Frontend</h3>
              <div className={styles.techItems}>
                <div className={styles.techItem}>
                  <SiJavascript className={styles.techItemIcon} style={{color: '#F7DF1E'}} />
                  <span>JavaScript</span>
                </div>
                <div className={styles.techItem}>
                  <SiTypescript className={styles.techItemIcon} style={{color: '#3178C6'}} />
                  <span>TypeScript</span>
                </div>
                <div className={styles.techItem}>
                  <FaReact className={styles.techItemIcon} style={{color: '#61DAFB'}} />
                  <span>React</span>
                </div>
                <div className={styles.techItem}>
                  <SiTailwindcss className={styles.techItemIcon} style={{color: '#06B6D4'}} />
                  <span>Tailwind CSS</span>
                </div>
                <div className={styles.techItem}>
                  <SiNextdotjs className={styles.techItemIcon} style={{color: '#000000'}} />
                  <span>Next.js</span>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className={styles.techCard} data-category="backend">
              <h3 className={styles.techCardTitle}>Backend</h3>
              <div className={styles.techItems}>
                <div className={styles.techItem}>
                  <FaNodeJs className={styles.techItemIcon} style={{color: '#68A063'}} />
                  <span>Node.js</span>
                </div>
                <div className={styles.techItem}>
                  <SiJavascript className={styles.techItemIcon} style={{color: '#F7DF1E'}} />
                  <span>Express</span>
                </div>
                <div className={styles.techItem}>
                  <FaPython className={styles.techItemIcon} style={{color: '#3776AB'}} />
                  <span>Python</span>
                </div>
                <div className={styles.techItem}>
                  <SiMysql className={styles.techItemIcon} style={{color: '#4479A1'}} />
                  <span>MySQL</span>
                </div>
                <div className={styles.techItem}>
                  <SiPostgresql className={styles.techItemIcon} style={{color: '#336791'}} />
                  <span>PostgreSQL</span>
                </div>
                <div className={styles.techItem}>
                  <SiMongodb className={styles.techItemIcon} style={{color: '#47A248'}} />
                  <span>MongoDB</span>
                </div>
              </div>
            </div>

            {/* DevOps & Herramientas */}
            <div className={styles.techCard} data-category="devops">
              <h3 className={styles.techCardTitle}>DevOps & Herramientas</h3>
              <div className={styles.techItems}>
                <div className={styles.techItem}>
                  <FaDocker className={styles.techItemIcon} style={{color: '#2496ED'}} />
                  <span>Docker</span>
                </div>
                <div className={styles.techItem}>
                  <FaAws className={styles.techItemIcon} style={{color: '#FF9900'}} />
                  <span>AWS</span>
                </div>
                <div className={styles.techItem}>
                  <SiTerraform className={styles.techItemIcon} style={{color: '#7B42BC'}} />
                  <span>Terraform</span>
                </div>
                <div className={styles.techItem}>
                  <FaGitAlt className={styles.techItemIcon} style={{color: '#F05032'}} />
                  <span>Git</span>
                </div>
                <div className={styles.techItem}>
                  <FaGithub className={styles.techItemIcon} style={{color: '#6e5494'}} />
                  <span>GitHub</span>
                </div>
                <div className={styles.techItem}>
                  <FaLinux className={styles.techItemIcon} style={{color: '#FCC624'}} />
                  <span>Linux</span>
                </div>
                <div className={styles.techItem}>
                  <FaJira className={styles.techItemIcon} style={{color: '#0052CC'}} />
                  <span>Jira</span>
                </div>
                <div className={styles.techItem}>
                  <SiPostman className={styles.techItemIcon} style={{color: '#FF6C37'}} />
                  <span>Postman</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h1 className={styles.sectionTitle}>{t('contact.title')}</h1>
          <p className={styles.sectionDescription}>{t('contact.description')}</p>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.contactGrid}>
            <a href="tel:+543412291597" className={styles.contactCard}>
              <div className={styles.contactIcon}>📞</div>
              <h3 className={styles.contactTitle}>Teléfono</h3>
              <p className={styles.contactDetail}>(+54) 341 229 1597</p>
              <span className={styles.contactAction}>Llamar →</span>
            </a>

            <a href="mailto:gomezmannajoaquina@gmail.com" className={styles.contactCard}>
              <div className={styles.contactIcon}>✉️</div>
              <h3 className={styles.contactTitle}>Email</h3>
            <p className={styles.contactDetail}>gomezmannajoaquina@gmail.com</p>
              <span className={styles.contactAction}>Enviar mensaje →</span>
            </a>

            <a href="https://www.linkedin.com/in/joaquina-gomez-manna-491950264" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
              <div className={styles.contactIcon}>💼</div>
              <h3 className={styles.contactTitle}>LinkedIn</h3>
              <p className={styles.contactDetail}>Joaquina Gomez Manna</p>
              <span className={styles.contactAction}>Ver perfil →</span>
            </a>

            <a href="https://github.com/Joaquinagm01" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
              <div className={styles.contactIcon}>💻</div>
              <h3 className={styles.contactTitle}>GitHub</h3>
              <p className={styles.contactDetail}>@Joaquinagm01</p>
              <span className={styles.contactAction}>Ver repositorios →</span>
            </a>

            <div className={styles.contactCard} style={{cursor: 'default'}}>
              <div className={styles.contactIcon}>📍</div>
              <h3 className={styles.contactTitle}>Ubicación</h3>
              <p className={styles.contactDetail}>Rosario, Argentina</p>
              <span className={styles.contactAction} style={{opacity: 0.5}}>Santa Fe, ARG</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>JGM.DEV</h3>
            <p className={styles.footerDescription}>{t('footer.description')}</p>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>{t('footer.social')}</h4>
            <div className={styles.footerSocial}>
              <a href="https://www.linkedin.com/in/joaquina-gomez-manna-491950264" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Joaquinagm01" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="mailto:gomezmannajoaquina@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
              <a href="tel:+543412291597" aria-label="Teléfono">
                <FaPhone />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© 2025 Joaquina Gómez Manna. {t('footer.rights')}</p>
          <p>Desarrollado con React + Vite</p>
        </div>
      </footer>
      </main>

      {/* ¡AÑADIDO AQUÍ! */}
      <LanguageSelector />
    </>
  )
}

export default App
