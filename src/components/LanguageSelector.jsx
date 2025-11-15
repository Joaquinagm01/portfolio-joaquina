import { useTranslation } from 'react-i18next';
import styles from './LanguageSelector.module.css';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  return (
    <div className={styles.floatingSwitcher}>
      <span style={{marginRight: '0.5rem', fontWeight: 'bold', letterSpacing: '1px', fontSize: '0.9rem', color: 'var(--neon-cyan)', textShadow: '0 0 5px rgba(0, 255, 255, 0.5)'}}>
        Idioma:
      </span>
      <button
        onClick={() => i18n.changeLanguage('es')}
        className={i18n.language === 'es' ? styles.langActive : styles.langButton}
      >ES</button>
      <button
        onClick={() => i18n.changeLanguage('en')}
        className={i18n.language === 'en' ? styles.langActive : styles.langButton}
      >EN</button>
    </div>
  );
};

export default LanguageSelector;
