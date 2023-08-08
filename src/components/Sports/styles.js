import styled from 'styled-components'

import { TEXT_COLORS } from '../../constants/colors'

export const SelectPlanContainer = styled.div`
  display: grid;
  grid-template-rows: 20% 80%;
  height: 100%;
  width: 100%;
  @media screen and (min-width: 768px) {
    grid-template-rows: 20% 10% 70%;
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
  display: grid;
  height: 100%;
  width: 100%;
  overflow: scroll;
`

export const Card = styled.div`
  display: grid;
  /* grid-template-columns: 10% 70% 20%; */

  &:hover {
    border: 1px solid #483eff;
  }
  border: ${(props) =>
    props.active === 'active' ? '1px solid #483eff' : '1px solid #d6d9e6'};

  background-color: ${(props) =>
    props.active === 'active' ? '#F8F9FF' : '#fff'};

  height: 20px;
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  align-items: center;
`

export const SpotContainer = styled.div`
  display: grid;
`

export const TitleSpot = styled.label`
  color: var(--denim, #022959);
  font-family: Ubuntu;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

export const DescriptionSpot = styled.label`
  color: var(--grey, #9699aa);
  font-family: Ubuntu;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`

export const WeatherContainer = styled.div``

export const WeatherTitle = styled.div`
  align-self: 'center';
  color: ${TEXT_COLORS.BLANK};
  font-size: 16;
  font-weight: '600';
`

export const WeatherImages = styled.img`
  width: 40px;
  height: 40px;
`
