import React, { useState, useMemo, useCallback, memo } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Courses.module.css';
import { FaCertificate, FaFileDownload, FaFileExcel } from 'react-icons/fa';
import { SiCisco } from 'react-icons/si';
import { MdSecurity } from 'react-icons/md';

const Courses = memo(() => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Función para verificar si un curso es nuevo (menos de 3 meses)
  const isNewCourse = useCallback((dateString) => {
    const courseYear = parseInt(dateString);
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    
    // Si el curso es del año actual y estamos dentro de los primeros 6 meses
    return courseYear === currentYear && currentMonth <= 6;
  }, []);

  const courses = useMemo(() => [
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
    },
    {
      id: 4,
      title: t('courses.course4.title'),
      institution: t('courses.course4.institution'),
      date: t('courses.course4.date'),
      description: t('courses.course4.description'),
      pdfUrl: '/ekoparty-hackademy-cybersecurity-basics.pdf',
      icon: MdSecurity,
      iconColor: '#ef6c00',
      category: 'programming'
    },
    {
      id: 5,
      title: t('courses.course5.title'),
      institution: t('courses.course5.institution'),
      date: t('courses.course5.date'),
      description: t('courses.course5.description'),
      pdfUrl: '/Networking_Basics_certificate_gomezmannajoaquina-gmail-com_4fe9a501-72dd-45f3-bcbe-37b812a531c9.pdf',
      icon: SiCisco,
      iconColor: '#049fd9',
      category: 'programming'
    },
    {
      id: 6,
      title: t('courses.course6.title'),
      institution: t('courses.course6.institution'),
      date: t('courses.course6.date'),
      description: t('courses.course6.description'),
      pdfUrl: '/Network_Defense_certificate_gomezmannajoaquina-gmail-com_4567c14a-aa36-41e9-a516-78e229c75eb1.pdf',
      icon: MdSecurity,
      iconColor: '#00bcd4',
      category: 'programming'
    },
    {
      id: 7,
      title: t('courses.course7.title'),
      institution: t('courses.course7.institution'),
      date: t('courses.course7.date'),
      description: t('courses.course7.description'),
      pdfUrl: '/Endpoint_Security_certificate_gomezmannajoaquina-gmail-com_83b46410-23a8-448c-bc1e-adb4ae2dcf99.pdf',
      icon: MdSecurity,
      iconColor: '#26a69a',
      category: 'programming'
    },
    {
      id: 8,
      title: t('courses.course8.title'),
      institution: t('courses.course8.institution'),
      date: t('courses.course8.date'),
      description: t('courses.course8.description'),
      pdfUrl: '/Cyber_Threat_Management_certificate_gomezmannajoaquina-gmail-com_b34201a5-dd14-41ed-873e-459d0247807e.pdf',
      icon: MdSecurity,
      iconColor: '#ef5350',
      category: 'programming'
    },
    {
      id: 9,
      title: t('courses.course9.title'),
      institution: t('courses.course9.institution'),
      date: t('courses.course9.date'),
      description: t('courses.course9.description'),
      pdfUrl: '/Junior_Cybersecurity_Analyst_Career_Path_certificate_gomezmannajoaquina-gmail-com_fa2c1438-72e7-4ca0-b0e1-5580229ec2a3.pdf',
      icon: SiCisco,
      iconColor: '#049fd9',
      category: 'programming'
    },
    {
      id: 10,
      title: t('courses.course10.title'),
      institution: t('courses.course10.institution'),
      date: t('courses.course10.date'),
      description: t('courses.course10.description'),
      pdfUrl: '/Networking_Devices_and_Initial_Configuration_certificate_gomezmannajoaquina-gmail-com_4745328e-6965-440f-a9f1-52a2396de4ca.pdf',
      icon: SiCisco,
      iconColor: '#049fd9',
      category: 'programming'
    }
  ], [t]);

  const categories = useMemo(() => [
    { id: 'all', label: t('courses.filter.all') },
    { id: 'programming', label: t('courses.filter.programming') },
    { id: 'ai', label: t('courses.filter.ai') }
  ], [t]);

  const filteredCourses = useMemo(() => 
    selectedCategory === 'all' 
      ? courses 
      : courses.filter(course => course.category === selectedCategory),
    [courses, selectedCategory]
  );

  const handleCategoryChange = useCallback((categoryId) => {
    setSelectedCategory(categoryId);
  }, []);

  return (
    <>
      {/* Filtros de categoría */}
      <div className={styles.filtersContainer}>
        {categories.map((category) => (
          <button
            key={category.id}
            className={`${styles.filterButton} ${selectedCategory === category.id ? styles.active : ''}`}
            onClick={() => handleCategoryChange(category.id)}
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
});

export default Courses;
