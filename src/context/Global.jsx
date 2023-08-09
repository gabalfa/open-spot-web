import { createContext, useReducer } from 'react'
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

  return (
    <GlobalContext.Provider
      value={{
        spots: state,

        addToSpots,
        removeFromSpots,
        clearSpots,
        setSelectedSpot,
        resetSelectedSpots,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
