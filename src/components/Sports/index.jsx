import { useSpots } from '../../hooks/useSpots'
import { useConstants } from '../../hooks/useConstants'
import { CardSpots } from '../CardSpots'
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
  ForecastContainer,
  InnerForecastContainer,
  RowForecastContainer,
  ForecastTitle,
  ForecastDescription,
  ForecastDate,
  ForecastTemperature,
  ForecastImages,
  MapsContainer,
  WeatherTitle,
  Temperature,
  WeatherImages,
  ArrowImages,
  OpenWithImages,
  RemoveImages,
  Anchor,
  NewButton,
} from './styles'

import downArrow from '../../assets/openspot-images/icons8-double-down-48.png'
import leftArrow from '../../assets/openspot-images/icons8-double-up-48.png'
import waze from '../../assets/openspot-images/icons8-waze-48.png'
import maps from '../../assets/openspot-images/icons8-google-maps-100.png'
import remove from '../../assets/openspot-images/icons8-remove-48.png'

export const Sports = () => {
  const {
    spots,
    setCurrentSpot,
    currentWeather,
    currentForecast,
    removeFromSpots,
  } = useSpots()

  const { SPOTS } = useConstants()

  // console.log(currentForecast)
  return (
    <Container>
      <Title>{SPOTS.TITLE}</Title>
      <CardsContainer>
        {spots.length > 0 ? (
          <></>
        ) : (
          <NewButton to="/open-spot-web/new-spot">
            {SPOTS.NO_SPOTS_MESSAGE}
          </NewButton>
        )}
        {spots.map((item) => (
          // <CardSpots key={item.guid} item={item} />
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
                  <WeatherImages src={currentWeather?.image} alt="weather" />
                  <WeatherTitle>
                    {currentWeather?.weather[0].description}
                  </WeatherTitle>
                </TemperatureContainer>
                <ForecastContainer>
                  <ForecastTitle>{SPOTS.FORECAST_TITLE}</ForecastTitle>
                  <InnerForecastContainer>
                    {currentForecast?.map((forecast, index) => {
                      return (
                        <div key={index}>
                          {
                            // index % 8 === 0 && index > 0
                            currentForecast[index - 1]?.localDate !==
                            currentForecast[index]?.localDate ? (
                              <ForecastDate key={index + '-date'}>
                                {forecast?.formattedDate}
                              </ForecastDate>
                            ) : (
                              <></>
                            )
                          }
                          <RowForecastContainer pair={index % 2}>
                            <ForecastTemperature>
                              {forecast?.celsiusTemperature}
                            </ForecastTemperature>
                            <ForecastDescription>
                              {`${forecast?.localTime} - ${forecast?.weather[0].description}`}
                            </ForecastDescription>

                            <ForecastImages src={forecast?.image} />
                          </RowForecastContainer>
                        </div>
                      )
                    })}
                  </InnerForecastContainer>
                </ForecastContainer>
                <MapsContainer>
                  <Anchor
                    target="_blank"
                    rel="noopener"
                    href={`https://www.google.com/maps/search/?api=1&query=${item?.location.latitude},${item?.location.longitude}`}
                  >
                    <OpenWithImages src={maps} alt="maps" />
                  </Anchor>
                  <Anchor
                    target="_blank"
                    rel="noopener"
                    href={`https://www.waze.com/ul?ll=${item?.location.latitude},${item?.location.longitude}&navigate=yes`}
                  >
                    <OpenWithImages src={waze} alt="waze"></OpenWithImages>
                  </Anchor>
                  <RemoveImages
                    onClick={() => {
                      removeFromSpots(item.guid)
                    }}
                    src={remove}
                    alt="remove"
                  ></RemoveImages>
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
