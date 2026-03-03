import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Courses.module.css';
import { FaCertificate, FaFileDownload, FaFileExcel } from 'react-icons/fa';
import { SiCisco } from 'react-icons/si';
import { MdSecurity } from 'react-icons/md';

const Courses = () => {
  const { t } = useTranslation();

  const courses = [
    {
      id: 1,
      title: t('courses.course1.title'),
      institution: t('courses.course1.institution'),
      date: t('courses.course1.date'),
      description: t('courses.course1.description'),
      pdfUrl: '/Certificados cursos-55.pdf',
      icon: FaFileExcel,
      iconColor: '#217346'
    },
    {
      id: 2,
      title: t('courses.course2.title'),
      institution: t('courses.course2.institution'),
      date: t('courses.course2.date'),
      description: t('courses.course2.description'),
      pdfUrl: '/Curso de IA para ciberseguridad.pdf',
      icon: MdSecurity,
      iconColor: '#e91e63'
    },
    {
      id: 3,
      title: t('courses.course3.title'),
      institution: t('courses.course3.institution'),
      date: t('courses.course3.date'),
      description: t('courses.course3.description'),
      pdfUrl: '/Introduction_to_Cybersecurity_certificate_gomezmannajoaquina-gmail-com_a890992b-9ec6-41a7-a207-ffef4eed749b.pdf',
      icon: SiCisco,
      iconColor: '#049fd9'
    }
  ];

  return (
    <div className={styles.coursesGrid}>
      {courses.map((course) => {
        const IconComponent = course.icon;
        return (
        <div key={course.id} className={styles.courseCard}>
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
            <span>{t('courses.view_certificate')}</span>
          </a>
        </div>
      )})}
    </div>
  );
};

export default Courses;
