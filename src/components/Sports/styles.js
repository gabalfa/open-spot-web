import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { TEXT_COLORS, BACKGROUND_COLORS } from '../../constants/colors'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 90%;
  height: 65vh;
  width: 100%;
  @media screen and (min-width: 768px) {
    height: 50vh;
  }
`

export const Title = styled.label`
  color: ${TEXT_COLORS.BLACK};
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 16px;
  font-style: normal;
  line-height: normal;
`

export const Description = styled.label`
  color: var(--grey, #9699aa);
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
`

export const CardsContainer = styled.div`
  height: auto;
  width: 100%;
  margin-top: 40px;
  overflow: auto;
  text-align: center;
`

export const Card = styled.div`
  text-align: left;
  background-color: #fff;

  /* transition: height 500ms ease-in-out; */
  &:hover {
    border-bottom: 1px solid ${TEXT_COLORS.HEADER};
  }
  border-bottom: ${(props) =>
    props.selected
      ? `1px solid ${TEXT_COLORS.HEADER}`
      : `1px solid ${TEXT_COLORS.BLUE_OWN}`};

  padding: 10px 0;
  height: ${(props) => (props.selected ? '145px' : '40px')};
`

export const SpotContainer = styled.div`
  display: grid;
  grid-template-columns: 95% 5%;
`

export const SpotContainerColumns = styled.div`
  display: grid;
`
export const SpotContainerColumnsB = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const TitleSpot = styled.label`
  color: ${TEXT_COLORS.HEADER};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  text-align: left;
`

export const DescriptionSpot = styled.label`
  color: ${TEXT_COLORS.BLACK};
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  &:hover {
    color: ${TEXT_COLORS.HEADER};
    /* transition: color 0.9ms ease; */
  }
  /* transition: color 0.9ms ease; */
`
export const DetailContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 65% 10%;
`

export const TemperatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ForecastContainer = styled.div`
  /* display: flex; */

  /* border-top: 1px solid ${TEXT_COLORS.BLUE_OWN}; */
  /* border-bottom: 1px solid ${TEXT_COLORS.BLUE_OWN}; */
  /* margin-left: 45px; */
  width: 100%;
  margin-top: 6px;
`

export const InnerForecastContainer = styled.div`
  display: grid;
  overflow: auto;
  height: 70px;
  width: 100%;
  margin-top: 10px;
  padding: 0 5px 0 10px;
`

export const RowForecastContainer = styled.div`
  background-color: ${(props) =>
    props.res ? BACKGROUND_COLORS.DIVIDER : BACKGROUND_COLORS.BLANK};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 25px;
  padding-left: 10px;
  border-radius: 5px;
  width: 90%;
`
export const ForecastTitle = styled.label`
  margin-right: 5px;
  margin-bottom: 5px;
  float: right;
  color: ${TEXT_COLORS.BLACK};

  font-size: 14px;
  font-weight: 600;
`

export const ForecastTemperature = styled.label`
  color: ${TEXT_COLORS.HEADER};
  font-size: 12px;
  font-weight: 600;
`

export const ForecastDate = styled.label`
  color: ${TEXT_COLORS.BLUE_OWN};
  font-size: 10px;
  font-weight: 600;
  padding-left: 10px;
  margin-top: 10px;
`

export const ForecastDescription = styled.label`
  color: ${TEXT_COLORS.BLACK};
  font-size: 10px;
  text-transform: capitalize;
  text-wrap: nowrap;
`

export const MapsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const Temperature = styled.label`
  color: var(--grey, #48484a);
  font-size: 30px;
`

export const WeatherTitle = styled.label`
  align-self: 'center';
  color: ${TEXT_COLORS.BLACK};
  font-size: 12px;
  text-transform: capitalize;
  margin-top: -5%;
  text-wrap: nowrap;
`

export const WeatherImages = styled.img`
  width: 50px;
  height: 50px;
  margin-top: -10%;
  margin-left: -5%;
`

export const ArrowImages = styled.img`
  width: 15px;
  height: 15px;
`

export const OpenWithImages = styled.img`
  width: 35px;
  height: 35px;
`

export const RemoveImages = styled.img`
  width: 25px;
  height: 25px;
`

export const Anchor = styled.a`
  color: var(--grey, #9699aa);
  font-size: 12px;
  text-decoration: none;
`

export const NewButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-radius: 8px;
  border: 1px solid ${TEXT_COLORS.BLUE_OWN};
  background: ${TEXT_COLORS.BLANK};
  color: ${TEXT_COLORS.BLACK};
  text-decoration: none;

  padding: 20px;

  margin: 0px auto;
`

export const ForecastImages = styled.img`
  width: 30px;
  height: 30px;
`
