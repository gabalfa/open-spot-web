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
    removeFromSpots,
    setSelectedSpot,
    resetSelectedSpots,
  } = context

  const handleAddSpot = () => {
    geocodeByAddress(newSpot?.label).then(async (results) => {
      const { lat, lng } = await getLatLng(results[0])
      addToSpots({
        guid: newSpot.value.place_id,
        name: newSpot.value.structured_formatting.main_text,
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
      setNewSpot('')
      document.getElementById('goToSpots').click()
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
        .then((json) => {
          const { list } = json
          const newList = list.map((forecast) => {
            const localDT = new Date()
            const utcTime = Number(forecast?.dt_txt.slice(11, 13))

            const gmtDiff = Number(localDT.toString().slice(28, 31))
            const diffTime = utcTime + gmtDiff
            const localTime = (diffTime > 0 ? diffTime : 24 + diffTime) + ':00'

            const localDate =
              forecast?.dt_txt.slice(0, 8) +
              (diffTime < 0
                ? Number(forecast?.dt_txt.slice(8, 10)) - 1
                : forecast?.dt_txt.slice(8, 10))

            // console.log('localTime::', localTime + ' - ' + localDate)

            return {
              ...forecast,
              celsiusTemperature: `${Math.round(
                parseFloat(forecast.main.temp) - 273.15
              )}°`,
              localTime,
              localDate,
              image: `${URL_WEATHER_IMG}/img/wn/${forecast.weather[0].icon}@4x.png`,
            }
          })

          setCurrentForecast(newList)
        })
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
    removeFromSpots,
    handleAddSpot,
    setCurrentSpot,
  }
}
