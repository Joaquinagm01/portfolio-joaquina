#!/usr/bin/env python3
"""
Script para actualizar App.jsx con las mejoras de manera segura
"""

# Leer el archivo original
with open('src/App.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Añadir imports necesarios
content = content.replace(
    "import './index.css'\nimport styles from './App.module.css'\nimport {",
    "import './index.css'\nimport styles from './App.module.css'\nimport { useState, useEffect } from 'react'\nimport {"
)

content = content.replace(
    "FaReact, FaNodeJs, FaPython, FaJava, FaChartLine\n} from 'react-icons/fa'",
    "FaReact, FaNodeJs, FaPython, FaJava, FaChartLine, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt\n} from 'react-icons/fa'"
)

# 2. Añadir state y useEffect
content = content.replace(
    """function App() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };""",
    """function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-20% 0px -20% 0px' }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };"""
)

# 3. Actualizar navbar con activeSection
content = content.replace(
    '<li><a onClick={() => scrollToSection(\'inicio\')}>Inicio</a></li>',
    '<li><a onClick={() => scrollToSection(\'inicio\')} className={activeSection === \'inicio\' ? styles.active : \'\'}>Inicio</a></li>'
)

content = content.replace(
    '<li><a onClick={() => scrollToSection(\'sobre-mi\')}>Sobre Mí</a></li>',
    '<li><a onClick={() => scrollToSection(\'sobre-mi\')} className={activeSection === \'sobre-mi\' ? styles.active : \'\'}>Sobre Mí</a></li>'
)

content = content.replace(
    '<li><a onClick={() => scrollToSection(\'experiencia\')}>Experiencia</a></li>',
    '<li><a onClick={() => scrollToSection(\'experiencia\')} className={activeSection === \'experiencia\' ? styles.active : \'\'}>Experiencia</a></li>'
)

content = content.replace(
    '<li><a onClick={() => scrollToSection(\'habilidades\')}>Habilidades</a></li>',
    '<li><a onClick={() => scrollToSection(\'habilidades\')} className={activeSection === \'habilidades\' ? styles.active : \'\'}>Habilidades</a></li>'
)

content = content.replace(
    '<li><a onClick={() => scrollToSection(\'contacto\')}>Contacto</a></li>',
    '<li><a onClick={() => scrollToSection(\'contacto\')} className={activeSection === \'contacto\' ? styles.active : \'\'}>Contacto</a></li>'
)

# 4. Acortar texto del hero
content = content.replace(
    """Cursando tercer año en la UTN Rosario. Apasionada por el desarrollo de software y las tecnologías de la información. 
              Busco aportar valor en un entorno dinámico y desafiante mientras sigo creciendo profesionalmente.""",
    """Cursando 3er año en UTN Rosario. Especializada en desarrollo Full Stack 
              con enfoque en Cloud (AWS) y DevOps. Apasionada por crear soluciones 
              escalables y eficientes."""
)

# 5. Añadir botones a proyectos - AlojARG
alojarg_tech = """                <div className={styles.projectTech}>
                  <span className={styles.projectBadge}>.NET 9</span>
                  <span className={styles.projectBadge}>Angular 20</span>
                  <span className={styles.projectBadge}>TypeScript</span>
                  <span className={styles.projectBadge}>MySQL</span>
                  <span className={styles.projectBadge}>JWT</span>
                  <span className={styles.projectBadge}>Docker</span>
                  <span className={styles.projectBadge}>FluentValidation</span>
                </div>"""

alojarg_with_buttons = """                <div className={styles.projectTech}>
                  <span className={styles.projectBadge}>.NET 9</span>
                  <span className={styles.projectBadge}>Angular 20</span>
                  <span className={styles.projectBadge}>TypeScript</span>
                  <span className={styles.projectBadge}>MySQL</span>
                  <span className={styles.projectBadge}>JWT</span>
                  <span className={styles.projectBadge}>Docker</span>
                  <span className={styles.projectBadge}>FluentValidation</span>
                </div>
                <div className={styles.projectActions}>
                  <a href="https://github.com/Joaquinagm01" target="_blank" rel="noopener noreferrer" className={styles.btnGithub}>
                    <FaGithub /> Ver Código
                  </a>
                  <a href="#contacto" className={styles.btnDemo}>
                    🚀 Contactar
                  </a>
                </div>"""

content = content.replace(alojarg_tech, alojarg_with_buttons, 1)

# Guardar el archivo modificado
with open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ App.jsx actualizado exitosamente!")
print("- Navbar con sección activa")
print("- Texto del Hero más conciso")
print("- Botones añadidos a proyectos")
