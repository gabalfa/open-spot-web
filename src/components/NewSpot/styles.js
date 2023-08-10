import styled from 'styled-components'

import { BACKGROUND_COLORS, TEXT_COLORS } from '../../constants/colors'

export const SelectPlanContainer = styled.div`
  display: grid;
  grid-template-rows: 20% 20% 10% 40% 10%;
  height: 70%;
  width: 100%;
  @media screen and (min-width: 768px) {
  }
`

export const Title = styled.label`
  color: var(--grey, #9699aa);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  line-height: normal;
`

export const AutocompleteContainer = styled.div`
  /* display: grid;
  grid-template-rows: 20% 80%; */
  height: 50px;
  /* width: 100%; */
  @media screen and (min-width: 768px) {
  }
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

export const AddImage = styled.img`
  width: 40px;
  height: 40px;
`
