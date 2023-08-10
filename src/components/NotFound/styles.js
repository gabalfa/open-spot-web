import styled from 'styled-components'
import { TEXT_COLORS } from '../../constants/colors'

export const SelectPlanContainer = styled.div`
  display: grid;
  grid-template-rows: 20% 20% 60%;
  text-align: center;
  height: 100%;
  width: 100%;

  @media screen and (min-width: 768px) {
  }
`

export const Title = styled.label`
  color: var(--grey, #9699aa);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  transition: color 1s ease;
`

export const TitleMain = styled.label`
  color: ${TEXT_COLORS.BLACK};
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Roboto;
  font-size: 50px;
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

export const ImageWellcome = styled.img`
  margin: 0 auto;
`
