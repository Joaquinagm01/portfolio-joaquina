import React, { useState, useMemo, useCallback, memo } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Courses.module.css';
import { FaCertificate, FaFileDownload, FaFileExcel, FaChevronDown } from 'react-icons/fa';
import { SiCisco } from 'react-icons/si';
import { MdSecurity } from 'react-icons/md';

const Courses = memo(() => {
  const { t } = useTranslation();
  const [expandedCategories, setExpandedCategories] = useState({ cybersecurity: false, ai: false, tools: false });

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
      category: 'tools'
    },
    {
      id: 14,
      title: t('courses.course14.title'),
      institution: t('courses.course14.institution'),
      date: t('courses.course14.date'),
      description: t('courses.course14.description'),
      pdfUrl: '/certificate-lumu-roaming-deployment-69a75af2650c47953a0e7567.pdf',
      icon: MdSecurity,
      iconColor: '#ff6b6b',
      logoUrl: '/Lumu.png',
      category: 'cybersecurity'
    },
    {
      id: 15,
      title: t('courses.course15.title'),
      institution: t('courses.course15.institution'),
      date: t('courses.course15.date'),
      description: t('courses.course15.description'),
      pdfUrl: '/certificate-lumu-email-intelligence-699ce46db85e6e5d8607ee30.pdf',
      icon: MdSecurity,
      iconColor: '#ff6b6b',
      logoUrl: '/Lumu.png',
      category: 'cybersecurity'
    },
    {
      id: 16,
      title: t('courses.course16.title'),
      institution: t('courses.course16.institution'),
      date: t('courses.course16.date'),
      description: t('courses.course16.description'),
      pdfUrl: '/certificate-lumu-deployment-overview-69977c76df0737b3ba07852d.pdf',
      icon: MdSecurity,
      iconColor: '#ff6b6b',
      logoUrl: '/Lumu.png',
      category: 'cybersecurity'
    },
    {
      id: 17,
      title: t('courses.course17.title'),
      institution: t('courses.course17.institution'),
      date: t('courses.course17.date'),
      description: t('courses.course17.description'),
      pdfUrl: '/certificate-the-lumu-secops-platform-695ee117ecd421b8bc09b780.pdf',
      icon: MdSecurity,
      iconColor: '#ff6b6b',
      logoUrl: '/Lumu.png',
      category: 'cybersecurity'
    },
    {
      id: 18,
      title: t('courses.course18.title'),
      institution: t('courses.course18.institution'),
      date: t('courses.course18.date'),
      description: t('courses.course18.description'),
      pdfUrl: '/certificate-lumu-virtual-appliance-deployment-69b08b75c1eae82f1f00b716.pdf',
      icon: MdSecurity,
      iconColor: '#ff6b6b',
      logoUrl: '/Lumu.png',
      category: 'cybersecurity'
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
      logoUrl: '/EdutinAcademy.png',
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
      category: 'cybersecurity'
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
      logoUrl: '/Ekoparty.png',
      logoClassName: styles.ekopartyLogo,
      category: 'cybersecurity'
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
      category: 'cybersecurity'
    },
    {
      id: 6,
      title: t('courses.course6.title'),
      institution: t('courses.course6.institution'),
      date: t('courses.course6.date'),
      description: t('courses.course6.description'),
      pdfUrl: '/Network_Defense_certificate_gomezmannajoaquina-gmail-com_4567c14a-aa36-41e9-a516-78e229c75eb1.pdf',
      icon: SiCisco,
      iconColor: '#049fd9',
      category: 'cybersecurity'
    },
    {
      id: 7,
      title: t('courses.course7.title'),
      institution: t('courses.course7.institution'),
      date: t('courses.course7.date'),
      description: t('courses.course7.description'),
      pdfUrl: '/Endpoint_Security_certificate_gomezmannajoaquina-gmail-com_83b46410-23a8-448c-bc1e-adb4ae2dcf99.pdf',
      icon: SiCisco,
      iconColor: '#049fd9',
      category: 'cybersecurity'
    },
    {
      id: 8,
      title: t('courses.course8.title'),
      institution: t('courses.course8.institution'),
      date: t('courses.course8.date'),
      description: t('courses.course8.description'),
      pdfUrl: '/Cyber_Threat_Management_certificate_gomezmannajoaquina-gmail-com_b34201a5-dd14-41ed-873e-459d0247807e.pdf',
      icon: SiCisco,
      iconColor: '#049fd9',
      category: 'cybersecurity'
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
      category: 'cybersecurity'
    },
    {
      id: 19,
      title: t('courses.course19.title'),
      institution: t('courses.course19.institution'),
      date: t('courses.course19.date'),
      description: t('courses.course19.description'),
      pdfUrl: '/Cybersecurity_Defense_Analyst_Career_Path_certificate_gomezmannajoaquina-gmail-com_dc4d6cf0-7f2e-4c28-a240-90decb8f830d.pdf',
      icon: SiCisco,
      iconColor: '#049fd9',
      category: 'cybersecurity'
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
      category: 'cybersecurity'
    },
    {
      id: 11,
      title: t('courses.course11.title'),
      institution: t('courses.course11.institution'),
      date: t('courses.course11.date'),
      description: t('courses.course11.description'),
      pdfUrl: '/certificate-get-started-with-lumu-free-69555487c474f12a2a07b3b2.pdf',
      icon: MdSecurity,
      iconColor: '#ff6b6b',
      logoUrl: '/Lumu.png',
      category: 'cybersecurity'
    },
    {
      id: 12,
      title: t('courses.course12.title'),
      institution: t('courses.course12.institution'),
      date: t('courses.course12.date'),
      description: t('courses.course12.description'),
      pdfUrl: '/certificate-introduction-to-the-lumu-portal-695fdd87312410b1e5044d6c.pdf',
      icon: MdSecurity,
      iconColor: '#ff6b6b',
      logoUrl: '/Lumu.png',
      category: 'cybersecurity'
    },
    {
      id: 13,
      title: t('courses.course13.title'),
      institution: t('courses.course13.institution'),
      date: t('courses.course13.date'),
      description: t('courses.course13.description'),
      pdfUrl: '/certificate-how-lumu-works-69554903a9258a263700a546.pdf',
      icon: MdSecurity,
      iconColor: '#ff6b6b',
      logoUrl: '/Lumu.png',
      category: 'cybersecurity'
    }
  ], [t]);

  const categories = useMemo(() => [
    { id: 'cybersecurity', label: t('courses.filter.cybersecurity') },
    { id: 'ai', label: t('courses.filter.ai') },
    { id: 'tools', label: t('courses.filter.tools') }
  ], [t]);

  const coursesByCategory = useMemo(() => {
    const grouped = {};
    categories.forEach(cat => {
      grouped[cat.id] = courses.filter(course => course.category === cat.id);
    });
    return grouped;
  }, [courses, categories]);

  const toggleCategory = useCallback((categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  }, []);

  return (
    <>
      {/* Categorías expandibles */}
      <div className={styles.categoriesContainer}>
        {categories.map((category) => (
          <div key={category.id} className={styles.categorySection}>
            <button
              className={styles.categoryHeader}
              onClick={() => toggleCategory(category.id)}
              aria-expanded={expandedCategories[category.id]}
            >
              <span className={styles.categoryLabel}>{category.label}</span>
              <span className={styles.courseCount}>({coursesByCategory[category.id].length})</span>
              <FaChevronDown 
                className={`${styles.chevron} ${expandedCategories[category.id] ? styles.expanded : ''}`}
              />
            </button>

            {/* Cursos dentro de la categoría */}
            {expandedCategories[category.id] && (
              <div className={styles.coursesContainer}>
                {coursesByCategory[category.id].map((course) => {
                  const IconComponent = course.icon;
                  
                  return (
                    <div key={course.id} className={styles.courseItem}>
                      <div className={styles.courseItemHeader}>
                        <div className={styles.courseItemIcon}>
                          {course.logoUrl ? (
                            <img 
                              src={course.logoUrl} 
                              alt={course.institution}
                              className={`${styles.courseLogo} ${course.logoClassName || ''}`}
                              loading="lazy"
                              decoding="async"
                            />
                          ) : (
                            <IconComponent style={{ color: course.iconColor }} />
                          )}
                        </div>
                        <div className={styles.courseItemInfo}>
                          <h4 className={styles.courseItemTitle}>{course.title}</h4>
                          <p className={styles.courseItemInstitution}>{course.institution}</p>
                          <p className={styles.courseItemDate}>{course.date}</p>
                          <p className={styles.courseItemDescription}>{course.description}</p>
                        </div>
                      </div>
                      <a 
                        href={course.pdfUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.courseDownloadBtn}
                        aria-label={`${t('courses.view_certificate')}: ${course.title}`}
                      >
                        <FaFileDownload />
                        <span>{t('courses.download')}</span>
                      </a>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
});

export default Courses;
