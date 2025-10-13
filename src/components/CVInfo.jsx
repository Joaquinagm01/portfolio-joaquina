import React from "react";

export default function CVInfo() {
  return (
    <section className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md text-gray-900">
      <div className="flex flex-col items-center mb-4">
  <img src="profile.jpg" alt="Foto de Joaquina Gómez Manna" className="w-32 h-32 rounded-full object-cover mb-2 border-4 border-pink-400 shadow" />
        <h2 className="text-3xl font-bold">🧾 Currículum Vitae — Joaquina Gómez Manna</h2>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">👩‍💻 Perfil</h3>
        <p>En 2020 inicié la carrera de Ingeniería de Sistemas, y a lo largo de mi formación he adquirido sólidos conocimientos en el área. Con mi experiencia académica y profesional, busco una oportunidad laboral donde pueda aplicar mis habilidades, contribuir al desarrollo de la empresa y continuar ampliando mis conocimientos en un entorno desafiante y enriquecedor.</p>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">📞 Datos de contacto</h3>
        <ul className="list-disc ml-6">
          <li>Teléfono: (+54) 341 229 1597</li>
          <li>Correo: gomezmannajoaquina@gmail.com</li>
          <li>Ubicación: Rosario, Argentina</li>
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">🎓 Educación</h3>
        <ul className="list-disc ml-6">
          <li><strong>Escuela Superior de Comercio “Libertador General San Martín”</strong> (2015 – 2019)<br/>Bachiller con orientación en Economía.</li>
          <li><strong>Universidad Tecnológica de Rosario</strong> (2020 – Actualidad)<br/>Carrera de Ingeniería en Sistemas. Actualmente cursando el tercer año.</li>
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">💼 Experiencia profesional</h3>
        <ul className="list-disc ml-6">
          <li><strong>Soporte Informático — Asociación de Cooperativas Argentinas</strong> (10/03/2025 – Actualidad)<br/>Rol: Soporte Informático de Nivel 1<br/>
            <span className="block mt-1">Responsabilidades:</span>
            <ul className="list-disc ml-6">
              <li>Soporte técnico de primer nivel y resolución de incidencias en mesa de ayuda (Help Desk).</li>
              <li>Gestión de infraestructura y administración de entornos Microsoft.</li>
              <li>Automatización de procesos con Jira y datos externos, mejorando la eficiencia operativa.</li>
              <li>Colaboración con el área de Tecnología de la Información en proyectos de mejora continua.</li>
            </ul>
            <span className="block mt-1">Tecnologías: Microsoft Windows, Office 365, Microsoft Cortex, Active Directory, Citrix, Jira.</span>
          </li>
          <li className="mt-4"><strong>Soporte Informático — Tribunal de Faltas</strong> (01/03/2024 – 28/02/2025)<br/>
            <span className="block mt-1">Durante mi pasantía, participé en mantenimiento y actualización de sistemas (software y hardware), implementación de nuevas tecnologías y optimización de procesos.</span>
            <ul className="list-disc ml-6">
              <li>Brindé asesoramiento y capacitación a usuarios.</li>
              <li>Realicé testing de nuevas implementaciones y relevamientos de datos.</li>
              <li>Elaboré manuales e instructivos, contribuyendo a mejorar la eficiencia operativa.</li>
            </ul>
            <span className="block mt-1">Contacto de referencia: Eva Bellini — Cel: (+54) 341 323 4724</span>
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">🧪 Proyectos realizados</h3>
        <ul className="list-disc ml-6">
          <li><strong>Sistema de Hospital (2020):</strong> Programa en Python para registrar y buscar pacientes, enfermedades y síntomas. Proyecto académico de Algoritmos y Estructura de Datos (Python y Pascal).</li>
          <li><strong>Sistema de Boletos de Vuelo (2023):</strong> Desarrollado en Smalltalk, menú de opciones y gestión completa de boletos.</li>
          <li><strong>Prototipo de Gestión de Stock (2025):</strong> Full Stack con React, TailwindCSS, Node.js, Express, TypeScript, Prisma y MySQL. CRUD de productos, administración de categorías, inventario en tiempo real.</li>
          <li><strong>Página de Libros (2025):</strong> Sistema web full stack de gestión y reseñas de libros, registro de usuarios, calificaciones, favoritos y listas personalizadas. Frontend: React, HTML, CSS. Backend: Node.js, Express, TypeScript. Base de datos: MySQL con MikroORM. Autenticación JWT, moderación de reseñas y recomendaciones personalizadas.</li>
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">🧠 Conocimientos técnicos</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold">💻 Lenguajes y frameworks</h4>
            <ul className="list-disc ml-6">
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
          <div>
            <h4 className="font-semibold">🗄️ Bases de datos y herramientas</h4>
            <ul className="list-disc ml-6">
              <li>MySQL – 70%</li>
              <li>MikroORM / Prisma – 80%</li>
              <li>Axios – 70%</li>
              <li>JWT – 60%</li>
              <li>Git / GitHub – 80%</li>
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold">⚙️ Otros conocimientos</h4>
          <ul className="list-disc ml-6">
            <li>MD, DER, Diseño de sistemas, Ubuntu, AnyLogic, APIs</li>
            <li>Microsoft 365, Office, Excel, Windows, Linux, iOS, AutoCAD, Axure</li>
          </ul>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">🌍 Idiomas</h3>
        <ul className="list-disc ml-6">
          <li>Español: Nativo</li>
          <li>Inglés: 100%</li>
        </ul>
      </div>
    </section>
  );
}
