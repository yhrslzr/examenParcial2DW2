import './App.css'

import { useState } from 'react'
import { 
  NavbarDigimon, 
  CardDigimon 
} from './components/components.index';
import useDigimon from './hooks/useDigimon'

function App() {
  const { digimon } = useDigimon();
  const [filters, setFilters] = useState({ search: '', level: '' });

  const filteredDigimon = digimon.filter((item) => {
    const matchesName = item.name.toLowerCase().includes(filters.search.toLowerCase());
    const matchesLevel = filters.level === '' || item.level === filters.level;
    return matchesName && matchesLevel;
  });

  return (
    <>
      <h1>Muestra de examen parcial 2</h1>
      <NavbarDigimon
        searchValue={filters.search}
        levelValue={filters.level}
        onSearchChange={(value) => setFilters((prev) => ({ ...prev, search: value }))}
        onLevelChange={(value) => setFilters((prev) => ({ ...prev, level: value }))}
      />

      <div className="digimon-container">
        {filteredDigimon.map((digimon) => (
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
