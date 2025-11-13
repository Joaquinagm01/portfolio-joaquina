import React from "react";

export default function CVInfo() {
  return (
    <section className="max-w-3xl mx-auto p-6 bg-white/90 rounded-xl shadow-lg text-gray-900 mt-8">
      <div className="flex flex-col items-center mb-8">
  <img src="/profile.jpg" alt="Foto de Joaquina Gómez Manna" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-pink-400 shadow" />
        <h2 className="text-3xl font-bold text-center">🧾 Currículum Vitae — Joaquina Gómez Manna</h2>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2"><span role="img" aria-label="Perfil">👩‍💻</span> Perfil</h3>
        <p className="text-lg text-center">En 2020 inicié la carrera de Ingeniería de Sistemas, y a lo largo de mi formación he adquirido sólidos conocimientos en el área. Con mi experiencia académica y profesional, busco una oportunidad laboral donde pueda aplicar mis habilidades, contribuir al desarrollo de la empresa y continuar ampliando mis conocimientos en un entorno desafiante y enriquecedor.</p>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2"><span role="img" aria-label="Contacto">📞</span> Datos de contacto</h3>
        <ul className="space-y-1 text-lg text-center">
          <li><span className="font-medium">Teléfono:</span> (+54) 341 229 1597</li>
          <li><span className="font-medium">Correo:</span> gomezmannajoaquina@gmail.com</li>
          <li><span className="font-medium">Ubicación:</span> Rosario, Argentina</li>
        </ul>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2"><span role="img" aria-label="Educación">🎓</span> Educación</h3>
        <ul className="space-y-4 text-lg">
          <li>
            <span className="font-bold">Escuela Superior de Comercio “Libertador General San Martín”</span> <span className="text-gray-600">(2015 – 2019)</span><br/>
            <span>Bachiller con orientación en Economía.</span>
          </li>
          <li>
            <span className="font-bold">Universidad Tecnológica de Rosario</span> <span className="text-gray-600">(2020 – Actualidad)</span><br/>
            <span>Carrera de Ingeniería en Sistemas. Actualmente cursando el tercer año.</span>
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2"><span role="img" aria-label="Experiencia">💼</span> Experiencia profesional</h3>
        <div className="space-y-6">
          <div>
            <span className="font-bold">Soporte Informático — Asociación de Cooperativas Argentinas</span> <span className="text-gray-600">(10/03/2025 – Actualidad)</span><br/>
            <span className="font-medium">Rol:</span> Soporte Informático de Nivel 1
            <ul className="list-disc ml-6 mt-2 space-y-1 text-base">
              <li>Soporte técnico de primer nivel y resolución de incidencias en mesa de ayuda (Help Desk).</li>
              <li>Gestión de infraestructura y administración de entornos Microsoft.</li>
              <li>Automatización de procesos con Jira y datos externos, mejorando la eficiencia operativa.</li>
              <li>Colaboración con el área de Tecnología de la Información en proyectos de mejora continua.</li>
            </ul>
            <span className="block mt-2 text-sm text-gray-700">Tecnologías: Microsoft Windows, Office 365, Microsoft Cortex, Active Directory, Citrix, Jira.</span>
          </div>
          <div>
            <span className="font-bold">Soporte Informático — Tribunal de Faltas</span> <span className="text-gray-600">(01/03/2024 – 28/02/2025)</span><br/>
            <span className="font-medium">Pasantía:</span> Mantenimiento y actualización de sistemas (software y hardware), implementación de nuevas tecnologías y optimización de procesos.
            <ul className="list-disc ml-6 mt-2 space-y-1 text-base">
              <li>Brindé asesoramiento y capacitación a usuarios.</li>
              <li>Realicé testing de nuevas implementaciones y relevamientos de datos.</li>
              <li>Elaboré manuales e instructivos, contribuyendo a mejorar la eficiencia operativa.</li>
            </ul>
            <span className="block mt-2 text-sm text-gray-700">Contacto de referencia: Eva Bellini — Cel: (+54) 341 323 4724</span>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2"><span role="img" aria-label="Proyectos">🧪</span> Proyectos realizados</h3>
        <ul className="space-y-4 text-lg">
          <li><span className="font-bold">Sistema de Hospital (2020):</span> Programa en Python para registrar y buscar pacientes, enfermedades y síntomas. Proyecto académico de Algoritmos y Estructura de Datos (Python y Pascal).</li>
          <li><span className="font-bold">Sistema de Boletos de Vuelo (2023):</span> Desarrollado en Smalltalk, menú de opciones y gestión completa de boletos.</li>
          <li><span className="font-bold">Prototipo de Gestión de Stock (2025):</span> Full Stack con React, TailwindCSS, Node.js, Express, TypeScript, Prisma y MySQL. CRUD de productos, administración de categorías, inventario en tiempo real.</li>
          <li><span className="font-bold">Página de Libros (2025):</span> Sistema web full stack de gestión y reseñas de libros, registro de usuarios, calificaciones, favoritos y listas personalizadas. Frontend: React, HTML, CSS. Backend: Node.js, Express, TypeScript. Base de datos: MySQL con MikroORM. Autenticación JWT, moderación de reseñas y recomendaciones personalizadas.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2"><span role="img" aria-label="Conocimientos">🧠</span> Conocimientos técnicos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-1">💻 Lenguajes y frameworks</h4>
            <ul className="list-disc ml-6 space-y-1 text-base">
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
            <h4 className="font-semibold mb-1">🗄️ Bases de datos y herramientas</h4>
            <ul className="list-disc ml-6 space-y-1 text-base">
              <li>MySQL – 70%</li>
              <li>MikroORM / Prisma – 80%</li>
              <li>Axios – 70%</li>
              <li>JWT – 60%</li>
              <li>Git / GitHub – 80%</li>
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold mb-1">⚙️ Otros conocimientos</h4>
          <ul className="list-disc ml-6 space-y-1 text-base">
            <li>MD, DER, Diseño de sistemas, Ubuntu, AnyLogic, APIs</li>
            <li>Microsoft 365, Office, Excel, Windows, Linux, iOS, AutoCAD, Axure</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2"><span role="img" aria-label="Idiomas">🌍</span> Idiomas</h3>
        <ul className="space-y-1 text-lg">
          <li><span className="font-medium">Español:</span> Nativo</li>
          <li><span className="font-medium">Inglés:</span> 100%</li>
        </ul>
      </div>
    </section>
  );
}
