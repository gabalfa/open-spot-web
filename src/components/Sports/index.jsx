import { useSpots } from '../../hooks/useSpots'
import {
  Container,
  Title,
  Description,
  CardsContainer,
  Card,
  DetailContainer,
  SpotContainer,
  TitleSpot,
  DescriptionSpot,
  WeatherContainer,
  WeatherTitle,
  Temperature,
  WeatherImages,
} from './styles'
import { UI_TEXT_EN } from '../../constants/uiTexts'

export const Sports = () => {
  const {
    spots,
    currentSpot,
    setCurrentSpot,
    currentWeather,
    currentForecast,
  } = useSpots()
  console.log('currentSpot:::', currentSpot)
  // console.log('currentWeather:::', currentWeather)
  // console.log('currentForecast:::', currentForecast)
  return (
    <Container>
      <Title id="titleSelectPlan">{'Spots'}</Title>
      <CardsContainer>
        {spots.map((item) => (
          <Card
            key={item.guid}
            onClick={() => setCurrentSpot(item)}
            selected={item.selected}
          >
            <SpotContainer>
              <TitleSpot>{item.name}</TitleSpot>
              <DescriptionSpot>{`${item.country} / ${item.city}`}</DescriptionSpot>
            </SpotContainer>
            {item.selected && currentWeather !== undefined ? (
              <DetailContainer>
                <WeatherContainer>
                  <Temperature>
                    {currentWeather?.celsiusTemperature}
                  </Temperature>
                </WeatherContainer>
                <WeatherContainer>
                  <WeatherImages src={currentWeather?.image} alt="weather" />
                  <WeatherTitle>
                    {currentWeather?.weather[0].description}
                  </WeatherTitle>
                </WeatherContainer>
              </DetailContainer>
            ) : (
              <></>
            )}
          </Card>
        ))}
      </CardsContainer>
    </Container>
  )
}
