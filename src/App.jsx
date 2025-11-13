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
          <img src="/profile.jpg" alt="Joaquina Gómez Manna" className={styles.heroImage} />
          <h1 className={styles.heroTitle}>JOAQUINA GÓMEZ MANNA</h1>
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
      </section>

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className={styles.section}>
        <div className={styles.contentContainer}>
          <h2 className={styles.sectionTitle}>Sobre Mí</h2>
          <div className={styles.card}>
            <p className={styles.cardContent}>
              En 2020 inicié la carrera de Ingeniería de Sistemas, y a lo largo de mi formación he adquirido 
              sólidos conocimientos en el área. Con mi experiencia académica y profesional, busco una oportunidad 
              laboral donde pueda aplicar mis habilidades, contribuir al desarrollo de la empresa y continuar 
              ampliando mis conocimientos en un entorno desafiante y enriquecedor.
            </p>
          </div>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>🎓 Educación</h3>
              <div className={styles.cardContent}>
                <p><strong>Universidad Tecnológica de Rosario</strong></p>
                <p style={{color: '#a5b4fc', marginBottom: '1rem'}}>2020 - Actualidad</p>
                <p>Carrera de Ingeniería en Sistemas. Actualmente cursando el tercer año.</p>
              </div>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>🎯 Objetivo</h3>
              <div className={styles.cardContent}>
                <p>
                  Desarrollar soluciones tecnológicas innovadoras que impacten positivamente en los usuarios 
                  y contribuyan al crecimiento de proyectos desafiantes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section id="experiencia" className={styles.section}>
        <div className={styles.contentContainer}>
          <h2 className={styles.sectionTitle}>Experiencia Profesional</h2>
          
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3 className={styles.cardTitle}>Soporte Informático</h3>
                <p style={{color: '#ff00ff', marginBottom: '0.5rem'}}>Asociación de Cooperativas Argentinas</p>
                <p style={{color: '#a5b4fc', marginBottom: '1rem'}}>Marzo 2025 - Actualidad</p>
                <ul style={{listStyle: 'none', padding: 0}}>
                  <li style={{marginBottom: '0.5rem'}}>▹ Soporte técnico de primer nivel y resolución de incidencias (Help Desk)</li>
                  <li style={{marginBottom: '0.5rem'}}>▹ Gestión de infraestructura y administración de entornos Microsoft</li>
                  <li style={{marginBottom: '0.5rem'}}>▹ Automatización de procesos con Jira y datos externos</li>
                  <li>▹ Colaboración en proyectos de mejora continua</li>
                </ul>
                <p style={{marginTop: '1rem', color: '#00ffff', fontSize: '0.9rem'}}>
                  Tech: Microsoft Windows, Office 365, Cortex, Active Directory, Citrix, Jira
                </p>
              </div>
              <div className={styles.timelineDot}></div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3 className={styles.cardTitle}>Soporte Informático - Pasantía</h3>
                <p style={{color: '#ff00ff', marginBottom: '0.5rem'}}>Tribunal de Faltas</p>
                <p style={{color: '#a5b4fc', marginBottom: '1rem'}}>Marzo 2024 - Febrero 2025</p>
                <ul style={{listStyle: 'none', padding: 0}}>
                  <li style={{marginBottom: '0.5rem'}}>▹ Mantenimiento y actualización de sistemas</li>
                  <li style={{marginBottom: '0.5rem'}}>▹ Asesoramiento y capacitación a usuarios</li>
                  <li>▹ Testing de implementaciones y relevamientos de datos</li>
                </ul>
              </div>
              <div className={styles.timelineDot}></div>
            </div>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section className={styles.section}>
        <div className={styles.contentContainer}>
          <h2 className={styles.sectionTitle}>Proyectos Destacados</h2>
          
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>📚 Página de Libros (2025)</h3>
              <p className={styles.cardContent}>
                Sistema web full stack de gestión y reseñas de libros con registro de usuarios, 
                calificaciones y listas personalizadas.
                <br/><br/>
                <strong style={{color: '#00ffff'}}>Stack:</strong> React, Node.js, Express, TypeScript, MySQL, MikroORM, JWT
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>📦 Gestión de Stock (2025)</h3>
              <p className={styles.cardContent}>
                Prototipo Full Stack con CRUD de productos, administración de categorías e inventario en tiempo real.
                <br/><br/>
                <strong style={{color: '#00ffff'}}>Stack:</strong> React, TailwindCSS, Node.js, Express, TypeScript, Prisma, MySQL
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>🏥 Sistema de Hospital (2020)</h3>
              <p className={styles.cardContent}>
                Programa para registrar y buscar pacientes, enfermedades y síntomas. 
                Proyecto académico de Algoritmos y Estructura de Datos.
                <br/><br/>
                <strong style={{color: '#00ffff'}}>Stack:</strong> Python, Pascal
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>✈️ Boletos de Vuelo (2023)</h3>
              <p className={styles.cardContent}>
                Sistema desarrollado en Smalltalk con menú de opciones y gestión completa de boletos.
                <br/><br/>
                <strong style={{color: '#00ffff'}}>Stack:</strong> Smalltalk
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HABILIDADES */}
      <section id="habilidades" className={styles.section}>
        <div className={styles.contentContainer}>
          <h2 className={styles.sectionTitle}>Habilidades Técnicas</h2>
          
          <div className={styles.skillsGrid}>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>⚛️</div>
              <h3 className={styles.skillName}>React</h3>
              <p className={styles.skillLevel}>80%</p>
            </div>

            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>📘</div>
              <h3 className={styles.skillName}>TypeScript</h3>
              <p className={styles.skillLevel}>80%</p>
            </div>

            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>🟢</div>
              <h3 className={styles.skillName}>Node.js</h3>
              <p className={styles.skillLevel}>80%</p>
            </div>

            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>🐍</div>
              <h3 className={styles.skillName}>Python</h3>
              <p className={styles.skillLevel}>80%</p>
            </div>

            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>🗄️</div>
              <h3 className={styles.skillName}>MySQL</h3>
              <p className={styles.skillLevel}>70%</p>
            </div>

            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>🔧</div>
              <h3 className={styles.skillName}>Git/GitHub</h3>
              <p className={styles.skillLevel}>80%</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className={styles.section}>
        <div className={styles.contentContainer}>
          <h2 className={styles.sectionTitle}>Contacto</h2>
          
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📞</span>
              <span>(+54) 341 229 1597</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>✉️</span>
              <span>gomezmannajoaquina@gmail.com</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📍</span>
              <span>Rosario, Argentina</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          © 2025 <span>Joaquina Gómez Manna</span> - Todos los derechos reservados
        </p>
        <p className={styles.footerText} style={{marginTop: '0.5rem', fontSize: '0.9rem'}}>
          Diseñado con <span>💙</span> y tecnología futurista
        </p>
      </footer>
    </div>
  )
}

export default App
