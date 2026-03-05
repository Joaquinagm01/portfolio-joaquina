import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Courses.module.css';
import { FaCertificate, FaFileDownload, FaFileExcel } from 'react-icons/fa';
import { SiCisco } from 'react-icons/si';
import { MdSecurity } from 'react-icons/md';

const Courses = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Función para verificar si un curso es nuevo (menos de 3 meses)
  const isNewCourse = (dateString) => {
    const courseYear = parseInt(dateString);
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    
    // Si el curso es del año actual y estamos dentro de los primeros 6 meses
    return courseYear === currentYear && currentMonth <= 6;
  };

  const courses = [
    {
      id: 1,
      title: t('courses.course1.title'),
      institution: t('courses.course1.institution'),
      date: t('courses.course1.date'),
      description: t('courses.course1.description'),
      pdfUrl: '/Certificados cursos-55.pdf',
      icon: FaFileExcel,
      iconColor: '#217346',
      category: 'programming'
    },
    {
      id: 2,
      title: t('courses.course2.title'),
      institution: t('courses.course2.institution'),
      date: t('courses.course2.date'),
      description: t('courses.course2.description'),
      pdfUrl: '/Curso de IA para ciberseguridad.pdf',
      icon: MdSecurity,
      iconColor: '#e91e63',
      category: 'ai'
    },
    {
      id: 3,
      title: t('courses.course3.title'),
      institution: t('courses.course3.institution'),
      date: t('courses.course3.date'),
      description: t('courses.course3.description'),
      pdfUrl: '/Introduction_to_Cybersecurity_certificate_gomezmannajoaquina-gmail-com_a890992b-9ec6-41a7-a207-ffef4eed749b.pdf',
      icon: SiCisco,
      iconColor: '#049fd9',
      category: 'programming'
    }
  ];

  const categories = [
    { id: 'all', label: t('courses.filter.all') },
    { id: 'programming', label: t('courses.filter.programming') },
    { id: 'ai', label: t('courses.filter.ai') }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <>
      {/* Filtros de categoría */}
      <div className={styles.filtersContainer}>
        {categories.map((category) => (
          <button
            key={category.id}
            className={`${styles.filterButton} ${selectedCategory === category.id ? styles.active : ''}`}
            onClick={() => setSelectedCategory(category.id)}
            aria-pressed={selectedCategory === category.id}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Grid de cursos */}
      <div className={styles.coursesGrid}>
        {filteredCourses.map((course) => {
          const IconComponent = course.icon;
          const isNew = isNewCourse(course.date);
          
          return (
            <div key={course.id} className={styles.courseCard}>
              {isNew && (
                <span className={styles.newBadge}>{t('courses.new_badge')}</span>
              )}
              <div className={styles.courseHeader}>
                <div className={styles.courseIconWrapper}>
                  <IconComponent className={styles.courseIcon} style={{ color: course.iconColor }} />
                </div>
                <FaCertificate className={styles.certificateIcon} />
              </div>
              <div className={styles.courseContent}>
                <h3 className={styles.courseTitle}>{course.title}</h3>
                <p className={styles.courseInstitution}>{course.institution}</p>
                <p className={styles.courseDate}>{course.date}</p>
                <p className={styles.courseDescription}>{course.description}</p>
              </div>
              <a 
                href={course.pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.courseButton}
                aria-label={`${t('courses.view_certificate')}: ${course.title}`}
              >
                <FaFileDownload />
                <span>{t('courses.download')}</span>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Courses;
