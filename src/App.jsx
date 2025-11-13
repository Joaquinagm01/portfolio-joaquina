import './index.css'
import CVInfo from './components/CVInfo';
import styles from './components/CVInfo.module.css';

function App() {

  return (
    <>
      <CVInfo />
      <div style={{marginTop: '2rem', textAlign: 'center'}}>
        <a
          href="/CVJoaquinaGomezManna.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.downloadLink}
        >
          Descargar mi CV (PDF)
        </a>
      </div>
    </>
  )
}

export default App
