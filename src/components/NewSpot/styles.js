import styled from 'styled-components'

import { BACKGROUND_COLORS, TEXT_COLORS } from '../../constants/colors'

export const SelectPlanContainer = styled.div`
  display: grid;
  grid-template-rows: 20% 20% 60%;
  height: 70%;
  width: 100%;
  @media screen and (min-width: 768px) {
  }
`

export const Title = styled.label`
  color: ${TEXT_COLORS.BLACK};
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Roboto;
  font-size: 16px;
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
  color: ${TEXT_COLORS.BLACK};
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
`

export const AddImage = styled.img`
  width: 50px;
  height: 50px;
`

export const ConfirmContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`
