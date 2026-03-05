import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './AboutPortfolio.module.css';
import { 
  FaReact, FaGithub, FaNpm, FaRocket,
  FaPaintBrush, FaBolt, FaShieldAlt, FaCode
} from 'react-icons/fa';
import { 
  SiVite, SiJavascript, SiCss3, SiVercel,
  SiReactrouter, SiI18Next
} from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

const AboutPortfolio = React.memo(() => {
  const { t } = useTranslation();

  const techStack = [
    {
      category: t('aboutPortfolio.frontend.title'),
      icon: <FaReact />,
      color: '#61dafb',
      technologies: [
        {
          name: 'React 18',
          description: t('aboutPortfolio.frontend.react'),
          icon: <FaReact />,
          link: 'https://react.dev/'
        },
        {
          name: 'Vite',
          description: t('aboutPortfolio.frontend.vite'),
          icon: <SiVite />,
          link: 'https://vitejs.dev/'
        },
        {
          name: 'CSS Modules',
          description: t('aboutPortfolio.frontend.css'),
          icon: <SiCss3 />,
          link: 'https://github.com/css-modules/css-modules'
        }
      ]
    },
    {
      category: t('aboutPortfolio.libraries.title'),
      icon: <FaNpm />,
      color: '#cb3837',
      technologies: [
        {
          name: 'react-i18next',
          description: t('aboutPortfolio.libraries.i18n'),
          icon: <SiI18Next />,
          link: 'https://react.i18next.com/'
        },
        {
          name: 'react-icons',
          description: t('aboutPortfolio.libraries.icons'),
          icon: <FaPaintBrush />,
          link: 'https://react-icons.github.io/react-icons/'
        },
        {
          name: 'EmailJS',
          description: t('aboutPortfolio.libraries.emailjs'),
          icon: <MdEmail />,
          link: 'https://www.emailjs.com/'
        }
      ]
    },
    {
      category: t('aboutPortfolio.performance.title'),
      icon: <FaBolt />,
      color: '#ffd700',
      technologies: [
        {
          name: 'Code Splitting',
          description: t('aboutPortfolio.performance.splitting'),
          icon: <FaCode />
        },
        {
          name: 'Lazy Loading',
          description: t('aboutPortfolio.performance.lazy'),
          icon: <FaBolt />
        },
        {
          name: 'Service Worker',
          description: t('aboutPortfolio.performance.sw'),
          icon: <FaShieldAlt />
        },
        {
          name: 'Image Optimization',
          description: t('aboutPortfolio.performance.images'),
          icon: <FaPaintBrush />
        }
      ]
    },
    {
      category: t('aboutPortfolio.deployment.title'),
      icon: <FaRocket />,
      color: '#00ff88',
      technologies: [
        {
          name: 'Vercel',
          description: t('aboutPortfolio.deployment.vercel'),
          icon: <SiVercel />,
          link: 'https://vercel.com/'
        },
        {
          name: 'GitHub',
          description: t('aboutPortfolio.deployment.github'),
          icon: <FaGithub />,
          link: 'https://github.com/Joaquinagm01/portfolio-joaquina'
        },
        {
          name: 'CI/CD',
          description: t('aboutPortfolio.deployment.cicd'),
          icon: <FaRocket />
        }
      ]
    }
  ];

  const features = [
    {
      icon: <FaBolt />,
      title: t('aboutPortfolio.features.performance.title'),
      description: t('aboutPortfolio.features.performance.desc'),
      color: '#ffd700'
    },
    {
      icon: <FaShieldAlt />,
      title: t('aboutPortfolio.features.accessibility.title'),
      description: t('aboutPortfolio.features.accessibility.desc'),
      color: '#06b6d4'
    },
    {
      icon: <FaPaintBrush />,
      title: t('aboutPortfolio.features.design.title'),
      description: t('aboutPortfolio.features.design.desc'),
      color: '#a855f7'
    },
    {
      icon: <FaCode />,
      title: t('aboutPortfolio.features.code.title'),
      description: t('aboutPortfolio.features.code.desc'),
      color: '#00ff88'
    }
  ];

  return (
    <div className={styles.aboutPortfolio}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          {t('aboutPortfolio.title')}
        </h2>
        <p className={styles.description}>
          {t('aboutPortfolio.description')}
        </p>
      </div>

      {/* Features Grid */}
      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={styles.featureCard}
            style={{ '--feature-color': feature.color }}
          >
            <div className={styles.featureIcon}>
              {feature.icon}
            </div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <div className={styles.techStack}>
        {techStack.map((category, idx) => (
          <div key={idx} className={styles.categoryCard}>
            <div 
              className={styles.categoryHeader}
              style={{ '--category-color': category.color }}
            >
              <div className={styles.categoryIcon}>
                {category.icon}
              </div>
              <h3 className={styles.categoryTitle}>{category.category}</h3>
            </div>
            <div className={styles.technologiesList}>
              {category.technologies.map((tech, techIdx) => (
                <div key={techIdx} className={styles.techCard}>
                  <div className={styles.techIcon}>
                    {tech.icon}
                  </div>
                  <div className={styles.techInfo}>
                    <h4 className={styles.techName}>
                      {tech.link ? (
                        <a 
                          href={tech.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={styles.techLink}
                        >
                          {tech.name}
                        </a>
                      ) : (
                        tech.name
                      )}
                    </h4>
                    <p className={styles.techDescription}>{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.statNumber}>{'<500KB'}</div>
          <div className={styles.statLabel}>{t('aboutPortfolio.stats.bundle')}</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statNumber}>{'>95'}</div>
          <div className={styles.statLabel}>{t('aboutPortfolio.stats.lighthouse')}</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statNumber}>{'<2.5s'}</div>
          <div className={styles.statLabel}>{t('aboutPortfolio.stats.lcp')}</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statNumber}>100%</div>
          <div className={styles.statLabel}>{t('aboutPortfolio.stats.responsive')}</div>
        </div>
      </div>

      {/* Source Code Link */}
      <div className={styles.sourceCode}>
        <a 
          href="https://github.com/Joaquinagm01/portfolio-joaquina" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.sourceButton}
        >
          <FaGithub />
          {t('aboutPortfolio.viewSource')}
        </a>
      </div>
    </div>
  );
});

AboutPortfolio.displayName = 'AboutPortfolio';

export default AboutPortfolio;
