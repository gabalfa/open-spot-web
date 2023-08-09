import { useSpots } from '../../hooks/useSpots'
import {
  Container,
  Title,
  Description,
  CardsContainer,
  Card,
  SpotContainer,
  TitleSpot,
  DescriptionSpot,
  WeatherContainer,
  WeatherTitle,
  WeatherImages,
} from './styles'
import { UI_TEXT_EN } from '../../constants/uiTexts'

export const Sports = () => {
  const { spots, setCurrentSpot, currentWeather, currentForecast } = useSpots()
  // console.log('currentWeather:::', currentWeather)
  // console.log('currentForecast:::', currentForecast)
  return (
    <Container>
      <Title id="titleSelectPlan">{'Sports'}</Title>
      {/* <Description>{UI_TEXT_EN.HEADER.FILTER_PLACEHOLDER}</Description> */}

      <CardsContainer>
        {spots.map((item) => (
          <Card
            key={item.guid}
            onClick={() => setCurrentSpot(item)}
            selected={item.selected}
          >
            <SpotContainer>
              <TitleSpot>{item.name}</TitleSpot>
              <DescriptionSpot>{item.description}</DescriptionSpot>
            </SpotContainer>
            {item.selected ? (
              <WeatherContainer>
                <WeatherTitle>
                  {currentWeather?.weather[0].description}
                </WeatherTitle>
                <WeatherTitle>
                  {currentWeather?.celsiusTemperature}
                </WeatherTitle>
                <WeatherImages src={currentWeather?.image} alt="weather" />
              </WeatherContainer>
            ) : (
              <></>
            )}
          </Card>
        ))}
      </CardsContainer>

      {/* {currentWeather !== undefined ? (
        <WeatherContainer>
          <WeatherTitle>{currentWeather?.celsiusTemperature}</WeatherTitle>
          <WeatherTitle>{currentWeather?.weather[0].description}</WeatherTitle>
          <WeatherImages src={currentWeather?.image} alt="weather" />
        </WeatherContainer>
      ) : (
        <></>
      )} */}
    </Container>
  )
}
