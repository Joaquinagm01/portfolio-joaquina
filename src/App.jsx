import { useState } from 'react'
import reactLogo from './assets/react.svg'
import CVInfo from './components/CVInfo';
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

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
