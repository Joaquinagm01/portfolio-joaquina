import { useTranslation } from 'react-i18next';
import styles from '../App.module.css';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  return (
    <div className={styles.languageSelector}>
      <span style={{marginRight: '0.5rem', fontWeight: 'bold', letterSpacing: '1px', fontSize: '1rem'}}>
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
