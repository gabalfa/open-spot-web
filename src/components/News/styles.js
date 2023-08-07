import styled from 'styled-components'

import { TEXT_COLORS } from '../../constants/colors'

export const SelectPlanContainer = styled.div`
  display: grid;

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
