import React from 'react';
import styles from './SkeletonLoader.module.css';

const SkeletonLoader = ({ type = 'text', count = 1, className = '' }) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'text':
        return <div className={`${styles.skeletonText} ${className}`}></div>;
      
      case 'title':
        return <div className={`${styles.skeletonTitle} ${className}`}></div>;
      
      case 'avatar':
        return <div className={`${styles.skeletonAvatar} ${className}`}></div>;
      
      case 'card':
        return (
          <div className={`${styles.skeletonCard} ${className}`}>
            <div className={styles.skeletonCardImage}></div>
            <div className={styles.skeletonCardContent}>
              <div className={styles.skeletonTitle}></div>
              <div className={styles.skeletonText}></div>
              <div className={styles.skeletonText}></div>
            </div>
          </div>
        );
      
      case 'project':
        return (
          <div className={`${styles.skeletonProject} ${className}`}>
            <div className={styles.skeletonProjectImage}></div>
            <div className={styles.skeletonProjectContent}>
              <div className={styles.skeletonTitle}></div>
              <div className={styles.skeletonText}></div>
              <div className={styles.skeletonTags}>
                <div className={styles.skeletonTag}></div>
                <div className={styles.skeletonTag}></div>
                <div className={styles.skeletonTag}></div>
              </div>
            </div>
          </div>
        );
      
      case 'stat':
        return (
          <div className={`${styles.skeletonStat} ${className}`}>
            <div className={styles.skeletonStatNumber}></div>
            <div className={styles.skeletonStatLabel}></div>
          </div>
        );
      
      default:
        return <div className={`${styles.skeleton} ${className}`}></div>;
    }
  };

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <React.Fragment key={index}>
          {renderSkeleton()}
        </React.Fragment>
      ))}
    </>
  );
};

export default SkeletonLoader;
