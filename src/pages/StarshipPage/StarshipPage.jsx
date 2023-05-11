import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { getStarship } from "../../services/api-calls"

import './StarshipPage.css'

const StarshipPage = () => {
  const [starship, setStarship] = useState({})
  const {starshipId}  = useParams()

  useEffect(() => {
    const fetchStarship = async () => {
      const starship = await getStarship((starshipId))
      setStarship(starship)
    }
    fetchStarship()
  }, [starshipId])

  if (!starship.name) return ( 
    <main>
      <h1>Loading...</h1>
    </main>
  )

  return ( 
    <main>
      <section>
        <h1>Starship Details</h1>
        <div>
          <h3>NAME: {starship.name}</h3>
          <h3>MODEL: {starship.model}</h3>
          <Link to="/starships">
            <button>RETURN</button>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default StarshipPage