import './index.css'
import styles from './App.module.css'
import { 
  FaAws, FaDocker, FaGithub, FaGitAlt, FaLinux, FaFigma, FaJira,
  FaReact, FaNodeJs, FaPython, FaJava, FaChartLine
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
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>JGM.DEV</div>
          <ul className={styles.navLinks}>
            <li><a onClick={() => scrollToSection('inicio')}>Inicio</a></li>
            <li><a onClick={() => scrollToSection('sobre-mi')}>Sobre Mí</a></li>
            <li><a onClick={() => scrollToSection('experiencia')}>Experiencia</a></li>
            <li><a onClick={() => scrollToSection('habilidades')}>Habilidades</a></li>
            <li><a onClick={() => scrollToSection('contacto')}>Contacto</a></li>
          </ul>
        </div>
      </nav>

      {/* CONTENEDOR HORIZONTAL */}
      <div className={styles.app}>
        {/* HERO SECTION */}
        <section id="inicio" className={`${styles.hero} ${styles.section}`}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <p className={styles.heroGreeting}>👋 Hola, mi nombre es</p>
            <h1 className={styles.heroTitle}>Joaquina Gómez Manna</h1>
            <p className={styles.heroSubtitle}>Estudiante de Ingeniería en Sistemas · Full Stack Developer</p>
            <p className={styles.heroDescription}>
              Cursando tercer año en la UTN Rosario. Apasionada por el desarrollo de software y las tecnologías de la información. 
              Busco aportar valor en un entorno dinámico y desafiante mientras sigo creciendo profesionalmente.
            </p>
            <div className={styles.heroButtons}>
              <a href="#contacto" className={styles.btnPrimary}>Contáctame</a>
              <a href="/CVJoaquinaGomezManna.pdf" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                Descargar CV
              </a>
            </div>
          </div>
          <div className={styles.heroImageContainer}>
            <img src="/profile.jpg" alt="Joaquina Gómez Manna" className={styles.heroImage} />
          </div>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Sobre Mí</span>
          <h2 className={styles.sectionTitle}>Perfil Profesional</h2>
          <p className={styles.sectionDescription}>
            Estudiante de Ingeniería en Sistemas desde 2020, con sólidos conocimientos en desarrollo de software 
            y tecnologías de la información. Busco una oportunidad laboral donde aplicar mis habilidades, aportar 
            valor a la empresa y seguir creciendo en un entorno dinámico y desafiante.
          </p>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>🎓 Educación</h3>
              <div className={styles.cardContent}>
                <p><strong style={{color: '#fff'}}>Universidad Tecnológica de Rosario</strong></p>
                <p style={{color: '#8a2be2', margin: '0.5rem 0'}}>2020 - Actualidad</p>
                <p>Ingeniería en Sistemas · Cursando tercer año</p>
                <br/>
                <p><strong style={{color: '#fff'}}>Escuela Superior de Comercio "Libertador General San Martín"</strong></p>
                <p style={{color: '#8a2be2', margin: '0.5rem 0'}}>2015 - 2019</p>
                <p>Bachiller con orientación en Economía</p>
              </div>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>� Idiomas</h3>
              <div className={styles.cardContent}>
                <div style={{marginBottom: '1rem'}}>
                  <p><strong style={{color: '#fff'}}>Español</strong></p>
                  <p style={{color: '#00ffff'}}>Nativo</p>
                </div>
                <div>
                  <p><strong style={{color: '#fff'}}>Inglés</strong></p>
                  <p style={{color: '#00ffff'}}>Intermedio (70%)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section id="experiencia" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Experiencia</span>
          <h2 className={styles.sectionTitle}>Trayectoria Profesional</h2>
          <p className={styles.sectionDescription}>
            Mi recorrido profesional en soporte técnico y desarrollo de soluciones tecnológicas.
          </p>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.timelineContainer}>
            <div className={styles.experienceCard}>
              <div className={styles.experienceHeader}>
                <div>
                  <h3 className={styles.experienceTitle}>Soporte Informático</h3>
                  <p className={styles.experienceCompany}>Asociación de Cooperativas Argentinas</p>
                </div>
                <span className={styles.experienceDate}>Mar 2025 - Actualidad</span>
              </div>
              <p className={styles.experienceDescription}>Rol: Soporte Informático de Nivel 1</p>
              <ul className={styles.experienceList}>
                <li>Soporte técnico de primer nivel y resolución de incidencias en mesa de ayuda (Help Desk)</li>
                <li>Gestión de infraestructura y administración de entornos Microsoft</li>
                <li>Automatización de procesos con Jira y datos externos, mejorando la eficiencia operativa</li>
                <li>Colaboración con el área de Tecnología de la Información en proyectos de mejora continua</li>
              </ul>
              <div className={styles.techStack}>
                <span className={styles.techBadge}>Microsoft Windows</span>
                <span className={styles.techBadge}>Office 365</span>
                <span className={styles.techBadge}>Cortex</span>
                <span className={styles.techBadge}>Active Directory</span>
                <span className={styles.techBadge}>Citrix</span>
                <span className={styles.techBadge}>Jira</span>
              </div>
            </div>

            <div className={styles.experienceCard}>
              <div className={styles.experienceHeader}>
                <div>
                  <h3 className={styles.experienceTitle}>Soporte Informático</h3>
                  <p className={styles.experienceCompany}>Tribunal de Faltas</p>
                </div>
                <span className={styles.experienceDate}>Mar 2024 - Feb 2025</span>
              </div>
              <p className={styles.experienceDescription}>
                Mantenimiento y actualización de sistemas hardware y software, implementación de nuevas tecnologías.
              </p>
              <ul className={styles.experienceList}>
                <li>Testing de nuevas implementaciones y relevamiento de datos</li>
                <li>Asesoramiento y capacitación a usuarios finales</li>
                <li>Elaboración de manuales e instructivos técnicos</li>
                <li>Optimización de procesos y mejora continua del área de IT</li>
              </ul>
              <div className={styles.techStack}>
                <span className={styles.techBadge}>Windows</span>
                <span className={styles.techBadge}>Linux</span>
                <span className={styles.techBadge}>Hardware</span>
                <span className={styles.techBadge}>Software</span>
                <span className={styles.techBadge}>Documentación</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Proyectos</span>
          <h2 className={styles.sectionTitle}>Proyectos Destacados</h2>
          <p className={styles.sectionDescription}>
            Desarrollo full-stack con arquitecturas modernas, APIs REST y bases de datos relacionales.
          </p>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.grid}>
            <div className={styles.projectCard}>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>🏨 AlojARG</h3>
                <p className={styles.projectDescription}>
                  Sistema de reservas de alojamientos estilo Booking.com con Clean Architecture. 
                  Búsqueda avanzada con filtros, favoritos, comparador de propiedades y dashboard administrativo. 
                  Frontend responsive con Material Design 3.
                </p>
                <div className={styles.projectTech}>
                  <span className={styles.projectBadge}>.NET 9</span>
                  <span className={styles.projectBadge}>Angular 20</span>
                  <span className={styles.projectBadge}>TypeScript</span>
                  <span className={styles.projectBadge}>MySQL</span>
                  <span className={styles.projectBadge}>JWT</span>
                  <span className={styles.projectBadge}>Docker</span>
                  <span className={styles.projectBadge}>FluentValidation</span>
                </div>
              </div>
            </div>

            <div className={styles.projectCard}>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>� Página de Libros</h3>
                <p className={styles.projectDescription}>
                  Sistema web full stack de gestión y reseñas de libros. CRUDs múltiples (usuarios, libros, autores, 
                  categorías, editoriales, sagas). API de moderación de malas palabras, autenticación JWT y 
                  recomendaciones personalizadas.
                </p>
                <div className={styles.projectTech}>
                  <span className={styles.projectBadge}>React</span>
                  <span className={styles.projectBadge}>Node.js</span>
                  <span className={styles.projectBadge}>Express</span>
                  <span className={styles.projectBadge}>TypeScript</span>
                  <span className={styles.projectBadge}>MikroORM</span>
                  <span className={styles.projectBadge}>MySQL</span>
                  <span className={styles.projectBadge}>JWT</span>
                </div>
              </div>
            </div>

            <div className={styles.projectCard}>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>📦 Gestión de Stock</h3>
                <p className={styles.projectDescription}>
                  Prototipo Full Stack con CRUD de productos, categorías y control de inventario en tiempo real. 
                  Diseño y normalización de base de datos, backend modular con arquitectura limpia y buenas prácticas.
                </p>
                <div className={styles.projectTech}>
                  <span className={styles.projectBadge}>React</span>
                  <span className={styles.projectBadge}>TailwindCSS</span>
                  <span className={styles.projectBadge}>Node.js</span>
                  <span className={styles.projectBadge}>Express</span>
                  <span className={styles.projectBadge}>Prisma</span>
                  <span className={styles.projectBadge}>MySQL</span>
                </div>
              </div>
            </div>

            <div className={styles.projectCard}>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>🏥 Sistema de Hospital</h3>
                <p className={styles.projectDescription}>
                  Programa para registrar y buscar pacientes, enfermedades y síntomas. Proyecto académico 
                  desarrollado en Algoritmos y Estructura de Datos. Aplicación funcional orientada a la gestión 
                  de información clínica.
                </p>
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

      {/* HABILIDADES */}
      <section id="habilidades" className={styles.section} style={{background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)'}}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Habilidades</span>
          <h2 className={styles.sectionTitle}>Stack Tecnológico</h2>
          <p className={styles.sectionDescription}>
            Tecnologías y herramientas que domino para construir soluciones robustas y escalables.
          </p>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.techStackGrid}>
            {/* Cloud y AWS */}
            <div className={styles.techCard} data-category="cloud">
              <h3 className={styles.techCardTitle}>Cloud y AWS</h3>
              <div className={styles.techItems}>
                <div className={styles.techItem}>
                  <FaAws className={styles.techItemIcon} style={{color: '#FF9900'}} />
                  <span>AWS</span>
                </div>
                <div className={styles.techItem}>
                  <DiDatabase className={styles.techItemIcon} style={{color: '#FF9900'}} />
                  <span>EC2</span>
                </div>
                <div className={styles.techItem}>
                  <DiDatabase className={styles.techItemIcon} style={{color: '#00D1B2'}} />
                  <span>S3</span>
                </div>
                <div className={styles.techItem}>
                  <DiDatabase className={styles.techItemIcon} style={{color: '#FFD814'}} />
                  <span>Lambda</span>
                </div>
                <div className={styles.techItem}>
                  <TbDatabase className={styles.techItemIcon} style={{color: '#527FFF'}} />
                  <span>RDS</span>
                </div>
              </div>
            </div>

            {/* DevOps y IaC */}
            <div className={styles.techCard} data-category="devops">
              <h3 className={styles.techCardTitle}>DevOps y IaC</h3>
              <div className={styles.techItems}>
                <div className={styles.techItem}>
                  <FaDocker className={styles.techItemIcon} style={{color: '#2496ED'}} />
                  <span>Docker</span>
                </div>
                <div className={styles.techItem}>
                  <SiTerraform className={styles.techItemIcon} style={{color: '#7B42BC'}} />
                  <span>Terraform</span>
                </div>
                <div className={styles.techItem}>
                  <FaGithub className={styles.techItemIcon} style={{color: '#6e5494'}} />
                  <span>GitHub Actions</span>
                </div>
                <div className={styles.techItem}>
                  <FaDocker className={styles.techItemIcon} style={{color: '#FF6C37'}} />
                  <span>ECS Fargate</span>
                </div>
                <div className={styles.techItem}>
                  <FaLinux className={styles.techItemIcon} style={{color: '#FCC624'}} />
                  <span>Linux</span>
                </div>
              </div>
            </div>

            {/* Desarrollo */}
            <div className={styles.techCard} data-category="desarrollo">
              <h3 className={styles.techCardTitle}>Desarrollo</h3>
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
                  <SiNextdotjs className={styles.techItemIcon} style={{color: '#FFFFFF'}} />
                  <span>Next.js</span>
                </div>
                <div className={styles.techItem}>
                  <FaPython className={styles.techItemIcon} style={{color: '#3776AB'}} />
                  <span>Python</span>
                </div>
                <div className={styles.techItem}>
                  <FaJava className={styles.techItemIcon} style={{color: '#E76F00'}} />
                  <span>Java</span>
                </div>
                <div className={styles.techItem}>
                  <FaReact className={styles.techItemIcon} style={{color: '#61DAFB'}} />
                  <span>React.js</span>
                </div>
                <div className={styles.techItem}>
                  <FaNodeJs className={styles.techItemIcon} style={{color: '#68A063'}} />
                  <span>Node.js</span>
                </div>
              </div>
            </div>

            {/* Bases de Datos */}
            <div className={styles.techCard} data-category="databases">
              <h3 className={styles.techCardTitle}>Bases de Datos</h3>
              <div className={styles.techItems}>
                <div className={styles.techItem}>
                  <SiMysql className={styles.techItemIcon} style={{color: '#4479A1'}} />
                  <span>MySQL</span>
                </div>
                <div className={styles.techItem}>
                  <SiPostgresql className={styles.techItemIcon} style={{color: '#4169E1'}} />
                  <span>PostgreSQL</span>
                </div>
                <div className={styles.techItem}>
                  <SiMongodb className={styles.techItemIcon} style={{color: '#47A248'}} />
                  <span>DynamoDB</span>
                </div>
                <div className={styles.techItem}>
                  <TbDatabase className={styles.techItemIcon} style={{color: '#CC2927'}} />
                  <span>SQL Server</span>
                </div>
              </div>
            </div>

            {/* Herramientas */}
            <div className={styles.techCard} data-category="herramientas">
              <h3 className={styles.techCardTitle}>Herramientas</h3>
              <div className={styles.techItems}>
                <div className={styles.techItem}>
                  <FaGitAlt className={styles.techItemIcon} style={{color: '#F05032'}} />
                  <span>Git</span>
                </div>
                <div className={styles.techItem}>
                  <FaGithub className={styles.techItemIcon} style={{color: '#FFFFFF'}} />
                  <span>GitHub</span>
                </div>
                <div className={styles.techItem}>
                  <VscCode className={styles.techItemIcon} style={{color: '#007ACC'}} />
                  <span>VS Code</span>
                </div>
                <div className={styles.techItem}>
                  <SiPostman className={styles.techItemIcon} style={{color: '#FF6C37'}} />
                  <span>Postman</span>
                </div>
                <div className={styles.techItem}>
                  <SiOdoo className={styles.techItemIcon} style={{color: '#A24689'}} />
                  <span>Odoo</span>
                </div>
              </div>
            </div>

            {/* Monitoring */}
            <div className={styles.techCard} data-category="monitoring">
              <h3 className={styles.techCardTitle}>Monitoring</h3>
              <div className={styles.techItems}>
                <div className={styles.techItem}>
                  <SiCloudflare className={styles.techItemIcon} style={{color: '#F38020'}} />
                  <span>CloudWatch</span>
                </div>
                <div className={styles.techItem}>
                  <FaChartLine className={styles.techItemIcon} style={{color: '#F2C811'}} />
                  <span>Power BI</span>
                </div>
                <div className={styles.techItem}>
                  <FaJira className={styles.techItemIcon} style={{color: '#0052CC'}} />
                  <span>Jira</span>
                </div>
              </div>
            </div>

            {/* Diseño */}
            <div className={styles.techCard} data-category="diseno">
              <h3 className={styles.techCardTitle}>Diseño</h3>
              <div className={styles.techItems}>
                <div className={styles.techItem}>
                  <FaFigma className={styles.techItemIcon} style={{color: '#F24E1E'}} />
                  <span>Figma</span>
                </div>
                <div className={styles.techItem}>
                  <FaFigma className={styles.techItemIcon} style={{color: '#FF7C00'}} />
                  <span>Illustrator</span>
                </div>
                <div className={styles.techItem}>
                  <SiTailwindcss className={styles.techItemIcon} style={{color: '#06B6D4'}} />
                  <span>Tailwind CSS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Contacto</span>
          <h2 className={styles.sectionTitle}>Conectemos</h2>
          <p className={styles.sectionDescription}>
            Estoy disponible para nuevas oportunidades, colaboraciones y proyectos interesantes.
          </p>
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

            <a href="https://www.linkedin.com/in/joaquina-gomez-manna-51b94821b/" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
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
      <section className={styles.section} style={{minWidth: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <p className={styles.footerText}>
              © 2025 Joaquina Gómez Manna. Todos los derechos reservados.
            </p>
            <p className={styles.footerText}>
              Ingeniera en Sistemas · Full Stack Developer
            </p>
          </div>
        </footer>
      </section>
      
      </div> {/* Cierre del contenedor horizontal */}
    </>
  )
}

export default App
