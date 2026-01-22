import React from "react";
import styles from './CVInfo.module.css';

export default function CVInfo() {
  return (
    <section className={styles.cvSection}>
      <div className={styles.header}>
          <picture>
            <source type="image/avif" srcSet="/profile-180.avif 180w, /profile-360.avif 360w, /profile-720.avif 720w" sizes="(max-width: 480px) 90vw, (max-width: 768px) 60vw, 180px" />
            <source type="image/webp" srcSet="/profile-180.webp 180w, /profile-360.webp 360w, /profile-720.webp 720w" sizes="(max-width: 480px) 90vw, (max-width: 768px) 60vw, 180px" />
            <img
              src="/profile.jpg"
              alt="Foto de Joaquina Gómez Manna"
              className={styles.profileImage}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 480px) 90vw, (max-width: 768px) 60vw, 180px"
              srcSet="/profile-180.jpg 180w, /profile-360.jpg 360w, /profile-720.jpg 720w"
            />
          </picture>
      </div>
      
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}><span role="img" aria-label="Perfil">👩‍💻</span> Perfil</h3>
        <p className={styles.paragraph}>
          Actualmente cursando el cuarto año de Ingeniería en Sistemas en UTN Rosario. Mi formación académica y experiencia profesional me han permitido adquirir sólidos conocimientos técnicos y habilidades para el trabajo en equipo, la resolución de problemas y la adaptación a nuevos desafíos. Busco una oportunidad laboral donde pueda aplicar y seguir desarrollando mis capacidades, contribuyendo al crecimiento de la empresa.
        </p>
      </div>
      
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}><span role="img" aria-label="Contacto">📞</span> Datos de contacto</h3>
        <ul className={styles.contactList}>
          <li><span className={styles.medium}>Teléfono:</span> (+54) 341 229 1597</li>
          <li><span className={styles.medium}>Correo:</span> gomezmannajoaquina@gmail.com</li>
          <li><span className={styles.medium}>Ubicación:</span> Rosario, Argentina</li>
        </ul>
      </div>
      
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}><span role="img" aria-label="Educación">🎓</span> Educación</h3>
        <ul className={styles.list}>
          <li>
            <span className={styles.bold}>Escuela Superior de Comercio "Libertador General San Martín"</span> <span className={styles.gray}>(2015 – 2019)</span><br/>
            <span>Bachiller con orientación en Economía.</span>
          </li>
          <li>
            <span className={styles.bold}>UTN Rosario</span> <span className={styles.gray}>(2020 – Actualidad)</span><br/>
            <span>Carrera de Ingeniería en Sistemas. Actualmente cursando el cuarto año.</span>
          </li>
        </ul>
      </div>
      
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}><span role="img" aria-label="Experiencia">💼</span> Experiencia profesional</h3>
        <div>
          <div className={styles.experienceSection}>
            <span className={styles.bold}>Soporte Informático — Asociación de Cooperativas Argentinas</span> <span className={styles.gray}>(10/03/2025 – Actualidad)</span><br/>
            <span className={styles.medium}>Rol:</span> Soporte Informático de Nivel 1
            <ul className={styles.bulletList}>
              <li>Soporte técnico de primer nivel y resolución de incidencias en mesa de ayuda (Help Desk).</li>
              <li>Gestión de infraestructura y administración de entornos Microsoft.</li>
              <li>Automatización de procesos con Jira y datos externos, mejorando la eficiencia operativa.</li>
              <li>Colaboración con el área de Tecnología de la Información en proyectos de mejora continua.</li>
            </ul>
            <span className={styles.techNote}>Tecnologías: Microsoft Windows, Office 365, Microsoft Cortex, Active Directory, Citrix, Jira.</span>
          </div>
          <div className={styles.experienceSection}>
            <span className={styles.bold}>Soporte Informático — Tribunal de Faltas</span> <span className={styles.gray}>(01/03/2024 – 28/02/2025)</span><br/>
            <span className={styles.medium}>Pasantía:</span> Mantenimiento y actualización de sistemas (software y hardware), implementación de nuevas tecnologías y optimización de procesos.
            <ul className={styles.bulletList}>
              <li>Brindé asesoramiento y capacitación a usuarios.</li>
              <li>Realicé testing de nuevas implementaciones y relevamientos de datos.</li>
              <li>Elaboré manuales e instructivos, contribuyendo a mejorar la eficiencia operativa.</li>
            </ul>
            <span className={styles.contactNote}>Contacto de referencia: Eva Bellini — Cel: (+54) 341 323 4724</span>
          </div>
        </div>
      </div>
      
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}><span role="img" aria-label="Proyectos">🧪</span> Proyectos realizados</h3>
        <ul className={styles.list}>
          <li><span className={styles.bold}>Sistema de Hospital (2020):</span> Programa en Python para registrar y buscar pacientes, enfermedades y síntomas. Proyecto académico de Algoritmos y Estructura de Datos (Python y Pascal).</li>
          <li><span className={styles.bold}>Sistema de Boletos de Vuelo (2023):</span> Desarrollado en Smalltalk, menú de opciones y gestión completa de boletos.</li>
          <li><span className={styles.bold}>Prototipo de Gestión de Stock (2025):</span> Full Stack con React, TailwindCSS, Node.js, Express, TypeScript, Prisma y MySQL. CRUD de productos, administración de categorías, inventario en tiempo real.</li>
          <li><span className={styles.bold}>Página de Libros (2025):</span> Sistema web full stack de gestión y reseñas de libros, registro de usuarios, calificaciones, favoritos y listas personalizadas. Frontend: React, HTML, CSS. Backend: Node.js, Express, TypeScript. Base de datos: MySQL con MikroORM. Autenticación JWT, moderación de reseñas y recomendaciones personalizadas.</li>
        </ul>
      </div>
      
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}><span role="img" aria-label="Conocimientos">🧠</span> Conocimientos técnicos</h3>
        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <h4>💻 Lenguajes y frameworks</h4>
            <ul className={styles.bulletList}>
              <li>React – 80%</li>
              <li>TypeScript – 80%</li>
              <li>Node.js / Express – 80%</li>
              <li>Python – 80%</li>
              <li>Smalltalk – 70%</li>
              <li>C – 70%</li>
              <li>Pascal – 70%</li>
              <li>JavaScript – 50%</li>
            </ul>
          </div>
          <div className={styles.gridItem}>
            <h4>🗄️ Bases de datos y herramientas</h4>
            <ul className={styles.bulletList}>
              <li>MySQL – 70%</li>
              <li>MikroORM / Prisma – 80%</li>
              <li>Axios – 70%</li>
              <li>JWT – 60%</li>
              <li>Git / GitHub – 80%</li>
            </ul>
          </div>
        </div>
        <div style={{marginTop: '1rem'}}>
          <h4 style={{fontWeight: 600, marginBottom: '0.25rem'}}>⚙️ Otros conocimientos</h4>
          <ul className={styles.bulletList}>
            <li>MD, DER, Diseño de sistemas, Ubuntu, AnyLogic, APIs</li>
            <li>Microsoft 365, Office, Excel, Windows, Linux, iOS, AutoCAD, Axure</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
