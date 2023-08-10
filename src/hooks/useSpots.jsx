import { useContext, useEffect } from 'react'
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete'

import { GlobalContext } from '../context/Global'

export function useSpots() {
  const URL_WEATHER = 'https://api.openweathermap.org'
  const URL_WEATHER_IMG = 'https://openweathermap.org'

  const context = useContext(GlobalContext)

  const {
    spots,
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
    setSelectedSpot,
    resetSelectedSpots,
  } = context

  const handleAddSpot = () => {
    geocodeByAddress(newSpot?.label).then(async (results) => {
      const { lat, lng } = await getLatLng(results[0])
      addToSpots({
        guid: newSpot.value.place_id,
        name: newSpot.value.structured_formatting.main_text.toUpperCase(),
        location: {
          latitude: lat,
          longitude: lng,
        },
        country:
          results[0].address_components[
            results[0].address_components.length - 2
          ].long_name,
        state:
          results[0].address_components[
            results[0].address_components.length - 3
          ].long_name,
        city: results[0].address_components[
          results[0].address_components.length - 4
        ].long_name,
        selected: false,
        type: 'sport',
      })
    })
  }

  useEffect(() => resetSelectedSpots(), [])

  useEffect(() => {
    if (currentSpot !== undefined) {
      setSelectedSpot(currentSpot)
      fetch(
        `${URL_WEATHER}/data/2.5/weather?lat=${
          currentSpot?.location.latitude
        }&lon=${currentSpot?.location.longitude}&appid=${
          import.meta.env.VITE_API_KEY_WEATHER
        }&lang=${language ? 'en' : 'es'}`
      )
        .then((response) => response.json())
        .then((json) => {
          setCurrentWeather({
            ...json,
            celsiusTemperature: `${Math.round(
              parseFloat(json.main.temp) - 273.15
            )}°`,
            image: `${URL_WEATHER_IMG}/img/wn/${json.weather[0].icon}@4x.png`,
          })
        })

      fetch(
        `${URL_WEATHER}/data/2.5/forecast?lat=${
          currentSpot?.location.latitude
        }&lon=${currentSpot?.location.longitude}&appid=${
          import.meta.env.VITE_API_KEY_WEATHER
        }&lang=${language ? 'en' : 'es'}`
      )
        .then((response) => response.json())
        .then((json) => setCurrentForecast(json))
    }
  }, [currentSpot, language])

  return {
    ...context,
    spots,
    newSpot,
    language,
    setLanguage,
    currentSpot,
    currentWeather,
    currentForecast,
    setNewSpot,
    handleAddSpot,
    setCurrentSpot,
    resetSelectedSpots,
  }
}
