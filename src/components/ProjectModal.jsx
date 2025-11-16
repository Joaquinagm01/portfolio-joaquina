import { useEffect } from 'react';
import styles from './ProjectModal.module.css';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>✕</button>
        <h2 className={styles.modalTitle}>{project.title}</h2>
        <p className={styles.modalSubtitle}>{project.subtitle}</p>
        <div className={styles.modalDescription} dangerouslySetInnerHTML={{ __html: project.description }} />
        <div className={styles.techStack}>
          {project.tech.map((tech, index) => (
            <span key={index} className={styles.techBadge}>{tech}</span>
          ))}
        </div>
        <div className={styles.modalActions}>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.btnGithub}>Ver Código</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;