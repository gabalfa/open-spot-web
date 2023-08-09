import styled from 'styled-components'

import { TEXT_COLORS } from '../../constants/colors'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 80%;
  height: 100%;
  width: 100%;
  @media screen and (min-width: 768px) {
  }
`

export const Title = styled.label`
  color: ${TEXT_COLORS.BLACK};
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Roboto;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  transition: color 1s ease;
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
  overflow: scroll;
`

export const Card = styled.div`
  background-color: #fff;
  display: grid;
  /* transition: height 500ms ease-in-out; */
  &:hover {
    border-bottom: 1px solid ${TEXT_COLORS.HEADER};
  }
  border-bottom: ${(props) =>
    props.selected ? `1px solid ${TEXT_COLORS.HEADER}` : '1px solid #d6d9e6'};

  margin: 10px;
  padding: 10px;
  height: ${(props) => (props.selected ? '100px' : '10px')};
  align-items: center;
`

export const SpotContainer = styled.div`
  display: grid;
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
  font-family: Ubuntu;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`

export const WeatherContainer = styled.div`
  display: grid;
`

export const WeatherTitle = styled.div`
  align-self: 'center';
  color: ${TEXT_COLORS.BLACK};
  font-size: 16;
  font-weight: '600';
`

export const WeatherImages = styled.img`
  width: 40px;
  height: 40px;
`
