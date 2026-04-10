import './App.css'


import { 
  NavbarDigimon, CardDigimon 
} from './components/components.index';

import useDigimon from './hooks/useDigimon'


function App() {
  const { digimon } = useDigimon();
  const { setFiltradigimon } = useDigimon();

  
  return (
    <>
      <h1>Muestra de examen parcial 2</h1>
      <div className="digimon-container">
        <NavbarDigimon 
          onChange={setFiltradigimon}
          
        />
      
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
