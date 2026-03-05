import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaRocket, FaThLarge, FaStream, FaStar } from 'react-icons/fa';
import SwipeCarousel from './SwipeCarousel';
import styles from './Projects.module.css';

const Projects = () => {
  const { t } = useTranslation();
  const [viewMode, setViewMode] = useState('carousel'); // 'carousel' o 'grid'
  const [selectedTech, setSelectedTech] = useState('all');
  const [showFeatured, setShowFeatured] = useState(false);

  const projects = [
    {
      id: 1,
      title: t('projects.alojarg.title'),
      subtitle: t('projects.alojarg.subtitle'),
      description: t('projects.alojarg.description'),
      tech: ['.NET 9', 'Angular 20', 'TypeScript', 'MySQL', 'JWT', 'Docker', 'FluentValidation'],
      categories: ['Backend', 'Frontend', 'Full Stack'],
      github: 'https://github.com/Joaquinagm01/Seminario301-GomezManna.Tabini.Ariati.Romagnoli.Rindello.git',
      demo: null,
      featured: true
    },
    {
      id: 2,
      title: t('projects.fisica.title'),
      subtitle: t('projects.fisica.subtitle'),
      description: t('projects.fisica.description'),
      tech: ['JavaScript', 'p5.js', 'HTML5', 'CSS3', 'Node.js', 'Chart.js'],
      categories: ['Frontend', 'JavaScript'],
      demo: 'https://fisica-modelo.vercel.app',
      github: 'https://github.com/Joaquinagm01/FISICA-MODELO.git',
      icon: FaRocket,
      featured: true
    },
    {
      id: 3,
      title: t('projects.libros.title'),
      subtitle: t('projects.libros.subtitle'),
      description: t('projects.libros.description'),
      tech: ['React', 'Node.js', 'Express', 'TypeScript', 'MikroORM', 'MySQL', 'JWT'],
      categories: ['Backend', 'Frontend', 'Full Stack'],
      demo: 'https://tpdsw-31.vercel.app/',
      github: 'https://github.com/JoaquinM999/TPDSW-COM304--Carloni-GomezManna-Chacon-Mierez-2025.git',
      featured: true
    },
    {
      id: 4,
      title: t('projects.stock.title'),
      subtitle: t('projects.stock.subtitle') || 'Sistema de Inventario',
      description: t('projects.stock.description'),
      tech: ['React', 'TailwindCSS', 'Node.js', 'Express', 'Prisma', 'MySQL'],
      categories: ['Backend', 'Frontend', 'Full Stack'],
      github: 'https://github.com/ImNahue/POC-PRISMA-COM304--Carloni-GomezManna-Chacon-Mierez-2025.git',
      demo: null,
      featured: false
    },
    {
      id: 5,
      title: t('projects.hospital.title'),
      subtitle: t('projects.hospital.subtitle') || 'Gestión Hospitalaria',
      description: t('projects.hospital.description'),
      tech: ['Python', 'Pascal', 'Algoritmos'],
      categories: ['Backend', 'Python'],
      demo: null,
      github: null,
      featured: false
    }
  ];

  // Obtener todas las tecnologías únicas
  const allTechs = [...new Set(projects.flatMap(p => p.tech))].sort();
  const techFilters = ['all', ...allTechs];

  // Filtrar proyectos
  const filteredProjects = projects.filter(project => {
    const matchesTech = selectedTech === 'all' || project.tech.includes(selectedTech);
    const matchesFeatured = !showFeatured || project.featured;
    return matchesTech && matchesFeatured;
  });

  // Componente de tarjeta de proyecto
  const ProjectCard = ({ project }) => {
    const IconComponent = project.icon;
    
    return (
      <div className={styles.projectCard}>
        {project.featured && (
          <span className={styles.featuredBadge}>
            <FaStar className={styles.star} />
            {t('projects.featured')}
          </span>
        )}
        <div className={styles.projectContent}>
          <h3 className={styles.projectTitle}>
            {IconComponent && <IconComponent className={styles.projectIcon} />}
            {project.title}
          </h3>
          {project.subtitle && (
            <p className={styles.projectSubtitle}>{project.subtitle}</p>
          )}
          <p 
            className={styles.projectDescription} 
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
          <div className={styles.projectTech}>
            {project.tech.map((tech, index) => (
              <span key={index} className={styles.techBadge}>{tech}</span>
            ))}
          </div>
          <div className={styles.projectActions}>
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.btnDemo}
              >
                {t('projects.view_demo')}
              </a>
            )}
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.btnGithub}
              >
                <FaGithub /> {t('projects.view_code')}
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.projectsContainer}>
      {/* Controles */}
      <div className={styles.controls}>
        {/* Toggle Vista */}
        <div className={styles.viewToggle}>
          <button
            className={`${styles.toggleButton} ${viewMode === 'carousel' ? styles.active : ''}`}
            onClick={() => setViewMode('carousel')}
            aria-label={t('projects.carousel_view')}
          >
            <FaStream />
          </button>
          <button
            className={`${styles.toggleButton} ${viewMode === 'grid' ? styles.active : ''}`}
            onClick={() => setViewMode('grid')}
            aria-label={t('projects.grid_view')}
          >
            <FaThLarge />
          </button>
        </div>

        {/* Filtro de Destacados */}
        <button
          className={`${styles.featuredFilter} ${showFeatured ? styles.active : ''}`}
          onClick={() => setShowFeatured(!showFeatured)}
        >
          <FaStar />
          {t('projects.show_featured')}
        </button>
      </div>

      {/* Filtros de Tecnología */}
      <div className={styles.filtersContainer}>
        {techFilters.map((tech) => (
          <button
            key={tech}
            className={`${styles.filterButton} ${selectedTech === tech ? styles.active : ''}`}
            onClick={() => setSelectedTech(tech)}
          >
            {tech === 'all' ? t('projects.filter.all') : tech}
          </button>
        ))}
      </div>

      {/* Contador de proyectos */}
      {filteredProjects.length > 0 && (
        <p className={styles.projectCount}>
          {filteredProjects.length} {filteredProjects.length === 1 ? t('projects.project') : t('projects.projects')}
        </p>
      )}

      {/* Vista de proyectos */}
      {filteredProjects.length === 0 ? (
        <div className={styles.noProjects}>
          <p>{t('projects.no_results')}</p>
        </div>
      ) : viewMode === 'carousel' ? (
        <SwipeCarousel>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </SwipeCarousel>
      ) : (
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
