import { createContext, useReducer, useState } from 'react'

import { ConstantsProvider } from './Constants'
import { spotsReducer, spotstInitialState } from '../reducers/spots.js'

export const GlobalContext = createContext()

function useSpotsReducer() {
  const [state, dispatch] = useReducer(spotsReducer, spotstInitialState)

  const resetSelectedSpots = () =>
    dispatch({
      type: 'RESET_SELECTED_SPOT',
    })

  const addToSpots = (spot) =>
    dispatch({
      type: 'ADD_TO_SPOTS',
      payload: spot,
    })

  const removeFromSpots = (spot) =>
    dispatch({
      type: 'REMOVE_FROM_SPOTS',
      payload: spot,
    })

  const clearSpots = () => dispatch({ type: 'CLEAR_SPOTS' })

  const setSelectedSpot = (guid) =>
    dispatch({
      type: 'SET_SELECTED_SPOT',
      payload: guid,
    })

  return {
    state,
    addToSpots,
    removeFromSpots,
    clearSpots,
    setSelectedSpot,
    resetSelectedSpots,
  }
}

export function GlobalProvider({ children }) {
  const {
    state,
    addToSpots,
    removeFromSpots,
    clearSpots,
    setSelectedSpot,
    resetSelectedSpots,
  } = useSpotsReducer()

  const [language, setLanguage] = useState(true)
  const [newSpot, setNewSpot] = useState(null)
  const [currentSpot, setCurrentSpot] = useState(undefined)
  const [currentWeather, setCurrentWeather] = useState(undefined)
  const [currentForecast, setCurrentForecast] = useState(undefined)

  return (
    <GlobalContext.Provider
      value={{
        spots: state,
        language,
        setLanguage,
        newSpot,
        setNewSpot,
        currentSpot,
        setCurrentSpot,
        currentWeather,
        setCurrentWeather,
        currentForecast,
        setCurrentForecast,
        addToSpots,
        removeFromSpots,
        clearSpots,
        setSelectedSpot,
        resetSelectedSpots,
      }}
    >
      <ConstantsProvider>{children}</ConstantsProvider>
    </GlobalContext.Provider>
  )
}
