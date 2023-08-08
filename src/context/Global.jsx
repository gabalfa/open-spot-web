import { createContext, useReducer } from 'react'
import { spotsReducer, spotstInitialState } from '../reducers/spots.js'

export const GlobalContext = createContext()

function useSpotsReducer() {
  const [state, dispatch] = useReducer(spotsReducer, spotstInitialState)

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

  return { state, addToSpots, removeFromSpots, clearSpots }
}

export function GlobalProvider({ children }) {
  const { state, addToSpots, removeFromSpots, clearSpots } = useSpotsReducer()

  return (
    <GlobalContext.Provider
      value={{
        spots: state,

        addToSpots,
        removeFromSpots,
        clearSpots,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
