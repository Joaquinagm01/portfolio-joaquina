import { useEffect, useRef } from 'react';
import styles from './ProjectModal.module.css';

const ProjectModal = ({ project, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!project) return;

    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    const handleEsc = (event) => {
      if (event.keyCode === 27) onClose();
    };

    firstElement?.focus();
    window.addEventListener('keydown', handleEsc);
    modalRef.current.addEventListener('keydown', handleTabKey);

    return () => {
      window.removeEventListener('keydown', handleEsc);
      modalRef.current?.removeEventListener('keydown', handleTabKey);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div ref={modalRef} className={styles.modalContent} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
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