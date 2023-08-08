import { useContext, useEffect, useCallback, useState } from 'react'
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete'
import { GlobalContext } from '../context/Global'

export function useSpots() {
  const URL_WEATHER = 'https://api.openweathermap.org'
  const URL_WEATHER_IMG = 'https://openweathermap.org'

  const context = useContext(GlobalContext)

  const { addToSpots } = context

  const [newSpot, setNewSpot] = useState(null)

  const [currentSpot, setCurrentSpot] = useState(undefined)

  const [currentWeather, setCurrentWeather] = useState(undefined)

  const [currentForecast, setCurrentForecacst] = useState(undefined)

  const handleAddSpot = () => {
    geocodeByAddress(newSpot?.label)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        addToSpots({
          guid: newSpot.value.place_id,
          name: newSpot.value.structured_formatting.main_text.toUpperCase(),
          location: {
            latitude: lat,
            longitude: lng,
          },
          type: 'sport',
        })
      })
  }

  useEffect(() => {
    if (currentSpot !== undefined) {
      const { location } = currentSpot
      fetch(
        `${URL_WEATHER}/data/2.5/weather?lat=${location?.latitude}&lon=${
          location?.longitude
        }&appid=${import.meta.env.VITE_API_KEY_WEATHER}&lang=${'en'}`
      )
        .then((response) => response.json())
        .then((json) =>
          setCurrentWeather({
            ...json,
            celsiusTemperature: `${Math.round(
              parseFloat(json.main.temp) - 273.15
            )}°C`,
            image: `${URL_WEATHER_IMG}/img/wn/${json.weather[0].icon}@4x.png`,
          })
        )

      fetch(
        `${URL_WEATHER}/data/2.5/forecast?lat=${location?.latitude}&lon=${
          location?.longitude
        }&appid=${import.meta.env.VITE_API_KEY_WEATHER}&lang=${'en'}`
      )
        .then((response) => response.json())
        .then((json) => setCurrentForecacst(json))
    }
  }, [currentSpot])

  return {
    ...context,
    newSpot,
    currentWeather,
    currentForecast,
    setNewSpot,
    handleAddSpot,
    setCurrentSpot,
  }
}
