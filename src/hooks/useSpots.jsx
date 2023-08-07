import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/Global'
import { spots as initialSpots } from '../data/spots.json'

export function useSpots() {
  const context = useContext(GlobalContext)

  const [newSpot, setNewSpot] = useState({})

  useEffect(() => context.loadFromSpots(initialSpots), [])

  return { ...context, newSpot, setNewSpot }
}
