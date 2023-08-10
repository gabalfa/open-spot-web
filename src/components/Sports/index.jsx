import { useSpots } from '../../hooks/useSpots'
import { useConstants } from '../../hooks/useConstants'
import {
  Container,
  Title,
  CardsContainer,
  Card,
  DetailContainer,
  SpotContainer,
  SpotContainerColumns,
  SpotContainerColumnsB,
  TitleSpot,
  DescriptionSpot,
  TemperatureContainer,
  WeatherContainer,
  MapsContainer,
  WeatherTitle,
  Temperature,
  WeatherImages,
  ArrowImages,
  OpenWithImages,
  Anchor,
} from './styles'

import downArrow from '../../assets/openspot-images/icons8-double-down-48.png'
import leftArrow from '../../assets/openspot-images/icons8-double-left-48.png'
import waze from '../../assets/openspot-images/icons8-waze-48.png'
import maps from '../../assets/openspot-images/icons8-map-marker-48.png'

export const Sports = () => {
  const { spots, setCurrentSpot, currentWeather, resetSelectedSpots } =
    useSpots()

  const { SPOTS } = useConstants()

  const resetSelected = () => {
    if (currentWeather === undefined) {
      resetSelectedSpots()
    }
  }

  return (
    <Container>
      <Title>{SPOTS.TITLE}</Title>
      <CardsContainer>
        {spots.length > 0 ? (
          <></>
        ) : (
          <TitleSpot>{SPOTS.NO_SPOTS_MESSAGE}</TitleSpot>
        )}
        {spots.map((item) => (
          <Card
            key={item.guid}
            onClick={() => setCurrentSpot(item)}
            selected={item.selected}
          >
            <SpotContainer>
              <SpotContainerColumns>
                <TitleSpot>{item.name}</TitleSpot>
                <DescriptionSpot>{`${item.country} / ${item.city}`}</DescriptionSpot>
              </SpotContainerColumns>
              <SpotContainerColumnsB>
                {item.selected && currentWeather !== undefined ? (
                  <ArrowImages src={leftArrow} alt="arrow" />
                ) : (
                  <ArrowImages src={downArrow} alt="arrow" />
                )}
              </SpotContainerColumnsB>
            </SpotContainer>
            {item.selected && currentWeather !== undefined ? (
              <DetailContainer>
                <TemperatureContainer>
                  <Temperature>
                    {currentWeather?.celsiusTemperature}
                  </Temperature>
                </TemperatureContainer>
                <WeatherContainer>
                  <WeatherImages src={currentWeather?.image} alt="weather" />
                  <WeatherTitle>
                    {currentWeather?.weather[0].description}
                  </WeatherTitle>
                </WeatherContainer>
                <MapsContainer>
                  {/* <Anchor
                    target="_blank"
                    rel="noopener"
                    href={`https://www.google.com/maps?q=${item?.location.latitude},${item?.location.longitude}`}
                  >
                    <OpenWithImages src={maps} alt="maps" />
                    Maps
                  </Anchor> */}
                  <Anchor
                    target="_blank"
                    rel="noopener"
                    href={`https://www.waze.com/ul?ll=${item?.location.latitude},${item?.location.longitude}&navigate=yes`}
                  >
                    <OpenWithImages src={waze} alt="waze"></OpenWithImages>
                  </Anchor>
                </MapsContainer>
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
