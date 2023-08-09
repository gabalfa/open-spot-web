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

  /* transition: height 500ms ease-in-out; */
  &:hover {
    border-bottom: 1px solid ${TEXT_COLORS.HEADER};
  }
  border-bottom: ${(props) =>
    props.selected ? `1px solid ${TEXT_COLORS.HEADER}` : '1px solid #d6d9e6'};

  padding: 10px;
  height: ${(props) => (props.selected ? '120px' : '30px')};
`

export const SpotContainer = styled.div`
  margin-bottom: 10px;
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
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`
export const DetailContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`

export const WeatherContainer = styled.div`
  display: grid;
`

export const Temperature = styled.label`
  font-family: Roboto;
  color: var(--grey, #9699aa);
  font-size: 64px;
  font-weight: '600';
`

export const WeatherTitle = styled.label`
  font-family: Roboto;
  align-self: 'center';
  color: var(--grey, #9699aa);
  font-size: 14px;
  font-weight: '600';
  text-transform: capitalize;
`

export const WeatherImages = styled.img`
  width: 60px;
  height: 60px;
`
