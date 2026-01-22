import { useEffect, useRef } from 'react';
import styles from './ProjectModal.module.css';

const ProjectModal = ({ project, onClose }) => {
  const modalRef = useRef(null);
  const openerRef = useRef(null);

  useEffect(() => {
    if (!project) return;
  // Lock body scroll to prevent background scrolling and CLS
  const prevOverflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';

    // Record the element that opened the modal to restore focus on close
    openerRef.current = document.activeElement;

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
      if (event.key === 'Escape') onClose();
    };

    firstElement?.focus();
    window.addEventListener('keydown', handleEsc);
  const modalNode = modalRef.current;
  modalNode.addEventListener('keydown', handleTabKey);

    return () => {
      window.removeEventListener('keydown', handleEsc);
      modalNode?.removeEventListener('keydown', handleTabKey);
      document.body.style.overflow = prevOverflow;
      // Restore focus to the opener element
      openerRef.current && openerRef.current.focus && openerRef.current.focus();
    };
  }, [onClose, project]);

  if (!project) return null;

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div
        ref={modalRef}
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        aria-describedby="project-modal-desc"
      >
        <button className={styles.closeButton} onClick={onClose} aria-label="Cerrar modal">✕</button>
        <h2 id="project-modal-title" className={styles.modalTitle}>{project.title}</h2>
        <p className={styles.modalSubtitle}>{project.subtitle}</p>
        <div id="project-modal-desc" className={styles.modalDescription} dangerouslySetInnerHTML={{ __html: project.description }} />
        <div className={styles.techStack}>
          {project.tech.map((tech, index) => (
            <span key={index} className={styles.techBadge}>{tech}</span>
          ))}
        </div>
        <div className={styles.modalActions}>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.btnDemo} aria-label="Abrir demo">Ver Demo</a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.btnGithub} aria-label="Abrir repositorio">Ver Código</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;