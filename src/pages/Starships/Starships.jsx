import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { getAllStarships } from "../../services/api-calls"

import './Starships.css'

const Starships = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
      const fetchShips = async () => {
        const shipData = await getAllStarships()
        setStarships(shipData.results)
      }
      fetchShips()
  }, [])

  if (!starships.length) return ( 
    <main>
      <h1>Loading...</h1>
    </main>
  )

  return ( 
    <main>
      <div>
        {starships.map(starship => (
        <Link key={starship._id} to={`${starship.url.slice('21')}`}>
          <div className="ship-container">
              <h2>{starship.name}</h2>
          </div>
        </Link>
        ))}
      </div>
    </main>
  )
}

export default Starships