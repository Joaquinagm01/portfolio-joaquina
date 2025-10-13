import CVInfo from './components/CVInfo';

function App() {

  return (
    <>
      <CVInfo />
      <div className="mt-8 text-center">
          <a
            href="/portfolio-joaquina/CVJoaquinaGomezManna.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-pink-600 underline hover:text-pink-800"
        >
          Descargar mi CV (PDF)
        </a>
      </div>
    </>
  )
}

export default App
