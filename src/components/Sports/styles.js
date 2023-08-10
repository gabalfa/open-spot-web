import styled from 'styled-components'

import { TEXT_COLORS } from '../../constants/colors'

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
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  line-height: normal;
`

export const Description = styled.label`
  color: var(--grey, #9699aa);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
`

export const CardsContainer = styled.div`
  height: auto;
  width: 100%;
  margin-top: 40px;
  overflow: scroll;
`

export const Card = styled.div`
  background-color: #fff;

  /* transition: height 500ms ease-in-out; */
  &:hover {
    border-bottom: 1px solid ${TEXT_COLORS.HEADER};
  }
  border-bottom: ${(props) =>
    props.selected ? `1px solid ${TEXT_COLORS.HEADER}` : '1px solid #d6d9e6'};

  padding: 10px 0;
  height: ${(props) => (props.selected ? '150px' : '30px')};
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
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: left;
`

export const DescriptionSpot = styled.label`
  color: var(--grey, #9699aa);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`
export const DetailContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 55% 15%;
`

export const TemperatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const MapsContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`

export const Temperature = styled.label`
  color: var(--grey, #9699aa);
  font-size: 48px;
  font-weight: '600';
`

export const WeatherTitle = styled.label`
  align-self: 'center';
  color: ${TEXT_COLORS.BLACK};
  font-size: 12px;
  font-weight: '600';
  text-transform: capitalize;
  margin-top: -5%;
`

export const WeatherImages = styled.img`
  width: 50px;
  height: 50px;
  margin-top: -10%;
`

export const ArrowImages = styled.img`
  width: 15px;
  height: 15px;
`

export const OpenWithImages = styled.img`
  width: 40px;
  height: 40px;
`
export const Anchor = styled.a`
  color: var(--grey, #9699aa);
  font-size: 12px;
  text-decoration: none;
`
