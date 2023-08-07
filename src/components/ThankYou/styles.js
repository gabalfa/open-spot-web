import styled from 'styled-components'

import { CheckIcon } from './svg/CheckIcon'

export const ThankYouContainer = styled.div`
  margin: 0 auto;
  padding-top: 150px;
  text-align: center;
  @media screen and (min-width: 768px) {
  }
`

export const Title = styled.h1`
  color: var(--denim, #022959);
  text-align: center;
  font-family: Ubuntu;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const CheckIconStyled = styled(CheckIcon)`
  @media screen and (min-width: 768px) {
  }
`
export const Description = styled.div`
  color: var(--grey, #9699aa);
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Ubuntu;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
`
