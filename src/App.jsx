import './index.css'
import styles from './App.module.css'

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
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

      {/* HERO SECTION */}
      <section id="inicio" className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <p className={styles.heroGreeting}>👋 Hola, mi nombre es</p>
            <h1 className={styles.heroTitle}>Joaquina Gómez Manna</h1>
            <p className={styles.heroSubtitle}>Ingeniera en Sistemas</p>
            <p className={styles.heroDescription}>
              Especializada en desarrollo Full Stack y soporte informático, 
              con experiencia en tecnologías modernas y resolución de problemas técnicos complejos.
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
          <h2 className={styles.sectionTitle}>Conoce mi trayectoria</h2>
          <p className={styles.sectionDescription}>
            En 2020 inicié la carrera de Ingeniería de Sistemas, y a lo largo de mi formación he adquirido 
            sólidos conocimientos en el área. Busco oportunidades donde pueda aplicar mis habilidades y contribuir 
            al desarrollo de proyectos innovadores.
          </p>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>🎓 Educación</h3>
              <div className={styles.cardContent}>
                <p><strong style={{color: '#fff'}}>Universidad Tecnológica de Rosario</strong></p>
                <p style={{color: '#8a2be2', margin: '0.5rem 0'}}>2020 - Actualidad</p>
                <p>Carrera de Ingeniería en Sistemas. Actualmente cursando el tercer año con enfoque en desarrollo web y gestión de sistemas.</p>
              </div>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>🎯 Objetivo</h3>
              <div className={styles.cardContent}>
                <p>
                  Desarrollar soluciones tecnológicas innovadoras que impacten positivamente en los usuarios 
                  y contribuyan al crecimiento de proyectos desafiantes en entornos colaborativos.
                </p>
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
                  <h3 className={styles.experienceTitle}>Soporte Informático - Pasantía</h3>
                  <p className={styles.experienceCompany}>Tribunal de Faltas</p>
                </div>
                <span className={styles.experienceDate}>Mar 2024 - Feb 2025</span>
              </div>
              <p className={styles.experienceDescription}>
                Mantenimiento y actualización de sistemas (software y hardware), implementación de nuevas tecnologías y optimización de procesos.
              </p>
              <ul className={styles.experienceList}>
                <li>Brindé asesoramiento y capacitación a usuarios</li>
                <li>Realicé testing de nuevas implementaciones y relevamientos de datos</li>
                <li>Elaboré manuales e instructivos, contribuyendo a mejorar la eficiencia operativa</li>
              </ul>
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
            Una selección de proyectos que reflejan mi experiencia en desarrollo full-stack y sistemas.
          </p>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.grid}>
            <div className={styles.projectCard}>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>📚 Página de Libros</h3>
                <p className={styles.projectDescription}>
                  Sistema web full stack de gestión y reseñas de libros con registro de usuarios, 
                  calificaciones, favoritos y listas personalizadas. Incluye autenticación JWT y moderación de reseñas.
                </p>
                <div className={styles.projectTech}>
                  <span className={styles.projectBadge}>React</span>
                  <span className={styles.projectBadge}>Node.js</span>
                  <span className={styles.projectBadge}>TypeScript</span>
                  <span className={styles.projectBadge}>MySQL</span>
                  <span className={styles.projectBadge}>MikroORM</span>
                  <span className={styles.projectBadge}>JWT</span>
                </div>
              </div>
            </div>

            <div className={styles.projectCard}>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>📦 Gestión de Stock</h3>
                <p className={styles.projectDescription}>
                  Prototipo Full Stack con CRUD completo de productos, administración de categorías 
                  e inventario en tiempo real. Incluye dashboard con métricas y reportes.
                </p>
                <div className={styles.projectTech}>
                  <span className={styles.projectBadge}>React</span>
                  <span className={styles.projectBadge}>TailwindCSS</span>
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
                  Programa para registrar y buscar pacientes, enfermedades y síntomas. 
                  Proyecto académico desarrollado en la materia Algoritmos y Estructura de Datos.
                </p>
                <div className={styles.projectTech}>
                  <span className={styles.projectBadge}>Python</span>
                  <span className={styles.projectBadge}>Pascal</span>
                  <span className={styles.projectBadge}>Algoritmos</span>
                </div>
              </div>
            </div>

            <div className={styles.projectCard}>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>✈️ Boletos de Vuelo</h3>
                <p className={styles.projectDescription}>
                  Sistema desarrollado en Smalltalk con menú de opciones interactivo 
                  y gestión completa de boletos de vuelo con validaciones.
                </p>
                <div className={styles.projectTech}>
                  <span className={styles.projectBadge}>Smalltalk</span>
                  <span className={styles.projectBadge}>POO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HABILIDADES */}
      <section className={styles.section} style={{background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)'}}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Habilidades</span>
          <h2 className={styles.sectionTitle}>Tecnologías y Herramientas</h2>
          <p className={styles.sectionDescription}>
            Stack tecnológico en el que tengo experiencia profesional y académica.
          </p>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>💻</div>
              <h3 className={styles.skillTitle}>Frontend</h3>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>React</span>
                <span className={styles.skillTag}>TypeScript</span>
                <span className={styles.skillTag}>JavaScript</span>
                <span className={styles.skillTag}>HTML/CSS</span>
                <span className={styles.skillTag}>TailwindCSS</span>
              </div>
            </div>

            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>⚙️</div>
              <h3 className={styles.skillTitle}>Backend</h3>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>Node.js</span>
                <span className={styles.skillTag}>Express</span>
                <span className={styles.skillTag}>Java Spring</span>
                <span className={styles.skillTag}>C#</span>
                <span className={styles.skillTag}>.NET</span>
                <span className={styles.skillTag}>REST APIs</span>
              </div>
            </div>

            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>�️</div>
              <h3 className={styles.skillTitle}>Bases de Datos</h3>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>MySQL</span>
                <span className={styles.skillTag}>SQL Server</span>
                <span className={styles.skillTag}>Prisma</span>
                <span className={styles.skillTag}>MikroORM</span>
              </div>
            </div>

            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>�️</div>
              <h3 className={styles.skillTitle}>Herramientas</h3>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>Git</span>
                <span className={styles.skillTag}>GitHub</span>
                <span className={styles.skillTag}>VS Code</span>
                <span className={styles.skillTag}>Postman</span>
                <span className={styles.skillTag}>Figma</span>
              </div>
            </div>

            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>🔧</div>
              <h3 className={styles.skillTitle}>Otros</h3>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>Python</span>
                <span className={styles.skillTag}>Arduino</span>
                <span className={styles.skillTag}>VBA</span>
                <span className={styles.skillTag}>Smalltalk</span>
                <span className={styles.skillTag}>Inglés Técnico</span>
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
    </div>
  )
}

export default App
