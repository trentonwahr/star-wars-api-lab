import { Routes, Route } from 'react-router-dom'

import './App.css'

import Starships from './pages/Starships/Starships'
import StarshipPage from './pages/StarshipPage/StarshipPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/starships' element={<Starships />} />
        <Route path='/starships/:starshipId' element={<StarshipPage />} />
      </Routes>
    </>
  )
}

export default App
