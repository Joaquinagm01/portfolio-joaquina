import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaGitAlt, FaGithub,
  FaLinux, FaWindows, FaApple, FaUbuntu, FaFileExcel, FaChartLine,
  FaFigma, FaServer, FaNetworkWired, FaShieldAlt, FaCloud, FaTools
} from 'react-icons/fa';
import {
  SiMysql, SiPostgresql, SiMongodb, SiJavascript, SiTypescript,
  SiTailwindcss, SiNextdotjs, SiAngular, SiDotnet, SiPrisma, SiExpress,
  SiAutocad, SiTerraform
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { BiServer } from 'react-icons/bi';
import { MdSecurity, MdComputer } from 'react-icons/md';
import styles from './Skills.module.css';

const Skills = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const skillsData = [
    {
      id: 'frontend',
      title: t('skills.frontend'),
      icon: FaReact,
      color: '#61dafb',
      skills: [
        { name: 'React', icon: FaReact, color: '#61dafb' },
        { name: 'Angular 20', icon: SiAngular, color: '#dd0031' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
        { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06b6d4' },
        { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' }
      ]
    },
    {
      id: 'backend',
      title: t('skills.backend'),
      icon: FaServer,
      color: '#68a063',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, color: '#68a063' },
        { name: 'Express', icon: SiExpress, color: '#000000' },
        { name: '.NET 9', icon: SiDotnet, color: '#512bd4' },
        { name: 'Python', icon: FaPython, color: '#3776ab' },
        { name: 'Prisma', icon: SiPrisma, color: '#2d3748' },
        { name: 'MikroORM', icon: BiServer, color: '#ff4438' }
      ]
    },
    {
      id: 'databases',
      title: t('skills.databases'),
      icon: SiMysql,
      color: '#4479a1',
      skills: [
        { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47a248' }
      ]
    },
    {
      id: 'devops',
      title: t('skills.devops'),
      icon: FaDocker,
      color: '#2496ed',
      skills: [
        { name: 'Docker', icon: FaDocker, color: '#2496ed' },
        { name: 'Azure DevOps', icon: FaTools, color: '#0078d4' },
        { name: 'Azure', icon: FaCloud, color: '#0078d4' },
        { name: 'Git', icon: FaGitAlt, color: '#f05032' },
        { name: 'GitHub', icon: FaGithub, color: '#181717' },
        { name: 'Terraform', icon: SiTerraform, color: '#7b42bc' }
      ]
    },
    {
      id: 'security',
      title: t('skills.security'),
      icon: MdSecurity,
      color: '#e91e63',
      skills: [
        { name: 'Kali Linux', icon: FaLinux, color: '#557c94' },
        { name: 'Nmap', icon: FaNetworkWired, color: '#4caf50' },
        { name: 'Cortex', icon: FaShieldAlt, color: '#ff6b6b' },
        { name: 'VirtualBox', icon: MdComputer, color: '#183a61' },
        { name: 'VMs', icon: FaCloud, color: '#00adef', fullName: 'Máquinas Virtuales' }
      ]
    },
    {
      id: 'languages',
      title: t('skills.languages'),
      icon: VscCode,
      color: '#0078d4',
      skills: [
        { name: 'Python', icon: FaPython, color: '#3776ab' },
        { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
        { name: 'C', icon: VscCode, color: '#a8b9cc' },
        { name: 'Pascal', icon: VscCode, color: '#6b9bd1' },
        { name: 'Smalltalk', icon: VscCode, color: '#596677' }
      ]
    },
    {
      id: 'os',
      title: t('skills.os'),
      icon: FaLinux,
      color: '#fcc624',
      skills: [
        { name: 'Windows', icon: FaWindows, color: '#0078d6' },
        { name: 'Linux', icon: FaLinux, color: '#fcc624' },
        { name: 'Ubuntu', icon: FaUbuntu, color: '#e95420' },
        { name: 'iOS', icon: FaApple, color: '#000000' }
      ]
    },
    {
      id: 'design',
      title: t('skills.design'),
      icon: FaFigma,
      color: '#f24e1e',
      skills: [
        { name: 'Autocad', icon: SiAutocad, color: '#ee3124' },
        { name: 'Axure', icon: FaFigma, color: '#00b0ff' },
        { name: 'AnyLogic', icon: FaChartLine, color: '#ff6b35' },
        { name: 'MD, DER', icon: FaFigma, color: '#a259ff', fullName: 'Modelo de Datos, Diseño de Sistema' }
      ]
    },
    {
      id: 'tools',
      title: t('skills.tools'),
      icon: FaFileExcel,
      color: '#217346',
      skills: [
        { name: 'Microsoft 365', icon: FaWindows, color: '#d83b01' },
        { name: 'Excel', icon: FaFileExcel, color: '#217346' }
      ]
    }
  ];

  const categories = [
    { id: 'all', label: t('skills.all') },
    ...skillsData.map(cat => ({ id: cat.id, label: cat.title }))
  ];

  const filteredSkills = selectedCategory === 'all'
    ? skillsData
    : skillsData.filter(cat => cat.id === selectedCategory);

  return (
    <div className={styles.skillsContainer}>
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

      {/* Grid de categorías de habilidades */}
      <div className={styles.skillsGrid}>
        {filteredSkills.map((category, categoryIndex) => {
          const CategoryIcon = category.icon;
          return (
            <div
              key={category.id}
              className={styles.categoryCard}
              style={{
                animationDelay: `${categoryIndex * 0.1}s`
              }}
            >
              <div className={styles.categoryHeader}>
                <CategoryIcon 
                  className={styles.categoryIcon} 
                  style={{ color: category.color }}
                />
                <h3 className={styles.categoryTitle}>{category.title}</h3>
              </div>
              <div className={styles.skillsItems}>
                {category.skills.map((skill, skillIndex) => {
                  const SkillIcon = skill.icon;
                  return (
                    <div
                      key={`${category.id}-${skill.name}`}
                      className={styles.skillItem}
                      style={{
                        animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                      }}
                      title={skill.fullName || skill.name}
                    >
                      <SkillIcon 
                        className={styles.skillIcon} 
                        style={{ color: skill.color }}
                      />
                      <span className={styles.skillName}>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
