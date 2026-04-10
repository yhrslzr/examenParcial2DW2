import './App.css'

import CardDigimon from './components/CardDigimon'

import useDigimon from './hooks/useDigimon'

function App() {
  const { digimon } = useDigimon();

  return (
    <>
      <h1>Muestra de examen parcial 2</h1>
      <div className="digimon-container">
        {digimon.map((digimon) => (
          <CardDigimon
            key={digimon.id}
            nombreDigimon={digimon.name}
            nivelDigimon={digimon.level}
            imgDigimon={digimon.img}
          />
        ))}
      </div>
    </>
  )
}

export default App
